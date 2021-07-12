const mobileMenu = document.querySelector('.mobile-menu');
const regionDropdown = document.querySelector('.region-dropdown');
const mobileMenuBtn = document.querySelector('.mobile-menu-button');
const mobileMenuBtnClose = document.querySelector('.btn-close');
const regionDropdownBtn = document.querySelector('.region-dropdown-btn');

mobileMenuBtn.addEventListener('click', function(){
    mobileMenu.classList.toggle('is-open');
})

mobileMenuBtnClose.addEventListener('click', function(){
    mobileMenu.classList.toggle('is-open');
})

regionDropdownBtn.addEventListener('click', function(){
    regionDropdown.classList.toggle('is-open');
    regionDropdownBtn.textContent = '11';
})