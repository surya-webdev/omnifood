const navBtn = document.querySelector('.nav-icon');
const closeBtn = document.querySelector('.icon-close');
const overlay = document.querySelector('.main-nav');
navBtn.addEventListener('click', function () {
  overlay.classList.remove('hidden');
  navBtn.classList.add('hidden');
  navBtn.classList.add('hidden');
  closeBtn.classList.remove('hidden');
  // closeBtn.classList.remove('hidden');
});
closeBtn.addEventListener('click', function () {
  overlay.classList.add('hidden');
  closeBtn.classList.add('hidden');
  navBtn.classList.toggle('hidden');
});
// smooth behaviour in safari
const allLink = document.querySelectorAll('a:link');
allLink.forEach(function (link) {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const href = link.getAttribute('href');
    if (href === '#') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
    if (href !== '#' && href.startsWith('#')) {
      const sectionEl = document.querySelector(href);
      // console.log(sectionEl);
      sectionEl.scrollIntoView({ behavior: 'smooth' });
    }
    if (link.classList.contains('nav-link')) {
      overlay.classList.add('hidden');
      closeBtn.classList.add('hidden');
      navBtn.classList.toggle('hidden');
    }
  });
});
// sticky nav
const sectionHeroEl = document.querySelector('.hero-section');

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (!ent.isIntersecting) {
      document.body.classList.add('sticky');
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove('sticky');
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: '-80px',
  }
);
obs.observe(sectionHeroEl);
