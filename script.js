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

//converting array to strings

const dudu = ["banana", "oranges", "pinapple", "pear"];
document.getElementById("demo29").innerHTML = dudu.toString();

//pop()
const gone = ["sugaar", "oranges", "pinapple", "pear"];
document.getElementById("demo30").innerHTML = gone;
gone.pop();
document.getElementById("demo30").innerHTML = gone;

//push()
const done = ["sugaar", "oranges", "pinapple", "pear"];
document.getElementById("demo31").innerHTML = done;
done.push("zobo");
document.getElementById("demo31").innerHTML = done;

//shift()
//removes the first element in an array
const hones = ["sugaar", "oranges", "pinapple", "pear"];
document.getElementById("demo32").innerHTML = hones;
hones.shift();
document.getElementById("demo32").innerHTML = hones;

//unshift()
//adds a new element before the  first element in an array
const uones = ["sugaar", "oranges", "pinapple", "pear"];
document.getElementById("demo33").innerHTML = uones;
uones.unshift("smove");
document.getElementById("demo33").innerHTML = uones;

//Changing Element
const yarn = ["hope", "grace", "blessed", "mavelous"];
yarn[0] = "kiwi";
document.getElementById("demo34").innerHTML = yarn;

//array.length(),  helps to add an element to the array without using.push()
yarn[yarn.length] = "kuli-kuli";
document.getElementById("demo35").innerHTML = yarn;

//Array splice
// the adds a new element to the array use the format above

const vans = ["higth", "lower", "jumper", "under"];
document.getElementById("demo36").innerHTML = "Original Array:<br> " + vans;
let remove = vans.splice(2, 2, "lemon", "kiwi");
document.getElementById("demo37").innerHTML = "New Array:<br>" + vans;
document.getElementById("demo38").innerHTML = "remove items:<br> " + remove;

// Array .sort
const vinc = ["higth", "lower", "jumper", "under"];
document.getElementById("demo39").innerHTML = vinc;

vinc.sort();
document.getElementById("demo40").innerHTML = vinc;

//REVERSING AN ARRAY
/**
 * by first displaying and array,
 * sort the array and reverse give us an array in a descending order
 */

//Numerical sorting.
const fig = [40, 789, 56, 4356, 1, 900];
document.getElementById("demo41").innerHTML = fig;

fig.sort(function (a, b) {
  return a - b;
});
document.getElementById("demo42").innerHTML = fig;

//SORTING AN ARRAY IN RANDOM
const points = [40, 789, 56, 4356, 1, 900];
document.getElementById("demo43").innerHTML = points;

function myAction() {
  points.sort(function () {
    return 0.5 - Math.random();
  });
  document.getElementById("demo43").innerHTML = points;
}

//THE Fisher Yate Method is the better numerical sorting method
const Points = [40, 789, 56, 4356, 1, 900];
document.getElementById("demo44").innerHTML = Points;
function myOction() {
  for (let i = Points.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * 1);
    let k = Points[i];
    Points[i] = Points[j];
    Points[j] = k;
  }
  document.getElementById("demo44").innerHTML = Points;
}

//ARRAY MAP

/**
 * it does not change the oriinal array
 * it creates a new array by performing  function on each array element
 * it doesnt act on array with out values
 */
{
  const numbers1 = [45, 67, 8, 4, 90];
  const numbers2 = numbers1.map(myFunction);
  document.getElementById("demo45").innerHTML = numbers2;
  function myFunction(value) {
    return value * 2;
  }
}

//array.filter
/**
 * it creates a new array with array element that psses a test
 */
{
  const numbers = [34, 65, 7, 90, 657];
  const over18 = numbers.filter(myFunction);
  document.getElementById("demo46").innerHTML = over18;
  function myFunction(value) {
    return value > 40;
  }
}

//REDUCE
//reduces the array to a single value
{
  const numbers = [34, 65, 7, 90, 657];
  let sum = numbers.reduce(myFunction);
  document.getElementById("demo47").innerHTML = sum;
  function myFunction(total, value) {
    return total + value;
  }
}

//ARRAY EVERY()

//this checks if all the elements in array passed a particular trade
{
  const numbers = [23, 45, 5, 76, 5, 45, 12, 9];
  let allover34 = numbers.every(myFunction);
  document.getElementById("demo48").innerHTML = allover34;
  function myFunction(value) {
    return value > 34;
  }
}

//array some()

//ARRAY indexof()

const Fruit = ["apple", "oranges", "pears", "avacado"];
let position = Fruit.indexOf("oranges") + 1;
document.getElementById("demo49").innerHTML =
  " oranges are at the" + " " + position + " " + "POSITION";

//ARRAY CONST

//DATE  OUTPUT
const L = new Date();
document.getElementById("demo50").innerHTML = L;
console.log(L);

//using UTC to display standard date
const W = new Date();
document.getElementById("demo51").innerHTML = W.toUTCString();

//Math operators,
//this returns the value of x to the power of y

let vit = Math.pow(8, 2);
console.log(vit);

//conditional operator
const time = new Date().getHours();
let greeting;
if (time < 10) {
  greeting = "good morning";
} else if (time >= 20) {
  greeting = "good day";
} else {
  greeting = "good evening";
}
document.getElementById("demo52").innerHTML = greeting;
console.log(greeting);

//JAVASCRIPT SWITCH
let day;
switch (new Date().getDay()) {
  case 0:
    day = "sunday";
    break;
  case 1:
    day = "monday";
    break;
  case 2:
    day = "tusday";
    break;
  case 3:
    day = "wednesday";
    break;
  case 4:
    day = "thursday";
    break;
  case 5:
    day = "friday";
    break;
  case 6:
    day = "saturday";
}
document.getElementById("demo53").innerHTML = "today is" + " " + day;

//loop
const car = ["Bmw", "audi", "toyota", "mitsibishi", "lezu"];
let hops = "";
for (let i = 0; i < car.length; i++) {
  hops += car[i] + "<br>";
}
document.getElementById("demo54").innerHTML = hops;

//note , even without numbering, loops can actually create figure without forml inialiazation
let kips = " ";
for (let i = 0; i < 5; i++) {
  kips += " the numebr is" + " " + i + "<br>";
}
document.getElementById("demo55").innerHTML = kips;

//LOOP SCOPE
//using var in a loop

//JS for in loop
const jig = [893, 45, 65, 88, 4, 3];
let boha = "";
for (let x in jig) {
  boha += jig[x] + "<br>";
}
console.log(boha);
document.getElementById("demo56").innerHTML = boha;

//Aray forEach
const number = [2, 34, 2, 44.5, 65];
{
  let TxT = "";
  number.forEach(myFunction);
  document.getElementById("demo57").innerHTML = TxT;
  function myFunction(value) {
    TxT += value + "<br>";
  }
}

//javascript for of loop
const tiga = ["van", "tanker", "lezuz"];
let lio = "";
for (let x of tiga) {
  lio += x + "<br>";
}
document.getElementById("demo58").innerHTML = lio;

//while loop
let vie = "";
let i = 0;
while (i < 10) {
  vie += "<br> the number is" + " " + i;
  i++;
}
document.getElementById("demo59").innerHTML = vie;

//map forEach

const fruitss = new Map([
  ["allpe", 500],
  ["bananas", 430],
  ["orange", 300],
  ["pear", 210],
]);
let Ttxt = "";
fruitss.forEach(function (value, key) {
  Ttxt += key + " = " + value + "<br>";
});
document.getElementById("demo60").innerHTML = Ttxt;
