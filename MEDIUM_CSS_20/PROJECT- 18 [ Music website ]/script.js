var mySongs = document.getElementById("mySongs");
var icon = document.getElementById("icon");

icon.onclick = function() {
    if (mySongs.paused) {
        mySongs.play();
        icon.src = "media/pause.png";
    } else {
        mySongs.pause();
        icon.src = "media/play.png";
    }
}