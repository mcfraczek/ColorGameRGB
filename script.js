var rgbs = generateRandomColors(6);
var squares = document.getElementsByClassName("square");
var pickedColor = pickColor(rgbs.length);
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.getElementById("message");
var buttonReset = document.querySelector("#reset");
var h1 = document.querySelector("h1");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var booleanEasy;
hardBtn.classList.add("selected");

easyBtn.addEventListener("click", function () {
  this.classList.add("selected");
  hardBtn.classList.remove("selected");
  rgbs = generateRandomColors(3);
  pickedColor = pickColor(3);
  colorDisplay.textContent = pickedColor;
  for (let i = 3; i < squares.length; i++) {
    squares[i - 3].style.backgroundColor = rgbs[i - 3];
    squares[i].style.display = "none";
  }
  booleanEasy = true;
  h1.style.backgroundColor = "#steelblue";
});
hardBtn.addEventListener("click", function () {
  this.classList.add("selected");
  easyBtn.classList.remove("selected");
  rgbs = generateRandomColors(6);
  pickedColor = pickColor(6);
  colorDisplay.textContent = pickedColor;
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = rgbs[i];
  }
  if (booleanEasy) {
    for (let i = 3; i < squares.length; i++) {
      squares[i].style.display = "initial";
    }
  }
  h1.style.backgroundColor = "#steelblue";
  booleanEasy = false;
});

colorDisplay.textContent = pickedColor;

for (let i = 0; i < squares.length; i++) {
  squares[i].style.backgroundColor = rgbs[i];
  squares[i].addEventListener("click", function () {
    var clickedColor = rgbs[i];
    if (clickedColor === pickedColor) {
      h1.style.backgroundColor = pickedColor;
      messageDisplay.textContent = "You Win!";
      changeColor(pickedColor);
      buttonReset.textContent = "Play?";
    } else {
      messageDisplay.textContent = "Try Again";
      this.style.backgroundColor = "#232323";
    }
  })
}
buttonReset.addEventListener("click", function () {
  messageDisplay.textContent = "";
  h1.style.backgroundColor = "steelblue";
  if (!booleanEasy) {
    rgbs = generateRandomColors(6);
    pickedColor = pickColor(rgbs.length);
    colorDisplay.textContent = pickedColor;
    buttonReset.textContent = "New Colors";
    for (let i = 0; i < squares.length; i++) {
      squares[i].style.backgroundColor = rgbs[i];
    }
  } else {
    rgbs = generateRandomColors(3);
    pickedColor = pickColor(3);
    colorDisplay.textContent = pickedColor;
    buttonReset.textContent = "New Colors";
    for (let i = 0; i < squares.length; i++) {
      squares[i].style.backgroundColor = rgbs[i];
    }
  }
});

function changeColor(color) {
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}

function pickColor(lenght) {
  var random = Math.floor(Math.random() * lenght);
  return rgbs[random];
}

function generateRandomColors(lenght) {
  var colors = [];
  for (let i = 0; i < lenght; i++) {
    colors.push(randomColor());
  }
  return colors;
}

function randomColor() {
  /*0-255*/
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);
  return "rgb(" + red + ", " + green + ", " + blue + ")";
}

