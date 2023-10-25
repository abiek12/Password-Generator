let slider=document.getElementById("slider")
let sliderVal=document.getElementById("slider-value")
let generateBtn=document.getElementById("generate-btn")
let outputScreen=document.querySelectorAll(".output-screen")

slider.addEventListener("input" ,function (){
    sliderVal.textContent=slider.value
})
generateBtn.addEventListener("click",function(){
    let allCharacters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@*';
    outputScreen.forEach(function (outputScreen) {
        let pwd = "";
        for (let i = 0; i < slider.value; i++) {
            let ch = allCharacters[Math.floor(Math.random() * allCharacters.length)];
            pwd += ch;
        }
        outputScreen.textContent = pwd;
    });
})
outputScreen.addEventListener("click", function(){
})