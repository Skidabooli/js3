let input = document.querySelector(".input");
let h2 = document.querySelector(".text");
let timeOut;

let replaceText = () => {
    h2.textContent = input.value
}

let outputText = () => {
    timeOut = clearTimeout(timeOut);
    timeOut = setTimeout(replaceText, 300)
}

input.addEventListener("input", outputText)