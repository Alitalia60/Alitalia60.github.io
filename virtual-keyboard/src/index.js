/* eslint-disable prefer-destructuring */
/* eslint-disable consistent-return */
/* eslint-disable no-restricted-syntax */
import createHtmlDoc from './fillTemplate';
import {
  keysArray,
  keysArrayEN,
  fixedKeys,
  keysArrayRU,
  specialKeysActions,
} from './keys';

import './css/style.css';
import soundfile from './assets/sounds/click.wav';

const settings = {
  lang: 'en',
  sound: 'off',
};

const lightOn = true;
const lightOff = false;

createHtmlDoc();

if (window.localStorage.getItem('lang') !== undefined) {
  settings.lang = window.localStorage.getItem('lang');
} else {
  settings.lang = 'en';
}

if (window.localStorage.getItem('mute') !== undefined) {
  settings.sound = window.localStorage.getItem('sound');
} else {
  settings.sound = 'off';
}

const audio = new Audio(soundfile);

const muteButton = document.querySelector('.mute_button');

muteButton.addEventListener('click', toggleMute);

function toggleMute() {
  settings.sound = settings.sound === 'on' ? 'off' : 'on';
  setSound();
  window.localStorage.setItem('sound', settings.sound);
}

const langIndicator = document.querySelector('.language_indicator');
langIndicator.addEventListener('click', toggleLanguage);

const keysAll = document.querySelectorAll('.key');
for (const element of keysAll) {
  element.addEventListener('mousedown', onPressDown);
  element.addEventListener('mouseup', onPressUp);
}

const textArea = document.querySelector('.text_area');

document.querySelector('.clear_button').addEventListener('click', () => {
  textArea.value = '';
});
switchLanguage(settings.lang);
setSound();

document.addEventListener('keydown', onPressDown);

document.addEventListener('keyup', onPressUp);

// !! **************************** setSound
function setSound() {
  if (settings.sound === 'off') {
    muteButton.classList.add('mute');
  } else {
    muteButton.classList.remove('mute');
  }
}

// !! ****************************  illuminateKey
function illuminateKey(pressedVirtKey, on = false) {
  if (on) {
    pressedVirtKey.classList.add('key_pressed');
  } else {
    return new Promise((resolve) => {
      setTimeout(() => {
        pressedVirtKey.classList.remove('key_pressed');
      }, 200);
      resolve();
    });
  }
  return null;
}

// !! ****************************  onPressDown
function onPressDown(ev) {
  let virtKey = null;
  let id = '';
  if (document.activeElement !== textArea) {
    textArea.focus();
  }
  if (ev.type !== 'keydown') {
    virtKey = ev.currentTarget;
    id = virtKey.id;
  } else {
    virtKey = document.getElementById(ev.code);

    virtKey.classList.add('key_pressed');
    if (ev.code !== 'Tab') {
      return;
    }
    id = 'Tab';
  }

  if (fixedKeys.hasOwnProperty(id)) {
    fixedKeys[id] = !fixedKeys[id];
    virtKey.classList.toggle('key_pressed');
  } else {
    illuminateKey(virtKey, lightOn);
    if (
      !specialKeysActions.includes(id)
      && !(
        fixedKeys.Meta
        || fixedKeys.AltLeft
        || fixedKeys.AltRight
        || fixedKeys.ControlLeft
        || fixedKeys.ControlRight
      )
    ) {
      textArea.setRangeText(
        getLetter(id),
        textArea.selectionEnd,
        textArea.selectionEnd,
        'end',
      );
      textArea.selectionStart = textArea.selectionEnd;
      textArea.focus();
    }
  }
  playClick();
}

// !! ****************************  onPressUp
function onPressUp(ev) {
  if (ev.type === 'keyup') {
    const virtKey = document.getElementById(ev.code);
    virtKey.classList.remove('key_pressed');
  } else {
    const virtKey = ev.currentTarget;
    const { id } = virtKey;
    if (!fixedKeys.hasOwnProperty(id)) {
      illuminateKey(virtKey, lightOff).then(handleKeys(virtKey));
    }
  }
}

