const apple = "apple";
const banana = "banana";
const orange = "orange";

// מערך טוב לכמה משתנים של סטרינגים או מספרים במקום ליצור משתנים כמו בדוגמא למעלה

//מערך:
// מערך  /  שם תואם / משתנה 
const fruits = [apple, banana, orange]
//המיקום משמעותי לכל אחד יש אינדקס משלו
//אינדקס מתחיל ממיקום 0
//כדי לדעת מה העורך של המערך יש לנו מאפיין length שנקרא 
fruits.length; //3
console.log("******** length *******");

console.log(fruits.length);

console.log("****** i1 *******");
//אורך המערך אומר לי 3 אבל בעצם הספירה היא לא נכונה כי זה מתחיל מ0
//0/1/2
//אבל זה בעצם כמה איברים יש לי במערך

//כדי לקבל את האינדקס אחד של המערך נעשה את זה ככה
console.log(fruits[0]); // first element of the array
//apple

console.log("****** i2 ********");

//כדי לקבל את האינדקס השני במערך
console.log(fruits[1]);

console.log("****** i3 *******");

console.log(fruits[2]);

console.log("****** i3 option 2 ******");
// או בצורה הזאת שהיא יותר נכונה כי לא תמיד יש לנו את אורך המערך

console.log(fruits[fruits.length - 1]); // last element of the array
//orange
console.log("******* undefined ******");

//undefined אם נרשום בצורה הזאת זה ייתן לנו 
//כי הוא רואה את זה כמספר 3 ולא כאינדקס 2
console.log(fruits[fruits.length]);

console.log("************");

console.log("\n******** for loop ********\n ");

//******** for loop ******** 

//פה אני משתמש בלולאה כדי שהיא תדפיס לי כל פעם על איבר אחר בצורה הבאה
// fruit is *** apple
// fruit is *** banana
// fruit is *** orange

//  באה עם שלושה ביטויים  שאנחנו for לולאת 
// נשים בסוגריים הרגילים
//אחרי הסוגריים הרגילים יש לנו סוגריים מסולסלות
//1: index/ משתנה שזה בעצם האיטרטור
//2: תנאי עד מתי  הוא ירוץ / מתי הוא מפסיק
//3: בכמה אני רוצה להגדיל את הלולאה בפעם השנייה והשלישית
//בעצם הוא מגדיל או מחסיר את האינדקס אם התחלתי ב0 אז בסיסוב השני הוא יתחיל באינדקס 1
//וכו וכו..

//מה השימוש בסוגריים המסולסלות?
//scope התפקיד שלהם זה ה 
//כמות הפעמים שהלולאה תרוץ 
//והיא תרוץ ככמות המערך
//אם יש לי שלושה איברים במערך היא תריץ את המערך שלושה פעמים

//   בכמה אני מגדיל       תנאי        משתנה 
for (let i = 0; i < fruits.length; i++) {
    console.log("fruit is *** " + fruits[i]);
}
//מה זה איטרציה?
//סיבוב של הלולאה
//בסיבוב הראשון הוא יסתכל על המשתנה ששווה ל0
//בסיבוב השני לא מעניין אותו מהמשתנה של הסיבוב הראשון כי הוא כבר קיים אז בסיבוב השני הוא מעלה לאינדקס השני
//ובסיבוב השלישי הוא מעלה שוב  את האינדקס השני לאינדקס 3

console.log("\n* אם רוצים להתחיל מהסוף ושהוא ירד בין סיבוב לסיבוב של הלולאה *");
console.log("\n*** backward for loop on the array ***\n");


for (let i = fruits.length - 1; i >= 0; i--) {
    console.log("fruit is *** " + fruits[i]);
}

// fruit is *** orange
// fruit is *** banana
// fruit is *** apple

//reverse the array
console.log("\n******* for loop reverse ********");

const reversedfruits = fruits.reverse();

//for loop on the array
for (let i = 0; i < reversedfruits.length; i++) {
    console.log("fruit is *** " + fruits[i]);
}

//אפשר להשתמש בזה גם כדי לקבל רק את האחרון
console.log(fruits.reverse()[0]);


console.log("\n**** for loop the array after reversing using functiion ****\n\n");

const reversedfruits1 = fruits.reverse();

function printFruit() {
    for (let i = 0; i < reversedfruits1.length; i++) {
        console.log("fruit is *** " + fruits[i]);
    }
}

