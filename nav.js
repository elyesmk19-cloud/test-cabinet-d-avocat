const burger = document.querySelector('.burger');
const overlay = document.querySelector('.menu-overlay');
const navLinks = document.querySelectorAll('.menu-overlay nav ul li a');

if (burger && overlay) {
  burger.addEventListener('click', () => {
    const isOpen = overlay.classList.contains('open');
    if (isOpen) { closeMenu(); } else { openMenu(); }
  });
  navLinks.forEach(link => {
    link.addEventListener('mouseenter', () => { link.style.fontStyle = 'italic'; });
    link.addEventListener('mouseleave', () => { link.style.fontStyle = ''; });
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeMenu();
  });
}

function openMenu() {
  overlay.classList.add('open');
  burger.classList.add('open');
  burger.setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden';
}
function closeMenu() {
  overlay.classList.remove('open');
  burger.classList.remove('open');
  burger.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}

/* Scroll reveal */
const reveals = document.querySelectorAll('.reveal');
if (reveals.length && window.IntersectionObserver) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  reveals.forEach(el => revealObserver.observe(el));
} else {
  reveals.forEach(el => el.classList.add('visible'));
}
