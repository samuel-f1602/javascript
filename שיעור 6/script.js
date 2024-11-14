console.log("**************** for loops on arrays ***************");
//כדי להוריד שורה עושים ככה \n

const fruits = ['Apple', 'Banana', 'Mango', 'orange', 'Peach', 'Cherry'];

//0.fruits is: Apple

for (let i = 0; i < fruits.length; i++) {
    console.log((i + 1) + ".fruit is: " + fruits[i]);
}
// נקבל דבר כזה
//1. fruit is: Apple
//1. fruit is: Banana
//1. fruit is: Mango
//1. fruit is: Orange
//1. fruit is: Peach

console.log("\n\n*************** for-off loop on array ********************\n\n");

const cars = ['Bmw', 'Audi', 'Mercedes', 'Toyota', 'Honda', 'Suzuki'];


for (let car of cars) {
    console.log("car is: " + car);
}

//נקבל דבר כזה
// car is: Bmw
// car is: Audi
// car is: Mercedes
// car is: Toyota
// car is: Honda
// car is: Suzuki

console.log("\n\n*************** for-in loop on object    ********************\n\n");

for (let i in cars) {
    let number = i;
    if (number !== cars.length - 1) {
        number++;
    }
    console.log(number + ".car is: " + cars[i]);
}

//נקבל דבר כזה
// 1.car is: Bmw
// 2.car is: Audi
// 3.ar is: Mercedes
// 4.car is: Toyota
// 5.car is: Honda
// 6.car is: Suzuki

//כדי לתפוס אינדקס מסוים

//for (let i in cars) {
//let number = i;
//if (number !== cars.length - 1) {
//number++;
//}
//console.log(number + ".car is: " + cars[3]);
//}
console.log("\n\n*********** אופציה שנייה ********\n\n");

//כדי לקבל את האות הראשונה באות גדולה
for (let i in cars) {
    console.log("car is: " + cars[i]);
}

console.log("\n\n*********** break-continue ********\n\n");

//const numbers = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];

//for (let i in numbers) {
//if (i >= 3) {
//console.log(numbers[i]);
//}
//}

//בעצם כדי להדפיס מאינדקס מסוים 
// 400
// 500
// 600
// 700
// 800
// 900
// 1000


const numbers1 = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];

for (let i in numbers1) {
    if (i > numbers1.length - 3) {
        break;
    }
    if (i < 3) {
        continue;
    }
    console.log(numbers1[i]);

}

console.log("\n\n*********** split - join ********\n\n");

const text = "i-am-a-web-developer";

const textarray = text.split("_");
console.log(textarray);


const text1 = "i-am-a-web-developer";

const textarray1 = text1.split(" ");
console.log(textarray1);


const text2 = "i-am-a-web-developer";

const textarray2 = text2.split("");
console.log(textarray2);


const bmw = "bmw";
const bmwarray = bmw.split("");
bmwarray[0] = bmwarray[0].toUpperCase();
console.log(bmwarray);


const newText = bmwarray.join("");
console.log(newText);

const newText1 = bmwarray.join("-");
console.log(newText1);


console.log("\n************* ex ************");
console.log("\n********* for of *********");

const movieName = ['vin diesel', 'samuel.L jackson', 'jason statham', 'jackie chan', 'the rock'];
console.log(movieName);

for (let actor of movieName) {
    const item = actor.split("")
    item[0] = item[0].toUpperCase("");
    const newItem = item.join("");
    console.log(newItem);
}

console.log("\n********* for in *********");
const movieName1 = ['vin diesel', 'samuel.L jackson', 'jason statham', 'jackie chan', 'the rock'];
console.log(movieName1);

for (let actor1 in movieName1) {
    const item = movieName1[actor1].split("");
    item[0] = item[0].toUpperCase("");
    const newItem = item.join("");
    console.log(newItem);
}


//√=option+v
