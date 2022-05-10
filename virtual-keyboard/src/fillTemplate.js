import { keysArray } from './keys';
// !! **************************** CLASS KeyButton
class KeyButton {
  constructor(id, lwrSymb, width, uprSymb) {
    this.elem = document.createElement('div');
    this.elem.id = id;
    this.elem.style.width = `${width}px`;
    const upLetter = document.createElement('h6');
    upLetter.classList.add('up__sign');
    upLetter.textContent = uprSymb;
    this.elem.append(upLetter);

    const dwLetter = document.createElement('h5');
    dwLetter.classList.add('down__sign');
    dwLetter.textContent = lwrSymb;
    this.elem.append(dwLetter);

    this.elem.classList.add('key');
  }

  appendTo(parent) {
    parent.appendChild(this.elem);
  }
}

export default function createHtmlDoc() {
  const wrapper = document.createElement('div');
  wrapper.classList.add('wrapper');
  document.body.appendChild(wrapper);

  const textWrapper = document.createElement('div');
  textWrapper.classList.add('text_area__wrapper');
  wrapper.appendChild(textWrapper);

  const inputArea = document.createElement('textarea');
  inputArea.classList.add('text_area');
  inputArea.id = 'example';
  inputArea.cols = '50';
  inputArea.rows = '4';
  inputArea.autofocus = true;
  textWrapper.appendChild(inputArea);

  textWrapper.appendChild(document.createElement('button'));
  textWrapper.children[1].classList.add('clear_button');
  textWrapper.children[1].classList.add('control');
  textWrapper.children[1].textContent = 'X';
  textWrapper.children[1].title = 'clear';

  const muteButton = document.createElement('button');
  muteButton.classList.add('mute_button');
  muteButton.classList.add('control');
  textWrapper.append(muteButton);

  const helpWrapper = document.createElement('div');
  helpWrapper.classList.add('help_wrapper');
  textWrapper.appendChild(helpWrapper);
  helpWrapper.appendChild(document.createElement('h3'));
  helpWrapper.appendChild(document.createElement('h5'));
  helpWrapper.appendChild(document.createElement('h5'));
  helpWrapper.appendChild(document.createElement('h2'));
  helpWrapper.children[0].textContent = 'Windows keyboard';
  helpWrapper.children[1].textContent = 'Change language';
  helpWrapper.children[2].textContent = 'Win + Space';
  helpWrapper.children[3].classList.add('language_indicator');

  const linkToSource = document.createElement('a');
  linkToSource.href = 'https://github.com/Alitalia60/Alitalia60.github.io/tree/gh-pages/virtual-keyboard/src';
  linkToSource.text = 'Source code';
  linkToSource.classList.add('link_to_source');
  helpWrapper.appendChild(linkToSource);

  const keyBoardLayer = document.createElement('div');
  wrapper.append(keyBoardLayer);
  keyBoardLayer.classList.add('keys__container');

  Object.keys(keysArray).forEach((key) => {
    const row = document.createElement('div');
    row.id = key;
    row.classList.add('row');
    keyBoardLayer.appendChild(row);
  });

  Object.keys(keysArray).forEach((key) => {
    const row = document.getElementById(key);
    for (let index = 0; index < keysArray[key].length; index++) {
      // console.log();
      const element = keysArray[key][index];
      new KeyButton(
        element[0],
        element[1],
        element[2],
        element[3],
      ).appendTo(row);
    }
  });
}
