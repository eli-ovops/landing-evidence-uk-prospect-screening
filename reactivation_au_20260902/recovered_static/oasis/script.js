const reveals = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        currentObserver.unobserve(entry.target);
      });
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
  );

  reveals.forEach((element) => observer.observe(element));
} else {
  reveals.forEach((element) => element.classList.add('is-visible'));
}

const heroActions = document.querySelector('.hero-actions');
const mobileBook = document.querySelector('.mobile-book');

if (heroActions && mobileBook && 'IntersectionObserver' in window) {
  const bookingObserver = new IntersectionObserver(
    ([entry]) => mobileBook.classList.toggle('is-active', !entry.isIntersecting && window.scrollY > 200),
    { threshold: 0.1 },
  );

  bookingObserver.observe(heroActions);
}
