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
document.getElementById("demo6").innerHTML = toCelsius((100).convert) = math.ceil;

