const num1 = "9"
const num2 = "3"

console.log(num1 + num2);

console.log(+num1 + +num2);

const num3 = "9.9"
const num4 = "3.3"
console.log(parseInt(num3) + Number(num4));

const num5 = "9.2"
const num6 = "3.2"
console.log(parseFloat(num5) + Number(num6));
console.log(num5 + num6);


console.log("******** math object ******");

console.log(Math);

//מעגל ללמטה
console.log(Math.floor(2.9)); // 2
//מעגל ללמעלה
console.log(Math.ceil(2.1)); // 3

//מעגל ללמעלה או למטה לפי המספר העשרוני שיותר קרוב למספר עגול
//מ2.1 עד 2.4 יעגל ללמטה
//מ2.5 עד 2.9 יעגל ללמעלה


//מ2.5 עד 2.9 יעגל ללמעלה
console.log(Math.round(2.9)); //3
//מ2.1 עד 2.4 יעגל ללמטה
console.log(Math.round(2.1)); //2
//מ2.5 עד 2.9 יעגל ללמעלה
console.log(Math.round(2.5)); //3



console.log("****** Random *****");
//מספר אקראי/מספר רנדומלי
//כמו לוטו

//מספר רנדומאלי בין 0 ל 1
console.log(Math.random()); //0.0 - 9.999999999999


//מספר רנדומאלי בין 0 ל 100
console.log(Math.random() * 100); //0.0 - 100
//כדי לעגל מספר רנדומאלי
console.log(Math.round(Math.random() * 100)); //0.0 - 100


const rnNum1 = Math.ceil(Math.random() * 10);
const rnNum2 = Math.ceil(Math.random() * 10);

const total = rnNum1 * rnNum2;

console.log(`${rnNum1} * ${rnNum2} = ${total}`);

//כדי לעשות גם חישוב מתמטי רנדומאלי
//יצרנו מערך של חישוב מתמטי
const operators = ["+", "-", "*", "/"];

//עשינו length
// כי נקבל שגיאה כי האינדקס הוא 3 אין לנו אינדקס 4
//זה תמיד מעגל ללמעלה ceil כדי שנקבל גם את האינדקס 0 אם היינו עושים math.floor עשינו 
//פה יצרנו משתנה לקבלת האינדקס של החישוב המתמטי
const randomIndex = Math.floor(Math.random() * operators.length);

//פה 
console.log(operators[randomIndex]);

const operator = operators[randomIndex];

let result = 0;

if (operator === "+") {
    result = rnNum1 + rnNum2;
} else if (operator === "-") {
    result = rnNum1 - rnNum2;
} else if (operator === "*") {
    result = rnNum1 * rnNum2;
} else if (operator === "/") {
    result = rnNum1 / rnNum2;
}

console.log(`${rnNum1} ${operator} ${rnNum2} = ${result}`);








