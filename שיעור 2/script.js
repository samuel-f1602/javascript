//////////////////////////// שיעור 2 ///////////////////////////

//casting = המרה
console.log("***casting - המרה***");
var myNumber1 = "5";
var myNumber2 = "20";

console.log(myNumber2 - myNumber1); // string זה נותן אך זאת לא האופציה כי זה

// 205 אם נעשה פלוס ולא מינוס זה ייתן לנו
// ולא 25
console.log(myNumber2 + myNumber1);

//הדרך הראשונה הנכונה היא
//method 1
console.log(+myNumber1 + +myNumber2);

//method 2
console.log(parseInt(myNumber1) + parseInt(myNumber2));
//אבל בשיטה הזאת לא יעבוד לנו מספרים עשרונים

//לעשרונים נעשה את זה בשיטה הבאה
var myNumberF1 = "5.2";
var myNumberF2 = "20.2";
//method 3
console.log(parseFloat(myNumberF1) + parseFloat(myNumberF2));

//method 4
console.log(Number(myNumberF1) + Number(myNumberF2));


console.log("***prompt***");
//כדי לבקש ממשתמש שיכניס את השם שלו

//prompt("enter your name:");

//כדי שאני ישים את השם + שם משפחה ושיהיה רווח ביניהם נעשה את זה בצורה הבאה
//"samuel" + " " + "frau"
//  כדי שיהיה ריווח " "
//אופציה שנייה 
// "samuel" + " frau"
// " עם ריווח

//כדי לבקש מהמשתמש להבניס מספר ולהכפיל אותו ב5

//var userNumber = prompt("please enter a number:");
//console.log(userNumber * 5);

//כדי לבקש מהמשתמש להבניס 2 מספרים ולחבר ביניהם

//var userNumber1 = prompt("please enter a number1:");
//var userNumber2 = prompt("please enter a number2:");
//console.log(userNumber1 + userNumber2);

//var userNumber3 = +prompt("please enter a number3:");
//var userNumber4 = +prompt("please enter a number4:");
//console.log(userNumber1 + userNumber2);

console.log("***let***");
// הוא יקח את המספר האחרון שהצרתי
var num1 = 5;
var num1 = 10;
console.log(num1); // 10
// קוד ישן ולא בטיחותי

// let הכניסו משתנה חדש שנקרא javascript 
//משתמשים בו פעם אחת cssב id זה כמו let
//זה ירשום לי שגיאה var אם אני אשתמש באותו let וזה למה קיים ה
//var וכבר לא ב let היום משתמשים כמעט לרוב ב
//var יותר בטיחותי מ
let num2 = 20;

let num3 = 5;
//ושזה לא יכתוב לנו שגיאה נעשה את זה בצורה הבאה let כדי לשנות משתנה 
//נשתמש רק בשם ולא במשתנה
num3 = 10;
console.log(num3);
//אפשר לשנות את הערך שלו let 

//constל let  ההבדלים בין 
//let אפשר לשנות
//const אי אפשר לשנות את הערך שלו

// ************ const *********
console.log("***const***");
const num4 = 5
console.log(num4);

//num4 = 10
//וזה לא אפשרי const נקבל על זה שגיאה שאנחנו מנסים לשנות את הערך של 

//exercise 1,2,
var num22 = 50;
var num22 = 60;
console.log(num22);


let num30 = 10;
num30 = 15;
console.log(num30);

const num35 = 10;
//num35 = 15; //error
console.log(num35);


//************** functions ****************** */
//זה בעצם קוד שחוזר על עצמו ובמקום לכתוב את כולו מחדש functions
// functionsאני אשתמש ב
//const userNumber5 = +prompt("please enter a number5:")
//const userNumber6 = +prompt("please enter a number6:")
//const sum1 = userNumber5 + userNumber6;

//console.log(userNumber5 + "+" + userNumber6 + "=" + sum1);
console.log("***functions***");
//functions כדי להגדיר 

