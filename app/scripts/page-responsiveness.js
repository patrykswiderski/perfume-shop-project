function updateClass() {
  let elementOffcanvas = document.getElementById('offcanvas-menu');
  let elementOffcanvas2 = document.getElementById('offcanvas-header');
  let elementCollapse = document.getElementById('navbar-middle__collapse');

  if (window.innerWidth < 1024) {
    elementOffcanvas.classList.add('offcanvas', 'offcanvas-start');
    elementOffcanvas.classList.remove('navbar-bottom__row', 'row', 'justify-content-center');
    elementOffcanvas2.classList.remove('d-none');
    elementCollapse.setAttribute('data-bs-toggle', 'collapse')
    elementCollapse.setAttribute('data-bs-target', '#navbar-middle__collapse-menu');
  } else {
    elementOffcanvas.classList.remove('offcanvas', 'offcanvas-start');
    elementOffcanvas.classList.add('navbar-bottom__row', 'row', 'justify-content-center');
    elementOffcanvas2.classList.add('d-none');
    elementCollapse.removeAttribute('data-bs-toggle')
    elementCollapse.removeAttribute('data-bs-target');
  }
}

function updateClassFooter() {
  let elementCollapseFooterButtonFirst = document.getElementById('footer__menu-first');
  let elementCollapseFooterButtonSecond = document.getElementById('footer__menu-second');
  let elementCollapseFooterButtonThird = document.getElementById('footer__menu-third');
  let elementCollapseFooterMenuFirst = document.getElementById('menu-first');
  let elementCollapseFooterMenuSecond = document.getElementById('menu-second');
  let elementCollapseFooterMenuThird = document.getElementById('menu-third');


  if (window.innerWidth < 768) {
    elementCollapseFooterButtonFirst.setAttribute('data-bs-toggle', 'collapse');
    // elementCollapseFooterButtonFirst.classList.add('btn');

    elementCollapseFooterButtonSecond.setAttribute('data-bs-toggle', 'collapse');
    elementCollapseFooterButtonSecond.classList.add('collapsed');

    elementCollapseFooterButtonThird.setAttribute('data-bs-toggle', 'collapse');
    elementCollapseFooterButtonThird.classList.add('collapsed');

    elementCollapseFooterMenuFirst.setAttribute('data-bs-parent', '#accordion');
    elementCollapseFooterMenuFirst.classList.add('collapse', 'show');

    elementCollapseFooterMenuSecond.setAttribute('data-bs-parent', '#accordion');
    elementCollapseFooterMenuSecond.classList.add('collapse');

    elementCollapseFooterMenuThird.setAttribute('data-bs-parent', '#accordion');
    elementCollapseFooterMenuThird.classList.add('collapse');
  } else {
    elementCollapseFooterButtonFirst.removeAttribute('data-bs-toggle');

    elementCollapseFooterButtonSecond.removeAttribute('data-bs-toggle');
    elementCollapseFooterButtonSecond.classList.remove('collapsed');

    elementCollapseFooterButtonThird.removeAttribute('data-bs-toggle');
    elementCollapseFooterButtonThird.classList.remove('collapsed');

    elementCollapseFooterMenuFirst.removeAttribute('data-bs-parent');
    elementCollapseFooterMenuFirst.classList.remove('collapse');

    elementCollapseFooterMenuSecond.removeAttribute('data-bs-parent');
    elementCollapseFooterMenuSecond.classList.remove('collapse');

    elementCollapseFooterMenuThird.removeAttribute('data-bs-parent');
    elementCollapseFooterMenuThird.classList.remove('collapse');
  }
}

updateClass();
window.addEventListener('resize', updateClass);

updateClassFooter();
window.addEventListener('resize', updateClassFooter);

document.addEventListener("DOMContentLoaded", function() {
  var originalOffcanvasMenu = document.getElementById('navbar-bottom__offcanvas-menu');
  var clonedOffcanvasMenu = originalOffcanvasMenu.cloneNode(true);

  var dropdownElement = document.getElementById('navbar-bottom__dropdown-element');

  dropdownElement.appendChild(clonedOffcanvasMenu);
});