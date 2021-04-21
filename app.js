document.addEventListener("keydown", (e) => {
    if (e.keyCode === 65) {
        document.getElementById("boom").play();
    }
    else if (e.keyCode === 83) {
        document.getElementById("clap").play();
    }
    else if (e.keyCode === 68) {
        document.getElementById("hihat").play();
    }
    else if (e.keyCode === 70) {
        document.getElementById("kick").play();
    }
    else if (e.keyCode === 71) {
        document.getElementById("openhat").play();
    }
    else if (e.keyCode === 72) {
        document.getElementById("ride").play();
    }
    else if (e.keyCode === 74) {
        document.getElementById("snare").play();
    }
    else if (e.keyCode === 75) {
        document.getElementById("tink").play();
    }
    else if (e.keyCode === 76) {
        document.getElementById("tom").play();
    }
});




// ====================
// === Click Events ===
// ====================

function playSoundA() {
    document.getElementById("boom").play();
};

document.getElementsByClassName("a")[0].addEventListener("click", playSoundA);

// -------


function playSoundS() {
    document.getElementById("clap").play();
};

document.getElementsByClassName("s")[0].addEventListener("click", playSoundS);

// ------


function playSoundD() {
    document.getElementById("hihat").play();
};

document.getElementsByClassName("d")[0].addEventListener("click", playSoundD);

// -------


function playSoundF() {
    document.getElementById("kick").play();
};

document.getElementsByClassName("f")[0].addEventListener("click", playSoundF);

// -------


function playSoundG() {
    document.getElementById("openhat").play();
};

document.getElementsByClassName("g")[0].addEventListener("click", playSoundG);

// -------


function playSoundH() {
    document.getElementById("ride").play();
};

document.getElementsByClassName("h")[0].addEventListener("click", playSoundH);

// ------


function playSoundJ() {
    document.getElementById("snare").play();
};

document.getElementsByClassName("j")[0].addEventListener("click", playSoundJ);

// -------


function playSoundK() {
    document.getElementById("tink").play();
};

document.getElementsByClassName("k")[0].addEventListener("click", playSoundK);

// ------


function playSoundL() {
    document.getElementById("tom").play();
};

document.getElementsByClassName("l")[0].addEventListener("click", playSoundL);