// Navbar

const collapseMobileButton = document.querySelector('#collapseMobileButton');
const collapse = document.querySelector('.collapse');
const closeCollapse = document.querySelector('#close-collapse');

closeCollapse.addEventListener('click', () => {
    collapseMobileButton.classList.add('collapsed');
    collapse.classList.remove('show');
})

const offcanvasNav = document.querySelector('.offcanvas-nav');
const backToNavButton = document.querySelector('#back-to-nav');
const offcanvasNavDropdowns = document.querySelector('.offcanvas-nav-dropdowns');
offcanvasNav.addEventListener('click', () => {
    offcanvasNav.classList.remove('d-flex');
    offcanvasNav.classList.add('d-none');
    backToNavButton.classList.remove('invisible');
    backToNavButton.removeAttribute('disabled');
    offcanvasNavDropdowns.classList.remove('d-none');
    offcanvasNavDropdowns.classList.add('d-block');
})
backToNavButton.addEventListener('click', () => {
    offcanvasNav.classList.remove('d-none');
    offcanvasNav.classList.add('d-flex');
    backToNavButton.classList.add('invisible');
    backToNavButton.setAttribute('disabled', '');
    offcanvasNavDropdowns.classList.remove('d-block');
    offcanvasNavDropdowns.classList.add('d-none');
})