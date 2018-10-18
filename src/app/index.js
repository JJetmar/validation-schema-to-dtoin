import 'bootstrap/dist/css/bootstrap.min.css';
import '../../src/public/style.css';
import { random } from "../validation-schema-to-dtoin/core/random";
import generateDtoIn from "../validation-schema-to-dtoin/validation-schema-to-dtoin";
import Debouncer from "./debouncer";

let inputElement = document.getElementById("input");
let outputElement = document.getElementById("output");
let randomSeedElement = document.getElementById("randomSeed");

let pageInvited = new Date().toISOString();
let loadingInterval;

let loadingDots = ".";
let loading = () => {
    outputElement.innerText = "Generating" + loadingDots;
    loadingDots = (loadingDots + ".").substr(0, (loadingDots.length + 1) % 4);
};

let debouncer = new Debouncer(() => {
    let schema = inputElement.value;

    let errorAlertElement = document.getElementById("error");
    let validAlertElement = document.getElementById("valid");
    try {
        random.setSeed(randomSeedElement.value || pageInvited);

        localStorage.setItem("LAST_VALIDATION_SCHEMA", schema);
        outputElement.innerHTML = generateDtoIn(schema);

        outputElement.classList.remove("d-none");

        inputElement.classList.remove("border-danger");
        inputElement.classList.add("border-success");

        validAlertElement.classList.remove("d-none");
        errorAlertElement.classList.add("d-none");
    } catch (error) {
        errorAlertElement.innerText = error;

        outputElement.classList.add("d-none");

        inputElement.classList.remove("border-success");
        inputElement.classList.add("border-danger");

        validAlertElement.classList.add("d-none");
        errorAlertElement.classList.remove("d-none");
        throw error;
    }
}, 300, () => {
    loading();

    if (loadingInterval != null)
        clearInterval(loadingInterval);
    loadingInterval = setInterval(loading, 200);
},
() => {
    clearInterval(loadingInterval);
});

let generate = () => {
    debouncer.run();
};

// TAB key
inputElement.addEventListener('keydown', (e) => {
    if(e.keyCode === 9 || e.which === 9) {
        const INSERT = "  ";
        e.preventDefault();
        let s = e.target.selectionStart;
        e.target.value = e.target.value.substring(0, e.target.selectionStart) + INSERT + e.target.value.substring(e.target.selectionEnd);
        e.target.selectionEnd = s + INSERT.length;
    }
});

randomSeedElement.addEventListener('input', () => {
    generate();
});

// Auto height for textarea
let autoHeightTextArea = (textarea) => {
    let numberOfLines = textarea.value.split(/\r*\n/).length;
    textarea.setAttribute("rows", numberOfLines.toString());
};

inputElement.addEventListener('input', (e) => {
    autoHeightTextArea(e.target);
    generate();
});


let inputEvent = new Event('input', {
    'bubbles': true,
    'cancelable': true
});
const LAST_VALIDATION_SCHEMA = localStorage.getItem("LAST_VALIDATION_SCHEMA");
if (LAST_VALIDATION_SCHEMA != null) {
    inputElement.value = LAST_VALIDATION_SCHEMA;//.replace(/\n\r?/g, '<br/>');
}
inputElement.dispatchEvent(inputEvent);