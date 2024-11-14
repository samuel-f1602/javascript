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

console.log("*********** אופציה שנייה ********");

//כדי לקבל את האות הראשונה באות גדולה
for (let i in cars) {
    console.log("car is: " + cars[i]);
}

