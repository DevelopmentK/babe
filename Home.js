"use strict";

const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const catImg = document.querySelector(".cat-img");

const MAX_IMAGES = 7;
const MAX_CLICKS = 6;

let play = true;
let noCount = 0;

yesButton.addEventListener("click", handleYesClick);

noButton.addEventListener("click", function () {
    if (play) {
        noCount++;
        const imageIndex = Math.min(noCount, MAX_IMAGES);
        changeImage(imageIndex);
        resizeYesButton();
        updateNoButtonText();
        if (noCount === MAX_IMAGES) {
            play = false;
        }
    }
    if (noCount === MAX_CLICKS) {
        play = false;
        disableButton();
        changeButtonColor();
    }
});

function handleYesClick() {
    titleElement.innerHTML = "See you on Saturday! <3";
    buttonsContainer.classList.add("hidden");
    changeImage("yes");
}

function resizeYesButton() {
    const computedStyle = window.getComputedStyle(yesButton);
    const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
    const newFontSize = fontSize * 1.6;

    yesButton.style.fontSize = `${newFontSize}px`;
}

function generateMessage(noCount) {
    const messages = [
        "No",
        "Are you sure?",
        "Seriously???",
        "Don't do this to me babe! :(",
        "You're breaking my heart babe! :(",
        "I'm gonna cry...",
        //"Okay FATIMA JEN, I'm gonna disble the button!",
        "Okay, I'm gonna disble the button!",
    ];

    const messageIndex = Math.min(noCount, messages.length - 1);
    return messages[messageIndex];
}

function changeImage(image) {
    catImg.src = `../Image/cat-${image}.jpg`;
}

function updateNoButtonText() {
    noButton.innerHTML = generateMessage(noCount);
}
function disableButton() {
    noButton.disabled = true;
}
function changeButtonColor() {
    noButton.style.backgroundColor = "darkgray";
    //noButton.style.color = "white";
}

