const menu_toggle = document.querySelector('.menu-toggle');
const container = document.querySelector('.container');

menu_toggle.onclick = function() {
    container.classList.toggle('active')
}