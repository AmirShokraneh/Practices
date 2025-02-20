const header = document.querySelector('header');
const closeBtn = document.querySelector('#close-btn');
const menuBtn = document.querySelector('#menu-btn');

menuBtn.addEventListener('click', () => {
    header.classList.toggle('show-mobile-menu')
})
closeBtn.addEventListener('click', () => {
    menuBtn.click();
})