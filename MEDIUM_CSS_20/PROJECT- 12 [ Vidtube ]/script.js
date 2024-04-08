const sideBar = document.querySelector(".sideBar");
const menu = document.querySelector(".menu");

menu.onclick = () => {
    sideBar.classList.toggle("active");
}