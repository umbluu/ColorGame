var colors = [
  "rgb(235, 59, 90)",
  "rgb(255, 221, 89)",
  "rgb(32, 191, 107)",
  "rgb(75, 207, 250)",
  "rgb(56, 103, 214)",
  "rgb(165, 94, 234)"
]

var squares = document.querySelectorAll(".square");
var pickedColor = colors[3];
var colorDisplay = document.getElementById("colorDisplay");

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
  // add initial colors to squares 
  squares[i].style.background = colors[i];

  // add click listeners to squares
  squares[i].addEventListener("click", function() {
    // grab a color of clicked squares
    var clickedColor = this.style.background;
    // compare color to pickedColor
    if (clickedColor === pickedColor) {
      alert("Correct!");
    } else {
      alert("Wrong!");
    }
  });
}