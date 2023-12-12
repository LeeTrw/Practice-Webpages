function toggleMenu(menuId, arrowNumber) {
    let menu = document.getElementById(menuId);
    let arrowDown = document.getElementById(`arrow-down${arrowNumber}`);
    let arrowUp = document.getElementById(`arrow-up${arrowNumber}`);

    menu.classList.toggle('show');
    arrowDown.classList.toggle('hide');
    arrowUp.classList.toggle('hide');
  }

  function mobileMenu() {
    const open = document.getElementById('open');
    const close = document.getElementById('close');
    const nav = document.querySelector('nav');
    const page = document.querySelector('.container');
    const mblImg = document.querySelector('.mbl-img');

    open.classList.toggle('hide');
    close.classList.toggle('hide');
    nav.classList.toggle('open');
    page.classList.toggle('opacity');
    mblImg.classList.toggle('opacity');
  }