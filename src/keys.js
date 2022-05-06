export const settings = {
    lang: 'en',
    muteKeyboard: true,
};

export const keysArray = {
    rowE: [
        ["Backquote", "~", 60, "`"],
        ["Digit1", "1", 60, "!"],
        ["Digit2", "2", 60, "@"],
        ["Digit3", "3", 60, "#"],
        ["Digit4", "4", 60, "$"],
        ["Digit5", "5", 60, "%"],
        ["Digit6", "6", 60, "^"],
        ["Digit7", "7", 60, "&"],
        ["Digit8", "8", 60, "*"],
        ["Digit9", "9", 60, "("],
        ["Digit0", "0", 60, ")"],
        ["Minus", "-", 60, "_"],
        ["Equal", "=", 60, "+"],
        ["Backspace", "Backspace", 130]
    ],
    rowD: [
        ["Tab", "Tab", 90],
        ["KeyQ", "Q", 60],
        ["KeyW", "W", 60],
        ["KeyE", "E", 60],
        ["KeyR", "R", 60],
        ["KeyT", "T", 60],
        ["KeyY", "Y", 60],
        ["KeyU", "U", 60],
        ["KeyI", "I", 60],
        ["KeyO", "O", 60],
        ["KeyP", "P", 60],
        ["BracketLeft", "{", 60],
        ["BracketRight", "}", 60],
        ["Backslash", "\\", 60],
        ["Delete", "Del", 60]
    ],
    rowC: [
        ["CapsLock", "Caps Lock", 160],
        ["KeyA", "A", 60],
        ["KeyS", "S", 60],
        ["KeyD", "D", 60],
        ["KeyF", "F", 60],
        ["KeyG", "G", 60],
        ["KeyH", "H", 60],
        ["KeyJ", "J", 60],
        ["KeyK", "K", 60],
        ["KeyL;", "L", 60],
        ["Semicolon", ":", 60],
        ["Quote", '"', 60],
        ["Enter", "ENTER", 130]
    ],
    rowB: [
        ["ShiftLeft", "Shift", 130],
        ["Backslash", "\\", 60],
        ["KeyZ", "Z", 60],
        ["KeyX", "X", 60],
        ["KeyC", "C", 60],
        ["KeyV", "V", 60],
        ["KeyB", "B", 60],
        ["KeyN", "N", 60],
        ["KeyM", "M", 60],
        ["Period", ".", 60],
        ["NumpadDecimal", ",", 60],
        ["Slash", "/", 60],
        ["ArrowUp", "⯅", 60],
        ["ShiftRight", "Shift", 60]
    ],
    rowA: [
        ["ControlLeft", "Ctrl", 90],
        ["Meta", "Win", 60],
        ["AltLeft", "Alt", 60],
        ["Space", " ", 470],
        ["AltRight", "Alt", 60],
        ["ControlRight", "Ctrl", 90],
        ["ArrowLeft", "⯇", 60],
        ["ArrowDown", "⯆", 60],
        ["ArrowRight", "⯈", 60]
    ],
};

export const specialKeysActions = [
    "Backspace",
    "Delete",
    "Enter",
    "ArrowLeft",
    "ArrowDown",
    "ArrowRight",
    "ArrowUp",
    "ControlLeft",
    "ControlRight",
    "AltLeft",
    "AltRight",
    "Meta",
    "CapsLock"
];

export const fixedKeys = {
    "ShiftLeft": false,
    "ShiftRight": false,
    "ControlLeft": false,
    "ControlRight": false,
    "AltLeft": false,
    "AltRight": false,
    "Meta": false,
    "CapsLock": false
};


export const keysArrayEN = {
    rowD: [
        ["KeyQ", "Q"],
        ["KeyW", "W"],
        ["KeyE", "E"],
        ["KeyR", "R"],
        ["KeyT", "T"],
        ["KeyY", "Y"],
        ["KeyU", "U"],
        ["KeyI", "I"],
        ["KeyO", "O"],
        ["KeyP", "P"],
        ["BracketLeft", "{"],
        ["BracketRight", "}"],
        ["Backslash", "\\"]
    ],
    rowC: [
        ["KeyA", "A"],
        ["KeyS", "S"],
        ["KeyD", "D"],
        ["KeyF", "F"],
        ["KeyG", "G"],
        ["KeyH", "H"],
        ["KeyJ", "J"],
        ["KeyK", "K"],
        ["KeyL;", "L"],
        ["Semicolon", ":"],
        ["Quote", '"']
    ],
    rowB: [
        ["KeyZ", "Z"],
        ["KeyX", "X"],
        ["KeyC", "C"],
        ["KeyV", "V"],
        ["KeyB", "B"],
        ["KeyN", "N"],
        ["KeyM", "M"],
        ["Period", "."],
        ["NumpadDecimal", ","],
        ["Slash", "/"]
    ],
};

export const keysArrayRU = {
    rowE: [
        ["Backquote", "~"],
    ],
    rowD: [
        ["KeyQ", "Й"],
        ["KeyW", "Ц"],
        ["KeyE", "У"],
        ["KeyR", "К"],
        ["KeyT", "Е"],
        ["KeyY", "Н"],
        ["KeyU", "Г"],
        ["KeyI", "Ш"],
        ["KeyO", "Щ"],
        ["KeyP", "З"],
        ["BracketLeft", "Х"],
        ["BracketRight", "Ъ"],
        ["Backslash", "/"]
    ],
    rowC: [
        ["KeyA", "Ф"],
        ["KeyS", "Ы"],
        ["KeyD", "В"],
        ["KeyF", "А"],
        ["KeyG", "П"],
        ["KeyH", "Р"],
        ["KeyJ", "О"],
        ["KeyK", "Л"],
        ["KeyL;", "Д"],
        ["Semicolon", "Ж"],
        ["Quote", 'Э']
    ],
    rowB: [
        ["KeyZ", "Я"],
        ["KeyX", "Ч"],
        ["KeyC", "С"],
        ["KeyV", "М"],
        ["KeyB", "И"],
        ["KeyN", "Т"],
        ["KeyM", "Ь"],
        ["Period", "Б"],
        ["NumpadDecimal", "Ю"],
        ["Slash", "."]
    ],
};
