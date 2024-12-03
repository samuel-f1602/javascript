console.log("******** loop *******");
//לולאה זה לבצע פעולה בלופים ברצף אחד אחרי השני
//לולאה באה עם הפרמטרים הבאים

//אינדקס
//זאת אומרת מאיפה להריץ את הלולאה

//תנאי
//כל התנאי הוא נכון הוא ממשיך להריץ 
//בעצם תנאי עצירה

//העלאה של האינדקס כי אם לא נעשה את זה זה יעמוד במקום

//            פרמטרים  
//      העלאה/ עצירה /פתיחה 

console.log("\n******* loop for ******");

for (var i = 0; i < 5; i++) {
    console.log("loop number: " + i);

}
//כל ריצה של הלולאה נקראת איטרציה

console.log("\n****** loop while *****");
//מצירים על ההתחלה מחוץ while בלולאת 
//ללולאה
//מקבל תנאי עצירה while ה
//והעלאה מכניסים אותה לתוך הלולאה

var i = 0;
while (i < 5) {
    i++;
    console.log(i);
}

//הלולאה כמו לולאת פור אבל פחות נוחה 

console.log("\n*** loop do while ***");
//זאת לולאה פחות בשימוש
//הלולאה הזאת אומרת שאת הפעולה הראשונה תריץ לא משנה מה 
//גם אם התנאי יהיה לא נכון

var num = 10;
do {
    num++;
    console.log(num);
}
while (num < 5)


console.log("*** exercise ***");
//שילוב לולאה בפונקציה
/*
function printArray(arr) {

}
console.log(sumArray([1, 2, 3, 4, , 5]));
*/
//צרו פונקציה שמקבלת מערך ומדפיסה כל איבר שבו
function printArray(arr) {
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
printArray([1, 2, 3, 4, 5]);

//פרמטרים
//let = 0 

//קטן מאורך המערך i תנאי הוא כל עוד 
//אם לא נעשה את התנאי קטן מהאורך של המערך זה ייתן לנו שגיאה כי אינדקס זה מספר הוא לא יכול להיות קטן מהמערך אז נעשה שהוא יהיה קטן מהאורך של המערך

//העלאה ב1 כל פעם
//index [0]1
//index [1]2
//index [2]3
//index [3]4
//index [4]5

//אופ 2
console.log("\n***** אופ 2 ******");


function printArray(arr) {
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
const array = [1, 2, 3, 4, 5]
printArray(array);

//פה יצרנו מערך והדפסנו את המערך

console.log("\n***** ex2 ******");

//ex2
//צרו פונקציה שמקבלת מערך של מספרים ומחזירה את הסכום שלהם
function sumArray(arr) {
    let totalsum = 0;
    for (let i = 0; i < arr.length; i++) {
        totalsum += arr[i];
    }
    return totalsum;
}

let SUM = sumArray([1, 2, 3, 4, 5])
console.log(SUM);


