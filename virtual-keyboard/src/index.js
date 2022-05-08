import { createHtmlDoc } from "./fillTemplate.js";
import {
    keysArray,
    keysArrayEN,
    fixedKeys,
    keysArrayRU,
    specialKeysActions,
} from "./keys.js";

const settings = {
    lang: "en",
    sound: "off",
};

const lightOn = true;
const lightOff = false;

createHtmlDoc();

if (window.localStorage.getItem("lang") != undefined) {
    settings.lang = window.localStorage.getItem("lang");
} else {
    settings.lang = "en";
}

if (window.localStorage.getItem("mute") != undefined) {
    settings.sound = window.localStorage.getItem("sound");
} else {
    settings.sound = "off";
}

const audio = new Audio("./assets/sounds/click.wav");

const mute_button = document.querySelector(".mute_button");

mute_button.addEventListener("click", () => {
    settings.sound = settings.sound === "on" ? "off" : "on";
    setSound();
    window.localStorage.setItem("sound", settings.sound);
});

const keysAll = document.querySelectorAll(".key");
for (const element of keysAll) {
    element.addEventListener("mousedown", onPressDown);
    element.addEventListener("mouseup", onPressUp);
}

const textArea = document.querySelector(".text_area");

document.querySelector(".clear_button").addEventListener("click", () => {
    textArea.value = "";
});
switchLanguage(settings.lang);
setSound();

document.addEventListener("keydown", onPressDown);

document.addEventListener("keyup", onPressUp);

// !! **************************** setSound
function setSound() {
    if (settings.sound == "off") {
        mute_button.classList.add("mute");
    } else {
        mute_button.classList.remove("mute");
    }
}

// !! ****************************  illuminateKey
// function illuminateKey(pressedVirtKey, on = false) {
function illuminateKey(pressedVirtKey, on = false) {
    if (on) {
        pressedVirtKey.classList.add("key_pressed");
    } else {
        return new Promise((resolve) => {
            setTimeout(() => {
                pressedVirtKey.classList.remove("key_pressed");
            }, 200);
            resolve();
        });
    }
}

// !! ****************************  onPressDown
// function onPressDown(virtKey, id) {
function onPressDown(ev) {
    const virtKey = ev.type == 'keydown' ? document.getElementById(ev.code) : ev.currentTarget;
    const id = virtKey.id;
    textArea.focus()
        // ev.preventDefault()
    if (fixedKeys.hasOwnProperty(id) && ev.type != 'keydown') {
        fixedKeys[id] = !fixedKeys[id];
        // document.getElementById(id).classList.toggle("key_pressed");
        virtKey.classList.toggle("key_pressed");
    } else {
        illuminateKey(virtKey, lightOn);
        if (!specialKeysActions.includes(id) &&
            !(
                fixedKeys.Meta ||
                fixedKeys.AltLeft ||
                fixedKeys.AltRight ||
                fixedKeys.ControlLeft ||
                fixedKeys.ControlRight
            )
        ) {
            if (ev.type != 'keydown') {
                textArea.value += getLetter(id);
            }
        }
    }
    playClick();
}

// !! ****************************  onPressUp
// function onPressUp(virtKey, id) {
function onPressUp(ev) {
    const virtKey = ev.type == 'keyup' ? document.getElementById(ev.code) : ev.currentTarget;
    const id = virtKey.id;

    if (!fixedKeys.hasOwnProperty(id)) {
        illuminateKey(virtKey, lightOff).then(handleKeys(virtKey));
    }
}
// !! ****************************  handleKeys
function handleKeys(pressedVirtKey) {
    let id = pressedVirtKey.id;
    if (fixedKeys.Meta && pressedVirtKey.id == "Space") {
        switchLanguage();
        resetKeys();
        return;
    }
    if (specialKeysActions.includes(id)) {
        // console.log(id);
        textArea.focus();
        switch (id) {
            case "Delete":
                break;
            case "Backspace":
                textArea.selectionStart = textArea.selectionEnd = textArea.textContent.length;
                document.getSelection().deleteFromDocument()
                break;
            case "Enter":
                break;
            case "Tab":
                break;
            case "ArrowUp":
                break;
            case "ArrowLeft":
                break;
            case "ArrowDown":
                break;
            case "ArrowRight":
                break;

            default:
                break;
        }
    }
    resetKeys();
}

// !! ****************************  resetKeys
function resetKeys() {
    for (const key in fixedKeys) {
        if (key != "CapsLock") {
            fixedKeys[key] = false;
            document.getElementById(key).classList.remove("key_pressed");
        }
    }
}

// !! ****************************  switchLanguage
function switchLanguage(lang) {
    if (lang) {} else {
        settings.lang = settings.lang == "ru" ? "en" : "ru";
    }
    window.localStorage.setItem("lang", settings.lang);
    let arr = settings.lang == "en" ? keysArrayEN : keysArrayRU;

    document.querySelector(".language_indicator").textContent =
        settings.lang.toUpperCase();

    for (let key in arr) {
        arr[key].forEach((arrEl) => {
            document.getElementById(arrEl[0]).children[1].textContent = arrEl[1];
            keysArray[key].forEach((arrKeysArr) => {
                if (arrKeysArr.includes(arrEl[0])) {
                    arrKeysArr[1] = arrEl[1];
                }
            });
            //   keysArray[key][1] = element[1];
        });
    }
}

// !! ****************************  getLetter
function getLetter(id) {
    console.log('getLetter id=', id);
    let shift = fixedKeys.ShiftLeft || fixedKeys.ShiftRight;
    let alt = fixedKeys.AltLeft || fixedKeys.AltRight;

    for (let row in keysArray) {
        for (let j = 0; j < keysArray[row].length; j++) {
            let rowKeysArr = keysArray[row][j];
            if (rowKeysArr.includes(id)) {
                if (fixedKeys.CapsLock) {
                    return shift ?
                        rowKeysArr[1].toLowerCase() :
                        rowKeysArr[1].toUpperCase();
                } else {
                    if (row === "rowE") {
                        return shift ? rowKeysArr[3] : rowKeysArr[1].toUpperCase();
                    } else {
                        return shift ?
                            rowKeysArr[1].toUpperCase() :
                            rowKeysArr[1].toLowerCase();
                    }
                }
            }
        }
    }
}

// !! ****************************  playClick
function playClick() {
    if (settings.sound == "on") {
        audio.play();
    }
}