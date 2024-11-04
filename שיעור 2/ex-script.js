console.log("***********ex-1,1************");

console.log("hola from javascript");

console.log("**********ex-1,2,3,4,5***********");

var total = 100;
console.log(total);
console.log(total + 5);
console.log(total - 5);
console.log(total * 5);
console.log(total / 5);

console.log("************ex-6,7,8**************");

var age = 25;
console.log(age);

console.log(age = age + 1);
console.log(age += 1);
console.log(age++);

console.log("**********ex-9,10*********");

console.log(10 == "10");
console.log(10 === "10");

//variables
console.log("************ex-1****************");

var num1 = 1;
var num1 = 2;
console.log(num1);


let num3 = 2;
num3 = 3;
console.log(num3);

const num4 = 3;
console.log(num4);

//num4 = 4

console.log("********ex-3*********");

console.log('hello!');

console.log(10 == 10);


//function declaration
function samuel() {

    //function scope
    const userNumber7 = +prompt("please enter a number5:")
    const userNumber8 = +prompt("please enter a number6:")
    const sum2 = userNumber7 + userNumber8;

    console.log(userNumber7 + "+" + userNumber8 + "=" + sum2);
}

console.log(samuel);

samuel()


console.log("********ex-4,5*********");
var myNumber1 = "5";
var myNumber2 = "20";

console.log(+myNumber1 + +myNumber2);

//method 2
console.log(parseInt(myNumber1) + parseInt(myNumber2));
//אבל בשיטה הזאת לא יעבוד לנו מספרים עשרונים

var myNumberF1 = "5.2";
var myNumberF2 = "20.2";
//method 3
console.log(parseFloat(myNumberF1) + parseFloat(myNumberF2));

//method 4
console.log(Number(myNumberF1) + Number(myNumberF2));


console.log("**************functions***************");
console.log("*******ex-1**********");


//function declaration
function shahar() {

    //function scope
    const userNumber7 = +prompt("please enter a number5:")
    const userNumber8 = +prompt("please enter a number6:")
    const sum2 = userNumber7 + userNumber8;

    console.log(userNumber7 + "+" + userNumber8 + "=" + sum2);
}

shahar();

console.log("**********ex-2********");

function addNumbers(israelNumber1, israelNumber2) {
    const sum2 = israelNumber1 + israelNumber2;
    console.log(israelNumber1 + " + " + israelNumber2 + " = " + sum2);

}

addNumbers(); //undefined + undefined = NaN
addNumbers(100, 200);
addNumbers(50, 30);
addNumbers(30, 24);


console.log("********ex-9********");
const n1 = 5;
const n2 = 5;

function addNumbers(x, y) {
    const sum3 = x + y;
    return sum3;
}

function subnumbers(x, y) {
    const sub = x - y;
    return sub;
}

n2 > n1 && console.log(subnumbers(x, y));
n2 < n1 && console.log(addNumbers(x, y));







