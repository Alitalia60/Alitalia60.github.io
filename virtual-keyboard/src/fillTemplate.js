import { keysArray } from "./keys.js";
// !! **************************** CLASS KeyButton
class KeyButton {
    constructor(
        id,
        uprSymb = "U",
        lwrSymb = "l",
        width = 60,
        twoSymbols = false
    ) {
        this.id = id;
        this.width = width;
        this.twoSymbols = false;
        this.uprSymb = uprSymb;
        this.lowSymb = lwrSymb;
        twoSymbols = false;
    }

    createButton(id, dwnSymb, width, uprSymb = '') {
        let btnBody = document.createElement("div");
        btnBody.classList.add("key");
        btnBody.id = id;
        btnBody.style.width = width + "px";
        // btnBody.style.flexGrow = width;
        // btnBody.style.height = this.height;
        let upLetter = document.createElement("h6");
        upLetter.classList.add("up__sign");
        upLetter.textContent = uprSymb;
        btnBody.append(upLetter);
        let dwLetter = document.createElement("h5");
        dwLetter.classList.add("down__sign");
        dwLetter.textContent = dwnSymb;
        btnBody.append(dwLetter);
        return btnBody;
    }
}

export function createHtmlDoc() {

    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');
    document.body.appendChild(wrapper);

    const textWrapper = document.createElement('div');
    textWrapper.classList.add('text_area__wrapper');
    wrapper.appendChild(textWrapper);

    const inputArea = document.createElement('textarea');
    inputArea.classList.add('text_area');
    inputArea.id = 'example';
    inputArea.cols = "50";
    inputArea.rows = "2";
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
    // muteButton.classList.add('control');
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
    // helpWrapper.children[3].textContent = settings.lang.toUpperCase();

    const keyBoardLayer = document.createElement("div");
    // document.body.prepend(keyBoardLayer);
    wrapper.append(keyBoardLayer);
    keyBoardLayer.classList.add("keys__container");

    for (let key in keysArray) {
        const row = document.createElement("div");
        row.id = key;
        row.classList.add("row");
        keyBoardLayer.appendChild(row);
    }

    //create virtual buttons
    for (let key in keysArray) {
        const row = document.getElementById(key);
        keysArray[key].forEach((element) => {
            const keyBtn = new KeyButton().createButton(
                element[0],
                element[1],
                element[2],
                element[3],

            );

            row.appendChild(keyBtn);
        });
    }
}