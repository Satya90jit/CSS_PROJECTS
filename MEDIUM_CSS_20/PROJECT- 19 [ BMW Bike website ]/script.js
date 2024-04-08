const redBtn = document.querySelector(".red")
const blueBtn = document.querySelector(".blue")
const blackBtn = document.querySelector(".black")
const container = document.querySelector(".container")

redBtn.onclick = () => {
    container.style.backgroundImage = "url('images/BMW1.png')";
}
blueBtn.onclick = () => {
    container.style.backgroundImage = "url('images/BMW2.png')";
}
blackBtn.onclick = () => {
    container.style.backgroundImage = "url('images/BMW3.png')";
}