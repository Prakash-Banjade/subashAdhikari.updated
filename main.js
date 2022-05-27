let menu = document.getElementById('menu_toggle');
let menuOpen = false;
const tab = document.getElementById('tab');
menu.addEventListener('click', () => {
    if (!menuOpen) {
        document.querySelector('.menuToggle').classList.add('open');
        tab.style.display = "flex";
        tab.style.transform = "scaleY(1)";
        document.getElementById('navi').style.height = "auto";
        document.getElementById('nameLogo').style.marginBottom = "10px";
        menuOpen = true;
    } else {
        document.querySelector('.menuToggle').classList.remove('open');
        tab.style.display = "none";
        tab.style.transform = "scaleY(0)";
        document.getElementById('navi').style.height = "50px";
        document.getElementById('nameLogo').style.marginBottom = "0px";
        menuOpen = false;

    }
})

let boxes = document.querySelectorAll('.learning');
for (item of boxes) {
    item.addEventListener('mouseover', (e) => {
        e.target.children[1].style.animation = "fadeIn .3s";
        e.target.children[1].style.opacity = "1";

    })
}

for (item of boxes) {
    item.addEventListener('mouseleave', (e) => {
        e.target.children[1].style.animation = "fadeOut .3s";
        window.tar = e;
        setTimeout(() => {
            window.tar.target.children[1].style.opacity = '0'
        }, 280);
    })
}

document.getElementById('logo').children[0].addEventListener('click', () => {
    location.href = 'index.html';
})


window.onscroll = function() {
    GoTop();
}

function GoTop() {
    if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
        document.getElementById('goTop').style.display = 'flex';

    } else {
        document.getElementById('goTop').style.display = 'none';

    }
}
document.getElementById('goTop').addEventListener('click', () => {
    location.href = '#navi';
})


setTimeout(() => {

}, 4000);
setInterval(() => {


})


let btns = document.getElementsByClassName('main-body-btn');
for (x of btns) {
    x.addEventListener('mouseenter', function(e) {
        e.target.classList.add('hover');
    })

    x.addEventListener('mouseleave', function(e) {
        e.target.classList.remove('hover');
    })

}

// when clicked on contact btn at main section

document.getElementById('contactMe-btn').addEventListener('click', function() {
    location.href = 'contact.html';
})