const btn = document.querySelector('#menu-button');
const mobileNav = document.querySelector('#mobile-menu');
const navigation = document.querySelector('#nav');
const body = document.body;
let lastScroll = 0;

const navigationHeight = navigation.offsetHeight;
document.documentElement.style.setProperty(
    '--scroll-padding',
    navigationHeight + 'px'
)


// Sticky scroll navigation menu
window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;

    if (currentScroll <= 0) {
        body.classList.remove('scroll-up');
    }
    if ( currentScroll > lastScroll && !body.classList.contains('scroll-down')) {
        body.classList.remove('scroll-up');
        body.classList.add('scroll-down');
    }
    if ( currentScroll < lastScroll && body.classList.contains('scroll-down')) {
        body.classList.remove('scroll-down');
        body.classList.add('scroll-up');
    }
    lastScroll = currentScroll;
})

// Hamburger Menu toggle animation section
btn.addEventListener('click', () => {
    btn.classList.toggle('open');
    mobileNav.classList.toggle('flex');
    mobileNav.classList.toggle('hidden');
})