//using get element by id
document.getElementById("demo").innerHTML = 5 + 6;

//using docc.write
document.write(6 + 5);

/*also note that console.log() is used is isplaying data and
for debuging purposes*/

console.log(5 + 6);

//JAVA SCRIPT STATEMENT

let x, y, z;
x = 6;
y = 6;
z = x + y;
console.log(z);

document.getElementById("demo2").innerHTML = "hello dolly";

function myFunction() {
  document.getElementById("demo").innerHTML = "hello Sammy";
  document.getElementById("demo2").innerHTML = "God bless you!";
}

let carName = "volve";
document.getElementById("demo3").innerHTML = carName;

//constant Array
const cars = ["saab", "volve", "Bmw"];
cars[0] = "toyota";
cars.push("audi");

console.log(cars); // this console prints output on the console terminal of a browser
document.getElementById("demo4").innerHTML = cars;

/*const car = { type: "fiat", model: "500", color: white };
car.color = "red";
car.owner = "johnson";
document.getElementById("demo5").innerHTML = car.owner; // something is wrong
*/

let c = myFunction(4, 3);
function myFunction(a, b) {
  return a * b;
}
console.log(c);

function toCelsius(fahrenheit) {
  return (5 / 9) * (fahrenheit - 32);
}
document.getElementById("demo6").innerHTML = Math.ceil(toCelsius(100));

//JAVASCRIPT SLICE
//Slice() extracts a part of a string and returns the extracted part in a new string.
//the method takes in two parameters
//the (start - finished position) the end not included.

let str = "apple, banana, kiwi";
let part = str.slice(7, 13);
document.getElementById("demo7").innerHTML = part;

//NOTE, if a number is a negative (-) it is counted from the end of the string
//EG (-12, -8)

//replace
//JS string method

function myFunction() {
  let text = document.getElementById("demo8").innerHTML;
  document.getElementById("demo8").innerHTML = text.replace(
    "microsoft",
    "W3 school"
  );
}

/*
the replace()
(1) does not change the string it is called on
(2) it returns a new string in subtitute
(3) it can only replace the firdt match */

//CONVERTIN STRING TO UPPERCASE
let text1 = "hello danny!";
let text2 = text1.toUpperCase();

console.log(text2);

//to lowercase
let text3 = "THANKS TO GOD";
let text4 = text3.toLowerCase();
console.log(text4);

//concatenation
let A = "hello";
let B = "babe!";
let C = A.concat(" ", B);
//console.log(C);
document.getElementById("demo9").innerHTML = C;

//JS STRING charAt()
/*the string charAt() method returns the character 
at a specific index(position)in a string*/

let text = "HELLO WORLD";
document.getElementById("demo10").innerHTML = text.charAt(2);

//CONVERTING string to AN array
//split

let v = "a,d,t,v,t";
const myArray = v.split(",");
document.getElementById("demo11").innerHTML = myArray[0];

//Java script template bliterals
// back-tics syntax
let firstName = "goodnews";
let lastName = "osondu";
let Text = `welcome dear ${firstName}, ${lastName}!`;

document.getElementById("demo12").innerHTML = Text;

//HTML template
let header = "Template Literal";
let tag = ["template literal", "javascript", "Es6"];
let html = `<h3>${header}</h3> <ul>`;
for (const x of tag) {
  html += `<li>${x}</li>`;
}
html += `</ul>`;

document.getElementById("demo13").innerHTML = html;

//JS Numbers
let D = 10;
let E = 20;
let Z = "THE RESULT IS:" + D + E;
document.getElementById("demo14").innerHTML = Z;
// this will calculate the whole data as a string variable and not as a number.

let d = 10;
let e = 20;
let j = "30";
let result = d + e + j;
document.getElementById("demo15").innerHTML = result;
console.log(result);

//numeric string
/*
javascript will convert string to number when dividing , multiplying
and substracting but it doesnt do so when adding.
*/

let myNumber = 2;
let TEXT = "";
while (myNumber != Infinity) {
  myNumber = myNumber * myNumber;
  TEXT = TEXT + myNumber + "<br>";
}
console.log(TEXT);
document.getElementById("demo16").innerHTML = TEXT;

//NUMBER METHOD
//toString()

let q = 123;
document.getElementById("demo17").innerHTML =
  q.toString() + "<br>" + (123).toString() + "<br>" + (100 + 23).toString();

//toExponential() Method
let g = 9.657;
document.getElementById("demo18").innerHTML =
  g.toExponential() +
  "<br>" +
  g.toExponential(2) +
  "<br>" +
  g.toExponential(4) +
  "<br>" +
  g.toExponential(6);

//toFixed()method
// this is perfect when working with money
let o = 909.76;
document.getElementById("demo19").innerHTML =
  o.toFixed(0) +
  "<br>" +
  o.toFixed(2) +
  "<br>" +
  o.toFixed(4) +
  "<br>" +
  o.toFixed(6);

//toPrecision()Method
let p = 90.76;
document.getElementById("demo20").innerHTML =
  p.toPrecision() +
  "<br>" +
  p.toPrecision(2) +
  "<br>" +
  p.toPrecision(4) +
  "<br>" +
  p.toPrecision(6);

//the Number () Method
// Number()
//parseFloat()
//parseINT()
/*ALL these methods converts strings to a number
  or values to a number */
document.getElementById("demo21").innerHTML =
  Number(true) +
  "<br>" +
  Number(false) +
  "<br>" +
  Number("10") +
  "<br>" +
  Number("10,54");

//parseInt and parseFloat returns number and neglects spaces however, only first numbers are returned

//JAVA-SCRIPT (MIN_VALUE and MAX_VALUE)

let h = Number.MAX_VALUE;
document.getElementById("demo22").innerHTML = h;

let J = Number.MIN_VALUE;
document.getElementById("demo23").innerHTML = J;

//JAVASCRIPT ARRAY
//accessing array element using index number

const motor = ["saab", "volvo", "Bmw"];
document.getElementById("demo24").innerHTML = motor[0];

//changing an array element
const vehicle = ["pathfinder", "toyota", "volvo", "lezus"];
vehicle[0] = "opel";
document.getElementById("demo25").innerHTML = vehicle;
console.log((vehicle[0] = "Bus"));

//array lenght property
const fruit = ["banana", "oranges", "pinapple", "pear"];
document.getElementById("demo26").innerHTML = fruit.length;
console.log(fruit.length);

//Looping array element
const Fruits = ["banana", "oranges", "pinapple", "pear"];
let fLen = Fruits.length;
let Txt = "<ul>";
for (let i = 0; i < fLen; i++) {
  Txt += "<li>" + Fruits[i] + "</li>";
}
Txt += "</ul>";
document.getElementById("demo27").innerHTML = Txt;

//Array.forEach()
/*
const apples = ["banana", "oranges", "pinapple", "pear"];
let txt = "<ul>";
apples.forEach(myFunction);
txt += "</ul>";

document.getElementById("demo28").innerHTML = txt;

function myFunction(value) {
  txt += "<li>" + value + "</li>";
}
*/

//.PUSH is the easiest ways of adding to an array
