// Countdown Logic
const targetDate = new Date('2025-12-19T13:30:00').getTime();

const updateCountdown = () => {
  const now = new Date().getTime();
  const distance = Math.abs(targetDate - now);

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  const daysEl = document.getElementById('days');
  const hoursEl = document.getElementById('hours');
  const minutesEl = document.getElementById('minutes');

  if (daysEl) daysEl.innerText = days < 10 ? '0' + days : days;
  if (hoursEl) hoursEl.innerText = hours < 10 ? '0' + hours : hours;
  if (minutesEl) minutesEl.innerText = minutes < 10 ? '0' + minutes : minutes;
};

// Initial call and interval setup
updateCountdown();
setInterval(updateCountdown, 60000); // update every minute

// Mobile Menu Logic
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuLinks = mobileMenu.querySelectorAll('.nav-link');

mobileMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

mobileMenuLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
  });
});

// RSVP Form Submission
const rsvpForm = document.getElementById('rsvp-form');
if (rsvpForm) {
  rsvpForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(rsvpForm);
    const nombre = formData.get('nombre');
    const restricciones = formData.get('restricciones');
    
    // Simulate successful form submission
    alert(`¡Gracias por confirmar tu asistencia, ${nombre}!`);
    rsvpForm.reset();
  });
}

// Fade in on scroll animations
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.fade-in');
  elements.forEach(el => observer.observe(el));
});
