const vsl = document.querySelector('#video-diagnostico');

if (vsl) {
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          vsl.play().catch(() => {
            // Keep the native controls available if autoplay is blocked.
          });
        } else {
          vsl.pause();
        }
      });
    }, { threshold: [0, 0.5] });

    observer.observe(vsl);
  } else {
    vsl.play().catch(() => {});
  }
}
