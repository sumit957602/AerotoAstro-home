function init() {
  const mobileIcon = document.getElementById('mobile-icon');
  const mobileMenu = document.getElementById('mobile-menu');

  function openCloseMenu() {
    mobileMenu.classList.toggle('block');
    mobileMenu.classList.toggle('active');
  }

  window.changeIcon = function (icon) {
    icon.classList.toggle('fa-xmark');
  };

  if (mobileIcon && mobileMenu) {
    mobileIcon.addEventListener('click', openCloseMenu);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

