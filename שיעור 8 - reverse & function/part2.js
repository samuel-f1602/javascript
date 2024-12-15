console.log("***** set timout *****");
//פעולה שאני רוצה שתקרה  עוד שנייה ולא עכשיו
//בעצם פעולה עם השהייה

//פונקציה מובנת של javascript
//אני יוצר משתנה שם לפונקציה ובפונקציה אני  setTimeout שם 
//שזה ההשהיה של הפונקציה

//const 1sec = () => {
//    setTimeout(() => {}, 1000)
//}

//אי אפשר להתחיל במספר אז נעשה את זה בצורה הבאה
console.log("* פונקציה אנונימית ללא שם *");
console.log("*כפתור 1*");

const sec1 = () => {
    setTimeout(() => { alert("hello world") }, 1000);
    console.log("I am first");
}
//השניות הן במיליסקנד
//כדי לעשות שנייה אחת נרשום 1000 מיליסקנד

//html שמנו את הפונקציה בכפתור שיצרנו במסמך
/* 
הוא קודם כל ידפיס את ההדפסה ואז תיכנס  הפונקציה למרות שמסמך 
נקרא מלמעלה למטה js 
 */

console.log("\n*פונקציה לא אנונימית*");
console.log("*כפתור 2*");

//אני יוצר פונקציה 

const printHello = () => {
    alert("hello class");

}
//ופה אני קורא לפונקציה בתוך ההשהיה שהיא תדע על איזה פונקציה מדובר
const sec2 = () => {
    setTimeout(printHello, 2000)
};

//אם הייתי שם אחרי שקראתי לפונקציה סוגריים זה היה מפעיל אותה ישירות וזהו זה מבטל את ההשהייה

/*
const printHello = () => {
    console.log("hello class");

}
 */
//זה היה עובד console.log אם הייתי שם את ב
//ישירות ושוב פעם אחרי ה2 שניות
/*
const sec2 = () => {
setTimeout(printHello(), 2000)
};
*/

console.log("**** exercise ****");
console.log("**** ex1 ****");

//צרו פונקציה שמקבלת מספר
//הדפיסו אותו לקונסול לאחר שניה במידה והמספר גדול מ10
//הדפיסו אותו לקונסול לאחר שניה וחצי במידה והמספר קטן מ10
function cClick() {
    const userN = +prompt('בחר מספר')

    if (userN > 10) {
        setTimeout(() => { console.log(userN) }, 1000);
    } else {
        setTimeout(() => { console.log(userN) }, 1500);
    }
}


console.log("**** ex2 ****");
//אם המשתמש ענה נכון הדפיסו לו כל הכבוד
//אחרת הדפיסו לו אתה טועה
//במידה ועברו 4 שניות והמשתמש לא ענה להדפיס לו הזמן נגמר

let finalAnswer = "";

const checkAnswer = (answer) => {
    if (answer === "yes") {
        alert("well done");
        finalAnswer = "well done";
    } else {
        alert("you are wrong");
        finalAnswer = "you are wrong";
    }
}

setTimeout(() => {
    if (finalAnswer === "") {
        alert("Time is up");
    }
}, 4000);

//html