printFruit();

console.log("\n****** כדי להדפיס משתנה שבתוך הפונקציה וכדי להדפיס אותו החוצה שיכירו את המשתנה הזה *****");

//כדי להוסיף משתנה בפונקציה ולקבל אותו בהדפסה נצטרך לעשות return

const reversedfruits2 = fruits.reverse();

function printFruit1() {
    for (let i = 0; i < reversedfruits2.length; i++) {
        console.log("fruit is *** " + fruits[i]);
    }
    const x = 50;
    return x;
    console.log("this will not be printed");

}

console.log(printFruit1());

const xxx = printFruit1();
console.log(xxx);

console.log("\n****** function ******");
//פונקציה בסגנון הישן
//const uppercasedArray = function printArray (arr){
//};

//איך לעשות כדי לשנות את האות הראשונה של האיברים לאות גדולה
const uppercasedArray = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        //הגדרנו משתנה לאינדקס במערך
        let currentItem = arr[i];
        //הגדרנו הגדלה לאות הראשונה באינדקס 0
        //ועשינו גזירה למיקום שיפסיק ההגדלה ובמקרה הזה זה יהיה אינדקס 2 במילה
        let word = currentItem[0].toUpperCase() + currentItem.slice(1);
        arr[i] = word;
    }
};
// זה משתנה לא משנה arr בעצם פה ה 
//איזה מערך ניתן לו

const movies = ["titanic", "avatar", "inception", "interstellar"];
console.log(movies);
uppercasedArray(movies);
//אחרי הגדלה לאות הראשונה
console.log(movies);
console.log("*יצרנו פונקציה להגדלה לאות הראשונה במערך*");
//מערך חדש
const item = ["chair", "table", "sofa", "desk"];
console.log(item);
uppercasedArray(item);
console.log(item);


console.log("\n* log בלי כל ה return עם  *");

const uppercasedArray1 = (arr) => {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        //הגדרנו משתנה לאיבר הנוכחי במערך
        let currentItem = arr[i];
        // הגדרנו הגדלה באינדקס 0 באיבר הנוכחי
        //ועשינו גזירה למיקום שיפסיק ההגדלה ובמקרה הזה זה יהיה אינדקס 1 באיבר הנוכחי
        let word = currentItem[0].toUpperCase() + currentItem.slice(1);
        newArr.push(word);
    }
    return newArr;
};

const fight = ["mma", "boxe", "karate", "judo"]
console.log(uppercasedArray1(fight));
console.log(fight);
console.log(uppercasedArray1(["samuel"])[0]);

console.log("******* filter *******");

//למה נועד הפילטר 
//פילטר נועד לסנן לדוגמא במערך אני רוצה רק את האיבר הראשון ואת האחרון

//פילטר מקבל 3 פרמטרים משתנה,אינדקס,מערך
//אם אנחנו נשתמש רק בפרמטר אחד לא נצטרך עוד סוגריים
//const firstAndLastMovie = fight.filter(item => {

//});

const firstAndLastFight = fight.filter((item, i) => {
    return i === 0 || i === fight.length - 1;
});

//ביקשתי ממנו שיחזיר לי return בעצם פה ב
// length - 1 במקרה והאינדקס שווה ל0 או 
//שזה האיבר האחרון
//אם הייתי רוצה שיענה לי גם על התנאי הראשון וגם על התנאי השני הייתי שם 
//&&

console.log(firstAndLastFight);

//אם אני רוצה הדפסה של כמות האיברים ולא את האיברים עצמם
//נדפיס את האורך שלו
console.log(firstAndLastFight.length);

console.log("\n******* ex *******");

//נגיד ויש לי ציונים בכיתה ואני רוצה שיחזיר לי את הציונים הגדולים מ 90 או שווים ל90
//תחזיר לי ציונים הקטנים מ90 וגדולים מ70
//תחזיר לי ציונ ים הקטנים מ70

const result = [100, 95, 70, 60, 90, 50, 40, 85, 75, 65]

const excelent = result.filter((item, i) => {
    return item >= 90;
})

const passed = result.filter((item, i) => {
    return item < 90 && item >= 70;
})

const failed = result.filter((item, i) => {
    return item < 70
})

console.log("excelent student is: " + excelent);

console.log("passed student is: " + passed);

console.log("failed student is: " + failed);

console.log("\n*****************");









