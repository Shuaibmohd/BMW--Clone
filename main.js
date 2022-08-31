const mobileMenu = document.querySelector('.mobile-menu')
const menuBtn = document.getElementById('menu');
const closeBtn = document.querySelector('.close');


let scroll = false

menuBtn.addEventListener('click', navToggle);
closeBtn.addEventListener('click', remove)

function navToggle() {
    mobileMenu.classList.add('show');   
    document.body.classList.toggle('stop-scroll');
}
function remove() {
    mobileMenu.classList.remove('show')
    document.body.classList.remove('stop-scroll');
}