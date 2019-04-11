console.log('DRD');

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuBranding = document.querySelector('.menu-branding');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.nav-item');

console.log(menuBtn);
console.log(menuBranding);
console.log(menuNav);
console.log(navItems);

let showMenu = false;

menuBtn.addEventListener('click', () => toggleMenu());

function toggleMenu() {
    console.log('DRD __ `toggleMenu');
    // if (!showMenu) {
    //     menuBtn.classList.add('close');
    //     menu.classList.add('show');
    //     menuBranding.classList.add('show');
    //     menuNav.classList.add('show');
    //     navItems.forEach(item => item.classList.add('show'));
    //     showMenu = true;
    // } else {
    //     menuBtn.classList.remove('close');
    //     menu.classList.remove('show');
    //     menuBranding.classList.remove('show');
    //     menuNav.classList.remove('show');
    //     navItems.forEach(item => item.classList.remove('show'));
    //     showMenu = false;
    // }

    // experiment
    menuBtn.classList.toggle('close');
    menu.classList.toggle('show');
    menuBranding.classList.toggle('show');
    menuNav.classList.toggle('show');
    navItems.forEach(item => item.classList.toggle('show'));

    !showMenu;
}