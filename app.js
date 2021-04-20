document.addEventListener("keydown", (i) => {
    if (i.keyCode === 65) {
        document.getElementById("boom").play();
    }
    else if (i.keyCode === 83) {
        document.getElementById("clap").play();
    }
    else if (i.keyCode === 68) {
        document.getElementById("hihat").play();
    }
    else if (i.keyCode === 70) {
        document.getElementById("kick").play();
    }
    else if (i.keyCode === 71) {
        document.getElementById("openhat").play();
    }
    else if (i.keyCode === 72) {
        document.getElementById("ride").play();
    }
    else if (i.keyCode === 74) {
        document.getElementById("snare").play();
    }
    else if (i.keyCode === 75) {
        document.getElementById("tink").play();
    }
    else if (i.keyCode === 76) {
        document.getElementById("tom").play();
    }
});