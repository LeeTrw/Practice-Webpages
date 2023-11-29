const open = document.getElementById('open');
const close = document.getElementById('close');
const menu = document.getElementById('menu');
const header = document.querySelector('.header-left');
const page = document.querySelector('.grid-con');


function showHide() {
    open.classList.toggle('hide');
    close.classList.toggle('show');
    menu.classList.toggle('show');
    header.classList.toggle('hide');
    page.classList.toggle('hide');
}