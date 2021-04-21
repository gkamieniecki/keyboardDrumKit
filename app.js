// ======================
// ===Key-press events===
// ======================


const playSound = (e) => {
    
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    audio.play();
    
    const key = document.querySelector(`.sound[data-key="${e.keyCode}"]`);
    key.classList.add("clickChange");

    const removeChange = (e) => {
        
        const key = document.querySelector(`.sound[data-key="${e.keyCode}"]`);
        key.classList.remove("clickChange");
    }
    
    document.addEventListener("keyup", removeChange);

}

document.addEventListener("keydown", playSound);


// ==================
// ===Click events===
// ==================


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
