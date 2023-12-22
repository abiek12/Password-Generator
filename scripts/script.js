let slider = document.getElementById("slider");
let sliderVal = document.getElementById("slider-value");
let generateBtn = document.getElementById("generate-btn");
let outputScreen = document.querySelectorAll(".output-screen");
let display1 = document.getElementById("display1");
let display2 = document.getElementById("display2");
let display3 = document.getElementById("display3");
let display4 = document.getElementById("display4");

// Password length slider
slider.addEventListener("input", function () {
  sliderVal.textContent = slider.value;
});

// Password Generator
generateBtn.addEventListener("click", function () {
  let allCharacters =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@*";
  outputScreen.forEach(function (outputScreen) {
    let pwd = "";
    for (let i = 0; i < slider.value; i++) {
      let ch = allCharacters[Math.floor(Math.random() * allCharacters.length)];
      pwd += ch;
    }
    outputScreen.textContent = pwd;
  });
});

//copy to clipboard
function copyPassword(display) {
  let password = display.textContent || display.innerText;
  if (display.textContent === "...") {
    console.error("Nothing to copy");
  } else {
    navigator.clipboard
      .writeText(password)
      .then(() => {
        alert("Password copied to clipboard!");
      })
      .catch((err) => {
        console.error("'Error in copying text:", err);
      });
  }
}

display1.addEventListener("click", () => {
  copyPassword(display1);
});
display2.addEventListener("click", () => {
  copyPassword(display2);
});
display3.addEventListener("click", () => {
  copyPassword(display3);
});
display4.addEventListener("click", () => {
  copyPassword(display4);
});
