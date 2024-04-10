// INCREMENTING VARIABLES & RANDOM VALUES
let counter = 0;
// 1. Saving elements as variables cleans up your code.
var displayEl = document.getElementById("display");
var plus1Btn = document.getElementById("plus1");
var plus10Btn = document.getElementById("plus10");
var plus50Btn = document.getElementById("plus50");
var minus1Btn = document.getElementById("minus1");
var minus10Btn = document.getElementById("minus10");
var minus50Btn = document.getElementById("minus50");
var stringInEl = document.getElementById("strIn");
var stringOutEl = document.getElementById("strOut");
// 2. Incrementing. The ++, --, +=, and -= operators are used to update variables without losing what was there before

// let x = 5;
// x = x + 1; //x becomes 6
// x++; // x becomes 7
// x += 10; // x becomes 17
// console.log(x);

// let y = 50;
// y = y - 5; // y becomes 45
// y--; // y becomes 44
// y -= 10; // y becomes 34

plus1Btn.addEventListener("click", add1);
plus10Btn.addEventListener("click", add10);
plus50Btn.addEventListener("click", add50);
minus1Btn.addEventListener("click", sub1);
minus10Btn.addEventListener("click", sub10);
minus50Btn.addEventListener("click", sub50);

function add1() {
  counter++;
  displayEl.innerHTML = counter;
}

function add10() {
  counter += 10;
  displayEl.innerHTML = counter;
}

function add50() {
  counter += 50;
  displayEl.innerHTML = counter;
}

function sub1() {
  counter--;
  displayEl.innerHTML = counter;
}

function sub10() {
  counter -= 10;
  displayEl.innerHTML = counter;
}

function sub50() {
  counter -= 50;
  displayEl.innerHTML = counter;
}

// 3. The += operator also works to update strings. Also, the "change" event can remove the need for buttons!
stringInEl.addEventListener("change", updateStory);
var story = "Once a upon a time, ";

function updateStory() {
  var newWord = stringInEl.value;
  stringInEl.value = " ";
  stringOutEl.innerHTML = story += newWord;
}

// 4. Math.random() is used to bring RNG (random number generator) to your applications.
var random1 = document.getElementById("rand1");
var random2 = document.getElementById("rand2");
var random3 = document.getElementById("rand3");
var random4 = document.getElementById("rand4");
var rand1OutEl = document.getElementById("rand1-out");
var rand2OutEl = document.getElementById("rand2-out");
var rand3OutEl = document.getElementById("rand3-out");
var rand4OutEl = document.getElementById("rand4-out");

random1.addEventListener("click", randOne);

function randOne() {
  var rand = Math.random();
  rand = rand.toFixed(3);
  rand1OutEl.innerHTML = rand;
}

random2.addEventListener("click", randTwo);

function randTwo() {
  var rand = Math.random() * 100;
  rand = rand.toFixed(3);
  rand2OutEl.innerHTML = rand;
}

random3.addEventListener("click", randThree);

function randThree() {
  rand = Math.random(0) * (5 - -5) - 5;
  rand = rand.toFixed(3);
  rand3OutEl.innerHTML = rand;
}

random4.addEventListener("click", randFour);

function randFour() {
  var boxRand = +document.getElementById("rand-in1").value;
  var boxRand2 = +document.getElementById("rand-in2").value;
  rand = Math.random(1) * (boxRand - boxRand2 + 1) + boxRand2;
  rand = rand.toFixed(3);
  rand4OutEl.innerHTML = rand;
}

//FUN STUFF!
let sizetext = document.getElementById("random-size");
let randomcolor = document.getElementById("random-rgb");
let resetpage = document.getElementById("reset");

sizetext.addEventListener("click", changetext);

function changetext() {
  rand = Math.random() * (25 - 5) + 5;
  rand = rand.toFixed(0);
  document.getElementById("changingtext").style.fontSize = `${rand}px`;
}

randomcolor.addEventListener("click", colorChange);

function colorChange() {
  red = Math.random() * 255;
  green = Math.random() * 255;
  blue = Math.random() * 255;

  red = red.toFixed(0);
  green = green.toFixed(0);
  blue = blue.toFixed(0);

  document.getElementById(
    `HTML`
  ).style.background = `rgb(${red},${green},${blue})`;
}

resetpage.addEventListener("click", pageChange);

function pageChange() {
  displayEl.innerHTML = "0";
  stringOutEl.innerHTML = "Once upon a time,";
  rand1OutEl.innerHTML = "----------";
  rand2OutEl.innerHTML = "----------";
  rand3OutEl.innerHTML = "----------";
  rand4OutEl.innerHTML = "----------";
  document.getElementById(`HTML`).style.background = "rgb(154,228,200)";
  document.getElementById("changingtext").style.fontSize = "16px";
  var boxRand = +document.getElementById("rand-in1").value;
  var boxRand2 = +document.getElementById("rand-in2").value;
  boxRand.innerHTML = " ";
  boxRand2.innerHTML = " ";
}
