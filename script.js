cons = document.getElementById("console");
numbers = document.querySelectorAll(".numbers");
operators = document.querySelectorAll(".operators");

var xPos = 0;
var yPos = 11.5;
for (i=0;i<numbers.length;i++) {
  if (xPos == 66) {
    xPos = 0;
    yPos+=22.125;
  }
  numbers[i].style.left = xPos+'vw';
  numbers[i].style.top = yPos+'vh';
  xPos+=22;
}

var opyPos = 11.5;
for (i=0;i<operators.length;i++) {
  operators[i].style.top = opyPos+'vh';
  opyPos+=17.7;
}

function check(event) {
  if (event.keyCode == "13") {
    cons.value = eval(cons.value);
  }
}

function calculate() {
  cons.value = eval(cons.value);
}

function addNum(event) {
  var clickednum = event.target.innerText;
  if (clickednum == "π") {
    clickednum = Math.PI;
  }
  if (clickednum == "^") {
    clickednum = "**";
  }
  if (clickednum == "±") {
    cons.value *= -1;
    clickednum = "";
  }
  if (clickednum == "sin") {
    clickednum = "Math.sin()";
  }
  if (clickednum == "cos") {
    clickednum = "Math.cos()";
  }
  if (clickednum == "tan") {
    clickednum = "Math.tan()";
  }
  if (clickednum == "√") {
    clickednum = "Math.sqrt()";
  }
  if (clickednum == "abs") {
    clickednum = "Math.abs()";
  }
  if (clickednum == "log") {
    clickednum = "Math.log()";
  }
  cons.value+=clickednum;
}

function addOperator(event) {
  var clickedOperator = event.target.innerText;
  if (clickedOperator == "÷") {
    cons.value+="/";
  }
  else if (clickedOperator == "x") {
    cons.value+="*";
  } else {
    cons.value+=clickedOperator;
  }
}

window.onerror = function() {
  cons.value = "Syntax Error";
  console.clear();
}

secondfunc = document.getElementById("secondF");
function secondF() {
  var secondarr = ["π", "sin", "cos", "tan", "√", "^", "±", "abs", "log"];
  var firstarr = ["7", "8", "9", "4", "5", "6", "1", "2", "3"];
  if (secondfunc.innerHTML == "2nd") {
    secondfunc.innerHTML = "1st";
    for (i=0;i<9;i++) {
      numbers[i].innerHTML = secondarr[i];
    }
  } else {
    secondfunc.innerHTML = "2nd";
    for (i=0;i<9;i++) {
      numbers[i].innerHTML = firstarr[i];
    }
  }
}
