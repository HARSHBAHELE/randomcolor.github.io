let box = document.querySelector(".container");

for(let index = 0;index < 30;index++) {
    let colorContainer = document.createElement("div");
    colorContainer.classList.add("color-container");
    box.appendChild(colorContainer);
}

let color = document.querySelectorAll(".color-container");

genrateColor();

function genrateColor() {
    color.forEach((colorContainer)=> {
        let newcolor = randomColor(); 
        colorContainer.style.backgroundColor="#"+ newcolor;
        colorContainer.innerText = "#"+newcolor;
    });
}

function randomColor() {
    let char = "0123456789abcdef";
    let codeLength = 6;
    let colorCode = "";
    for(let index=0;index<codeLength;index++) {
        let randomNum = Math.floor(Math.random()*char.length);
        colorCode += char.substring(randomNum,randomNum+1);
    }
    return colorCode;
}