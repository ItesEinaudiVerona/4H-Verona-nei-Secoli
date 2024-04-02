// Script audio nella HOME

function play() {
    var audio = document.getElementById("audio");
    if (playing === false) {
        audio.play();
        playing = true;
    } else {
        audio.pause();
        playing = false;
    }
}
var playing = false;