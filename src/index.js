// import { keysArray } from "./keys.js";
import { createHtmlDoc } from "./fillTemplate.js";
import {
  keysArray,
  keysArrayEN,
  fixedKeys,
  keysArrayRU,
  settings,
  specialKeysActions,
} from "./keys.js";
// import './css/style.css';
// const leyboardWidth = 1200;
// const leyboardHight = 400;

// let localStorage = window.localStorage;
settings.lang= window.localStorage.getItem('lang');
settings.muteKeyboard= window.localStorage.getItem('mute');
const audio = new Audio("./assets/sounds/click.wav");
// let muteKeyboard = true;

const lightOn = true;
const lightOff = false;

createHtmlDoc();

const keysAll = document.querySelectorAll(".key");
for (const element of keysAll) {
  // element.addEventListener("click", keyMouseDown);
  element.addEventListener("mousedown", keyMouseDown);
  element.addEventListener("mouseup", keyMouseUp);
}

const textArea = document.querySelector(".text_area");

document.querySelector(".clear_button").addEventListener("click", () => {
  textArea.textContent = "";
});

// !! **************************** keypress listener
document.addEventListener("keydown", (ev) => {
  // console.log('type=' + ev.type);
  // console.log(' key=' + ev.key);
  // console.log(' code=' + ev.code);
  // console.log(e.shiftKey ? ' shiftKey' : '') +
  //     (e.ctrlKey ? ' ctrlKey' : '') +
  //     (e.altKey ? ' altKey' : '') +
  //     (e.metaKey ? ' metaKey' : '') +
  //     (e.repeat ? ' (repeat)' : '');
  keyboardPress(ev);
  playClick();
});

// !! ****************************  keyboardPress
function keyboardPress(ev) {
  // console.log(ev);
  // console.log(ev.currentTarget);
  // console.log(ev.target);

  if (fixedKeys.hasOwnProperty(ev.code)) {
    // console.log(ev.currentTarget);
    document.getElementById(ev.code).classList.toggle("key_pressed");
  }
//   let mouseDownEvent = new Event("mousedown");
//   let mouseUpEvent = new Event("mouseup");
//   document.getElementById(ev.code).dispatchEvent(mouseDownEvent);
//   document.getElementById(ev.code).dispatchEvent(mouseUpEvent);
  playClick();
  printLetter(ev);
//   ev.preventDefault();
}
// !! ****************************  illuminateKey
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

// !! ****************************  keyMouseDown
function keyMouseDown(e) {
  let virtKey = e.currentTarget;
  let id = virtKey.id;
  if (fixedKeys.hasOwnProperty(id)) {
    fixedKeys[id] = !fixedKeys[id];
    document.getElementById(id).classList.toggle("key_pressed");
  } else {
    illuminateKey(virtKey, lightOn);
    if (!specialKeysActions.includes(id) 
        && !(fixedKeys.Meta || fixedKeys.AltLeft || fixedKeys.AltRight|| fixedKeys.ControlLeft|| fixedKeys.ControlRight)){
        printLetter(e);
    }
  }

  playClick();
}

// !! ****************************  keyMouseUp
function keyMouseUp(e) {
  let id = e.currentTarget.id;
  let virtKey = e.currentTarget;
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
    return
  }
  if (specialKeysActions.includes(id)) {
    textArea.focus();
    switch (id) {
      case "Delete":
        textArea.dispatchEvent(new Event(""));
        break;
      case "Enter":
        console.log(textArea);
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
function switchLanguage() {
  settings.lang = settings.lang == "ru" ? "en" : "ru";
  window.localStorage.setItem('lang', settings.lang)
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

// !! ****************************  printLetter
function printLetter(ev) {
  if (ev.type == "mousedown") {
    textArea.textContent += getLetter(ev.currentTarget.id);
  } else if (ev.type == "keypress") {
    textArea.textContent += ev.key;
  }
}

// !! ****************************  getLetter
function getLetter(id) {

  console.log(id);
  let shift = fixedKeys.ShiftLeft || fixedKeys.ShiftRight;
  let alt = fixedKeys.AltLeft || fixedKeys.AltRight;

  for (let row in keysArray) {
    for (let j = 0; j < keysArray[row].length; j++) {
        let rowKeysArr = keysArray[row][j];
      if (rowKeysArr.includes(id)) {
        if (fixedKeys.CapsLock) {
          return shift ? rowKeysArr[1].toLowerCase() : rowKeysArr[1].toUpperCase();
        } else {
            if (row === 'rowE') {
                return shift ? rowKeysArr[3]: rowKeysArr[1].toUpperCase();
            }
            else{
                return shift ? rowKeysArr[1].toUpperCase() : rowKeysArr[1].toLowerCase();
            }
        }
      }
    }
  }
}

// !! ****************************  playClick
function playClick() {
  if (!settings.muteKeyboard) {
    audio.play();
  }
}
