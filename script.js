document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector('.navbar');

  if (navbar) {
    navbar.style.transition = 'background-color 0.3s ease';

    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(10, 10, 10, 0.6)';
      } else {
        navbar.style.backgroundColor = 'rgba(10, 10, 10, 0.3)';
      }
    });
  }
});
