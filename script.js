const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('.main-nav');
const year = document.getElementById('year');

if (year) {
  year.textContent = new Date().getFullYear();
}

if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  mainNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  const successMessage = contactForm.querySelector('.success-message');

  contactForm.addEventListener('submit', () => {
    if (successMessage) {
      successMessage.classList.add('visible');
    }
  });
}


