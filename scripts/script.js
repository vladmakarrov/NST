const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuBtn = document.querySelector('.mobile-menu-button');
const copyrightCurrentYear = document.querySelector('.footer-copyright');
const footerLogo = document.querySelector('.footer-logo-img')

mobileMenuBtn.addEventListener('click', function(){
    mobileMenu.classList.toggle('active');
    mobileMenuBtn.classList.toggle('active');
    document.body.classList.toggle('menu-open');
})

const currentYear = document.createElement('span');
currentYear.textContent = new Date().getFullYear();
copyrightCurrentYear.appendChild(currentYear);

function setFooterLogo () {
    if (document.documentElement.clientWidth < 768) {
        footerLogo.setAttribute('src', 'assets/img/logo_mobile.svg');
    } else {
        footerLogo.setAttribute('src', 'assets/img/logo.svg');
    }
}

footerLogo.addEventListener('load', setFooterLogo());
window.addEventListener('resize', setFooterLogo);



