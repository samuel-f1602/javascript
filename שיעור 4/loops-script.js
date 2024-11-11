//////////////////////////// לולאות - loops ///////////////////////////
// לולאות זה קטע קוד שיחזור על עצמו מספר פעמיים מסוים
// יש לנו שתי סוגי לולאות 
// while
// for

//loops-while
// כל סיבוב שלם של לולאה נקראת איטרציה
// ניצור משתה שמתחיל מ-0
// ונגיד ללולאה שכל עוד המספר קטן מ100 תגדיל אותו כל פעם באחד
//console ואחרי שאתה מעלה אותו באחד תדפיס אותו ב

let myNumber = 0;
while (myNumber < 100) {
    myNumber++;
    console.log(myNumber);

}
//נקבל בהדפסה
//1
//2
//3
//4
//5
//וכו....

console.log('******************************');

//אם רוצים לעשות את אותו הדבר אבל הפעם אני אבחר בין 5 - 10 אבל אני רוצה שיכלול את שתיהם אם נעשה את זה בצורה הבאה כמו שעשינו לפני הוא ישר יקפיץ את ההדפסה הראשונית באחד בעצם אנחנו לא נקבל את ה5 אנחנו נקבל ישר 6
//let myNumber = 5;
//while (myNumber <= 10)
//myNumber++;
//console.log(myNumber);
// כדי שזה ידפיס לנו את ה5 ואז יעלה  נעשה את זה בצורה הבאה

let myNumber2 = 5;
while (myNumber2 <= 10) {
    console.log(myNumber2);
    myNumber2++;
}
// ++ בעצם קודם כל הדפסה ואז מגדיל 

//אופציה שנייה
//let myNumber2 = 4;
//while (myNumber2 <= 10) {
//myNumber2++;
//console.log(myNumber2);
//}

//אם לא נעלה אותו באחד כל פעם זה יתקע לנו את הדפדפן כי הוא אף פעם לא יגיע ל10
//הוא ימשיך להריץ את הפונקציה אינסוף
//let myNumber2 = 5;
//while (myNumber2 <= 10) {
//console.log(myNumber2);
//}

console.log('*************** ex1 ***********');

let ex1 = 1;
while (ex1 <= 10) {
    console.log(ex1);
    ex1++;
}

console.log('**************** ex2 ************');

let ex2 = 2;
while (ex2 <= 7) {
    console.log(ex2);
    ex2++;
}

console.log('************** ex3 ***************');

let ex3 = 10;
while (ex3 >= 0) {
    console.log(ex3);
    ex3--;
}

console.log('***************** ex4 *************');

let ex4 = 8;
while (ex4 >= 3) {
    console.log(ex4);
    ex4--;
}

// כדי לעשות את זה בקפיצות של 2 בעצם קפיצות זוגיות נעשה את זה בצורה הבאה
console.log('******************* ex5 ***********');

let ex5 = 2
while (ex5 <= 20) {
    console.log(ex5);
    ex5 += 2;
}

console.log('***************** for ********************');
//loops-for
// אנחנו רושמים כמעט הכל בשורה אחת while בשונה מלולאת for בלולאת 
// זה קיצור לאיטרטור i 
// i לקרוא למשתנה for כדי שיהיה מובן לכולם הקוד שלנו נהוג בלולאת 
//      פונקציה /  תנאי  /  משתנה  
//for loops syntax:
//for(declaration, condition,increment/decrement(operation))      
for (let i = 1; i <= 100; i++) {
    console.log(i);
}
// בעצם זה חוסך לנו שורות קוד ואנחנו רושמים את כל הפרמטרים בשורה אחת
//<= הגדרנו תנאי let בעצם בשורה אחת יצרנו משתנה
// ++  והבאנו לו פונקציה

// פעם 100 hello אם נעשה כזה דבר זה ירשום לנו 
//for (let i = 1; i <= 100; i++) {
//console.log("hello");
//}

console.log('********* ex1 ********');
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

console.log('********** ex2 *******');
for (let i = 2; i <= 7; i++) {
    console.log(i);
}

console.log('********* ex3 **********');
for (let i = 10; i >= 0; i--) {
    console.log(i);

}

console.log('********* ex4 **********');
for (let i = 8; i >= 3; i--) {
    console.log(i);

}

console.log('********* ex5 **********');
for (let i = 2; i <= 20; i += 2) {
    console.log(i);

}

console.log('********** ex6 *********');
let end = +prompt("enter the end number")
for (let i = 0; i <= end; i++) {
    console.log(i);

}

console.log('********** ex7 *********');
let start = +prompt("enter the end number")
for (let i = start; i <= 100; i++) {
    console.log(i);

}

console.log('********** ex8 *********');
let start1 = +prompt("enter the start1 number")
let end1 = +prompt("enter the end1 number")
for (let i = start1; i <= end1; i++) {
    console.log(i);

}

console.log('************ ex9 ***********');
//או לולאה יורדת או עולה 
const start2 = +prompt("please enter start2 number:")
const end2 = +prompt("please enter end2 number:")

if (start2 > end2) {
    for (let i = start2; i >= end2; i--) {
        console.log(i);

    }
} else {
    for (let i = start2; i <= end2; i++) {
        console.log(i);

    }
}


console.log('********** ex10 *********');
//let start3 = +prompt("enter the start3 number")
//let end3 = +prompt("enter the end3 number")
//let space = +prompt("enter the space3 number")
//for (let i = start3; i <= end3; i += space) {
//console.log(i);

//}

console.log('************* ex11 ***********');

const numberOfWords = +prompt("please enter number of words:")
let sentence = "";

for (let i = 1; i <= numberOfWords; i++) {
    const word = prompt("please enter word number" + i);
    sentence += word + " ";
}

console.log(sentence);

console.log("************* multiply ***********");

let board = "";

for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        board += i * j + "\t";
    }
    board += "\n";
}

console.log(board);





