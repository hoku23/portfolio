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
