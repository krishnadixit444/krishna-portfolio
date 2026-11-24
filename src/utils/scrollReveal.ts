import gsap from 'gsap';

/**
 * Animates elements smoothly when they enter (or are above/within) the viewport.
 * Uses both IntersectionObserver and a scroll fallback so programmatic jumps
 * never leave elements stuck at opacity: 0.
 */
export function observeReveal(
  container: HTMLElement | null,
  selector: string,
  options?: { stagger?: number; y?: number; duration?: number }
): () => void {
  if (!container) return () => {};

  const elements = Array.from(container.querySelectorAll<HTMLElement>(selector));
  if (elements.length === 0) return () => {};

  const yOffset = options?.y ?? 32;
  const duration = options?.duration ?? 0.7;
  const stagger = options?.stagger ?? 0.1;
  const revealed = new Set<HTMLElement>();

  // Prepare initial state only for elements strictly below the current fold
  const vh = window.innerHeight || 900;
  elements.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top > vh * 0.98) {
      gsap.set(el, { opacity: 0, y: yOffset });
    } else {
      revealed.add(el);
    }
  });

  const revealBatch = (targets: HTMLElement[]) => {
    const pending = targets.filter((el) => !revealed.has(el));
    if (pending.length === 0) return;
    pending.forEach((el) => revealed.add(el));
    gsap.to(pending, {
      opacity: 1,
      y: 0,
      duration,
      stagger,
      ease: 'power3.out',
      overwrite: 'auto',
      clearProps: 'transform,opacity',
    });
  };

  const checkVisible = () => {
    const viewportH = window.innerHeight || 900;
    const ready = elements.filter((el) => {
      if (revealed.has(el)) return false;
      const rect = el.getBoundingClientRect();
      return rect.top <= viewportH * 0.98;
    });
    if (ready.length > 0) revealBatch(ready);
  };

  const observer = new IntersectionObserver(
    (entries) => {
      const entering = entries
        .filter((e) => e.isIntersecting)
        .map((e) => e.target as HTMLElement);
      if (entering.length > 0) revealBatch(entering);
    },
    { threshold: 0.02, rootMargin: '0px 0px 40px 0px' }
  );

  elements.forEach((el) => {
    if (!revealed.has(el)) observer.observe(el);
  });

  window.addEventListener('scroll', checkVisible, { passive: true });
  const safetyCheck = setInterval(checkVisible, 350);

  return () => {
    observer.disconnect();
    window.removeEventListener('scroll', checkVisible);
    clearInterval(safetyCheck);
    gsap.killTweensOf(elements);
  };
}
