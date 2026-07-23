


// -------------------------------------------------- Mobile Burger Menu
(function () {
  var burger = document.querySelector('.menu-burger');
  var nav = document.getElementById('primaryNav');
  var overlay = document.querySelector('.nav-overlay');
  var header = document.querySelector('.site-header');
  
  if (!burger || !nav || !overlay || !header) return;

  function closeNav() {
    document.body.classList.remove('nav-open');
    burger.setAttribute('aria-expanded', 'false');
    // Remove any inline styles that might have been added
    header.style.background = '';
  }

  function openNav() {
    document.body.classList.add('nav-open');
    burger.setAttribute('aria-expanded', 'true');
    // Ensure header background stays consistent
    header.style.background = 'var(--bg)';
  }

  function toggleNav() {
    var isOpen = document.body.classList.contains('nav-open');
    if (isOpen) {
      closeNav();
    } else {
      openNav();
    }
  }

  // Click handler for burger button
  burger.addEventListener('click', toggleNav);

  // Click handler for overlay
  overlay.addEventListener('click', closeNav);

  // Close menu when clicking on a nav link
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
      closeNav();
    }
  });

  // Close menu on Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      closeNav();
    }
  });

  // Close menu on window resize to desktop view
  var resizeTimer;
  window.addEventListener('resize', function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      if (window.innerWidth > 900) {
        closeNav();
      }
    }, 250);
  });

  // Handle scroll to prevent issues with fixed header
  var scrollPosition = 0;
  window.addEventListener('scroll', function() {
    if (document.body.classList.contains('nav-open')) {
      // Keep header background consistent during scroll
      header.style.background = 'var(--bg)';
    }
  });
})();