"use strict";

// Defining DOM Elements
const digitOne = document.getElementById("secondTens");
const digitTwo = document.getElementById("secondOnes");
const digitThree = document.getElementById("msHundreds");
const digitFour = document.getElementById("msTens");
const allDigits = document.querySelectorAll(".digits");
const body = document.querySelector("body");

// Create elements
const buttonStart = document.createElement("button");
buttonStart.textContent = "Start Timer";

const buttonReset = document.createElement("button");
buttonReset.textContent = "Reset";

const timerInputForm = document.createElement("form");
const timerInput = document.createElement("input");
// Style elements
body.style.display = "flex";
body.style.flexDirection = "column";
buttonStart.style.width = "5.5rem";
buttonReset.style.width = "5.5rem";
buttonReset.style.margin = "10px";
timerInputForm.textContent = "Timer Limit (<100 sec.): ";
// Insert Button
body.appendChild(buttonStart);
body.appendChild(buttonReset);
body.appendChild(timerInputForm);
timerInputForm.appendChild(timerInput);
// Timer Functionality

const startTimer = function () {
  const counterLimit = Number(timerInput.value) * 1000;
  if (counterLimit > 0 && counterLimit < 100000) {
    allDigits.forEach((cur) => (cur.style.color = "black"));
    buttonStart.disabled = true;
    const counterLimit = Number(timerInput.value) * 1000;
    timerInput.value = "";
    let counter = 0;
    const updateTimer = function () {
      counter = counter + 10;
      const counterString = counter.toString().padStart(5, "0");
      digitOne.textContent = counterString[0];
      digitTwo.textContent = counterString[1];
      digitThree.textContent = counterString[2];
      digitFour.textContent = counterString[3];

      //   Stop the Timer at 10 Seconds
      if (counter >= counterLimit) {
        allDigits.forEach((cur) => (cur.style.color = "red"));
        clearInterval(timer);
        buttonStart.disabled = false;
      }
    };

    const resetTimer = function () {
      clearInterval(timer);
      buttonStart.disabled = false;
      allDigits.forEach((cur) => (cur.style.color = "black"));
      digitOne.textContent = "0";
      digitTwo.textContent = "0";
      digitThree.textContent = "0";
      digitFour.textContent = "0";
    };

    const timer = setInterval(updateTimer, 10);
    buttonReset.addEventListener("click", resetTimer);
  } else {
    timerInput.value = "Error";
    setTimeout(function () {
      timerInput.value = "";
    }, 1000);
    return;
  }
};

// Add Event Listener to Buttons
buttonStart.addEventListener("click", startTimer);