// !! ****************************  handleKeys
function handleKeys(pressedVirtKey) {
  const { id } = pressedVirtKey;
  if (fixedKeys.Meta && pressedVirtKey.id === 'Space') {
    switchLanguage();
    resetKeys();
    return;
  }
  if (specialKeysActions.includes(id)) {
    textArea.focus();
    const lastPosition = textArea.value.length;
    const pos = textArea.selectionStart;

    switch (id) {
      case 'Delete':
        textArea.selectionEnd = pos === lastPosition ? pos : pos + 1;
        textArea.setRangeText('');
        break;
      case 'Backspace':
        textArea.selectionStart = pos === 0 ? 0 : pos - 1;
        textArea.setRangeText('');
        break;
      case 'Tab':
        break;
      case 'ArrowUp':
        textArea.selectionStart = moveToRow('prev');
        document.getSelection().collapseToStart();
        textArea.setRangeText('');
        break;
      case 'ArrowLeft':
        textArea.selectionStart = pos === 0 ? 0 : pos - 1;
        document.getSelection().collapseToStart();
        break;
      case 'ArrowDown':
        textArea.selectionStart = moveToRow('next');
        document.getSelection().collapseToStart();
        textArea.setRangeText('');

        break;
      case 'ArrowRight':
        textArea.selectionEnd = pos === lastPosition ? pos : pos + 1;
        document.getSelection().collapseToEnd();
        break;
      case 'Enter':
        // textArea.selectionEnd = (pos == lastPosition) ? pos : pos + 1;
        document.getSelection().collapseToEnd();
        break;

      default:
        break;
    }
  }
  resetKeys();
}

// !! ****************************  resetKeys
function moveToRow(direction) {
  textArea.focus();
  const caretPosition = {
    row: 0,
    offset: 0,
  };
  const caret = textArea.selectionStart;
  const rows = textArea.value.split('\n');

  let offset = caret;
  let row = 0;
  while (offset > rows[row].length) {
    offset -= rows[row].length;
    offset--;
    row++;
  }
  if (direction === 'next') {
    caretPosition.row = row + 1 >= rows.length ? row : row + 1;
  } else if (direction === 'prev') {
    caretPosition.row = row - 1 < 0 ? row : row - 1;
  }
  caretPosition.offset = offset > rows[caretPosition.row].length
    ? rows[caretPosition.row].length
    : offset;

  offset = 0;
  for (row = 0; row < caretPosition.row; row++) {
    offset += rows[row].length;
    offset++;
  }
  return offset + caretPosition.offset;
}

// !! ****************************  resetKeys
function resetKeys() {
  Object.keys(fixedKeys).forEach((key) => {
    if (key !== 'CapsLock') {
      fixedKeys[key] = false;
      document.getElementById(key).classList.remove('key_pressed');
    }
  });
}

// !! ****************************  toggleLanguage
function toggleLanguage() {
  settings.lang = settings.lang === 'ru' ? 'en' : 'ru';
  switchLanguage(settings.lang);
}

// !! ****************************  switchLanguage
function switchLanguage(lang = '') {
  if (!lang) {
    settings.lang = settings.lang === 'ru' ? 'en' : 'ru';
  }
  window.localStorage.setItem('lang', settings.lang);
  const arr = settings.lang === 'en' ? keysArrayEN : keysArrayRU;

  document.querySelector('.language_indicator').textContent = settings.lang.toUpperCase();

  Object.keys(arr).forEach((row) => {
    arr[row].forEach((element) => {
      const virtKeyLowSymb = document.getElementById(element[0]).children[1];
      virtKeyLowSymb.textContent = element[1]; // [,]
      keysArray[row].forEach((rowSymb) => {
        if (rowSymb.includes(element[0])) {
          // eslint-disable-next-line no-param-reassign
          rowSymb[1] = element[1];
        }
      });
    });
  });
}

// !! ****************************  getLetter
function getLetter(id) {
  const shift = fixedKeys.ShiftLeft || fixedKeys.ShiftRight;
  // const alt = fixedKeys.AltLeft || fixedKeys.AltRight;
  if (id === 'Tab') return '\t';
  if (id === 'Enter') return '\n';
  let symb = '';
  Object.keys(keysArray).forEach((row) => {
    for (let j = 0; j < keysArray[row].length; j++) {
      const rowKeysArr = keysArray[row][j];
      if (rowKeysArr.includes(id)) {
        if (fixedKeys.CapsLock) {
          symb = shift
            ? rowKeysArr[1].toLowerCase()
            : rowKeysArr[1].toUpperCase();
        } else if (row === 'rowE') {
          symb = shift ? rowKeysArr[3] : rowKeysArr[1].toUpperCase();
        } else {
          symb = shift
            ? rowKeysArr[1].toUpperCase()
            : rowKeysArr[1].toLowerCase();
        }
      }
    }
  });
  return symb;
}

// !! ****************************  playClick
function playClick() {
  if (settings.sound === 'on') {
    audio.play();
  }
}
