const menu = document.getElementById('menu');
const nav = document.getElementById('phone-nav');
menu.addEventListener('click', function(){
    if (menu.classList.contains('open')) {
        menu.classList.remove('open');
        nav.classList.remove('show');
    } else {
        menu.classList.add('open');
        nav.classList.add('show');
    }
})

const nav_list = document.getElementsByClassName('nav-list');
for (let i = 0; i < nav_list.length; i++) {
    nav_list[i].addEventListener('click', function(){
        menu.classList.remove('open');
        nav.classList.remove('show');
    })
}

const nav_li = document.getElementsByClassName('nav-li');
for (let i = 0; i < nav_li.length; i++) {
    nav_li[i].addEventListener('mouseover', function(){
        nav_li[i].classList.add('nav-on');
    })
    nav_li[i].addEventListener('mouseout', function(){
        nav_li[i].classList.remove('nav-on');
    })
}

const upIn = document.getElementsByClassName('upIn');
const downIn = document.getElementsByClassName('downIn');
const slideLeftIn = document.getElementsByClassName('slideLeftIn');
const slideRightIn = document.getElementsByClassName('slideRightIn');

function slide_left() {
    for (let i = 0; i < slideLeftIn.length; i++) {
        let clientRect = slideLeftIn[i].getBoundingClientRect();
        let element_y = clientRect.top;
        if ( element_y < window.innerHeight) {
            slideLeftIn[i].classList.add('is-slide-left');
        } 
    }
}

function slide_right() {
    for (let i = 0; i < slideRightIn.length; i++) {
        let clientRect = slideRightIn[i].getBoundingClientRect();
        let element_y = clientRect.top;
        if ( element_y < window.innerHeight) {
            slideRightIn[i].classList.add('is-slide-right');
        } 
    }
}

function down_slide() {
    for (let i = 0; i < downIn.length; i++) {
        let clientRect = downIn[i].getBoundingClientRect();
        let element_y = clientRect.top;
        if ( element_y < window.innerHeight) {
            downIn[i].classList.add('is-down');
        } 
    }
}

function up_slide() {
    for (let i = 0; i < upIn.length; i++) {
        let clientRect = upIn[i].getBoundingClientRect();
        let element_y = clientRect.top;
        if ( element_y < window.innerHeight) {
            upIn[i].classList.add('is-up');
        } 
    }
}

window.onload = slide_left();
window.onload = down_slide();
window.onload = up_slide();
window.onload = slide_right();
window.addEventListener('scroll', slide_left, false);
window.addEventListener('scroll', slide_right, false);
window.addEventListener('scroll', up_slide, false);
window.addEventListener('scroll', down_slide, false);
