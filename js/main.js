const navMobile = document.querySelector('.nav-mobile');
const navBtn = document.querySelector('.hamburger');
const footerYear = document.querySelector('.footer__year');
const body = document.querySelector('body');
const navLinks = document.querySelectorAll('.nav__link');

const handleNav = () => {
    navBtn.classList.toggle('is-active');
    navMobile.classList.toggle('nav-mobile--active');
    body.classList.add('no-scroll')
}

navBtn.addEventListener('click', handleNav);
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        body.classList.remove('no-scroll');
        navBtn.classList.remove('is-active');
        navMobile.classList.remove('nav-mobile--active');

        
    })
})


const handleCurrentYear = () => {
    const year = (new Date).getFullYear();
    footerYear.innerText = year;
}

handleCurrentYear();