//function declaration
function shahar() {

    //function scope
    const userNumber7 = +prompt("please enter a number5:")
    const userNumber8 = +prompt("please enter a number6:")
    const sum2 = userNumber7 + userNumber8;

    console.log(userNumber7 + "+" + userNumber8 + "=" + sum2);

    //לשים לב לא לרשום בחיים את שם הפונקציה בתוך הפונקציה
    //זה יתקע לנו את הדפדפן ויצור תקלה שנקראת
    //stack overflow
    //זה בעצם תקלה שהוא מריץ את הפונקציה שוב ושוב עד שנגמר לו הזיכרון
    // x shahar() x
}

//תופיע הפונקציה שהגדרנו shahar(); כל פעם שנרשום 
//כשמסתיימת הפונקציה המשתנים לא קיימים יותר 
//console.log(userNumber7); אי אפשר לעשות דבר כזה 
//console זה ירשום לנו ב
//console.log(userNumber7); - error - out of scope

//תופיע הפונקציה שהגדרנו shahar(); כל פעם שנרשום 

shahar();
//shahar();
//shahar();
//shahar();
//shahar();

//זאת השיטה הישנה לכתוב פונקציה וגם אני אקרא לפונקציה לפני איפה שכתבתי אותה זה יעבוד אבל אנחנו מעדיפים שלא לעשות את זה כדי שיהיה לנו תמיד סדר

//במקרה הזה נעדיף לרשום את כל הפונקציות בראש הקוד

console.log(shahar); //הוא ידפיס לנו את כל הקוד של הפונקציה

console.log(typeof shahar); //functions

//עד עכשיו למדנו 4 סוגי משתנים
//bouleans
//string
//number
//functions

//כדי ליצור כפתור וכשנלחץ עליו הפונקציה תתחיל לעבוד נעשה את זה בצורה הבאה
//  bodyונרשום ככה בhtml נלך למסמך 
//<button onclick="shahar()">click me</button>


console.log("************* parameters **************");
//במקום לבקש מהמשתמש שתי מספרים לא משנה איזה מספרים תרשום זה ייקח את שתי המספרים ויעשה פעולת חיבור

function addNumbers(israelNumber1, israelNumber2) {
    const sum2 = israelNumber1 + israelNumber2;
    console.log(israelNumber1 + " + " + israelNumber2 + " = " + sum2);

}

addNumbers(); //undefined + undefined = NaN
addNumbers(100, 200);
addNumbers(50, 30);
addNumbers(30, 24);


console.log("*************** return ********");

function calcSquareArea(length, width) {
    const area = length * width;
    return area;
}

calcSquareArea(5, 5); //25
//אם נעשה את זה בצורה הזאת זה לא ידפיס כלום

//כדי שיעבוד נעשה את זה בצורה הבאה
//console.log(calcSquareArea(5, 5));
//יש אופציה יותר מסודרת

// בעצם ליצור משתנה ושהמשתנה יהיה שווה לשם הפונקציה
const square1 = calcSquareArea(5, 5);
console.log(square1); //25

//נגיד וקיבלנו ריבוע חדש מהמפעל והוא גדול פי 2 מהריבוע הראשון
const square2 = calcSquareArea(7, 4); //area=25 * 2 =50
console.log(square2 * square1);
console.log(square2 / square1);
console.log(square2 + square1);
console.log(square2 - square1);


//היא return המשמעות של ה
//תחזיר לי את ערך מתוך הפונקציה איזה ערך שאני רוצה
//אם ישאלו אותי מתישהו כמה ערכים אפשר להחזיר מתוך פונקציה התשובה: היא ערך אחד ויחיד 
//האם ננסה להחזיר כמה משתנים הוא יחזיר את הערך האחרון שרשמנו
//function calcSquareArea(length, width) {
//const area = length * width;
//return area;6, 7, 8;
//}
//התשובה : 16
// בעצם נועד כדי לקחת את הערך שנקבל ולהכפיל או לחלק או לחבר return 
//את הערך בערך חדש לדוגמא
//...ערך חדש// * תוצאה של ה חישוב ה-1
//const square2 = square1 * 2;
//console.log(square2);

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

