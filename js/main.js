// plugins
var scroll = new SmoothScroll('a[href*="#"]');
new WOW().init();

jQuery("#responsive_headline").fitText(1.1, { minFontSize: '20px', maxFontSize: '40px' });








// selectors 
const closeBtn = document.querySelector('.close-icon');
const smNavbar = document.querySelector('.sm-navbar');
const smNavbarListItem = document.querySelector('.sm-nav-list');
const toggleBtn = document.querySelector('.navbar-toggler');



// Even Listener 
closeBtn.addEventListener('click', closeNav);
toggleBtn.addEventListener('click', openNav);
smNavbarListItem.children[0].addEventListener('click', closeNav);
smNavbarListItem.children[1].addEventListener('click', closeNav);
smNavbarListItem.children[2].addEventListener('click', closeNav);
smNavbarListItem.children[3].addEventListener('click', closeNav);
smNavbarListItem.children[4].addEventListener('click', closeNav);
smNavbarListItem.children[5].addEventListener('click', closeNav);


//Functions 

// 1- Close Navbar Fumction
function closeNav(e){
    smNavbar.classList.toggle('none');
    toggleBtn.classList.toggle('none');
}

function openNav(e){
    smNavbar.classList.remove('none');
    toggleBtn.classList.toggle('none');
}


