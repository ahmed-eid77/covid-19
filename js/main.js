// plugins
var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 250
})
new WOW().init();

jQuery("#responsive_headline").fitText(1.5, { minFontSize: '20px', maxFontSize: '40px' });



// selectors 
const closeBtn = document.querySelector('.close-icon');
const smNavbar = document.querySelector('.sm-navbar');
const smNavbarListItem = document.querySelector('.sm-nav-list');
const toggleBtn = document.querySelector('.navbar-toggler');
const pageUp = document.querySelector('.page-up');

// Even Listener 
closeBtn.addEventListener('click', closeNav);
toggleBtn.addEventListener('click', openNav);
smNavbarListItem.children[0].addEventListener('click', closeNav);
smNavbarListItem.children[1].addEventListener('click', closeNav);
smNavbarListItem.children[2].addEventListener('click', closeNav);
smNavbarListItem.children[3].addEventListener('click', closeNav);
smNavbarListItem.children[4].addEventListener('click', closeNav);
smNavbarListItem.children[5].addEventListener('click', closeNav);

window.onscroll = function() {scrollFunction()};



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

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      pageUp.classList.remove('none')
    } else {
      pageUp.classList.add('none')
    }
}

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }