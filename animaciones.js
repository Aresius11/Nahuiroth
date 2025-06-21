const elements = document.querySelectorAll('.fade-in-up');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target); // Solo una vez
    }
  });
}, {
  threshold: 0.1
});

elements.forEach(el => observer.observe(el));