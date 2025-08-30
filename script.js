const mobile_icon = document.getElementById('mobile-icon');
const mobile_menu = document.getElementById('mobile-menu');
const hamburger_icon = document.querySelector("#mobile-icon i");

function openCloseMenu() {
  if (mobile_menu) {
    mobile_menu.classList.toggle('block');
    mobile_menu.classList.toggle('active');
  }
}

function changeIcon(icon) {
  icon.classList.toggle("fa-xmark");
}

if (mobile_icon && mobile_menu) {
  mobile_icon.addEventListener('click', openCloseMenu);
}

