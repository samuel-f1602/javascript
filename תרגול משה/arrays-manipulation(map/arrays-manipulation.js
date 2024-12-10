console.log("*** arrays-manipulation ***");
//map/reduce/filter/sort
/*
מניפולציה אני בעצם לוקח מערך שאני מקבל ואני עושה לו שינוי כמו לסדר אותם מהגדול לקטן זוגי ואי זוגי וכדומה
מבלי לפגוע במערך המקורי אני בעצם מייצר העתק ועל ההעתק עושה שינויים
*/
console.log("\n*** map ***");

/*
יוצרת מערך חדש ורצה על כל איבר בפני עצמו במערך ולהפעיל פונקציה על אותו איבר
*/
const fruits = ["banana", "apple", "pineapple", "cherry", "peach"];

//const fruits2 = fruits.map(fruit => { return fruit }); //["banana", "apple", "pineapple", "cherry", "peach"];
//יצרנו העתק למערך המקורי

//אם לא משתמשים בסוגריים מסולסלות נעשה את זה בצורה הבאה
//                      מקבלת // return
//console.log(fruits.map(fruit=>fruit.toUpperCase()))

//אם נשתמש בסוגריים מסולסולות חייבים returnלהשתמש ב

//לפני החץ היא מקבלת מהמערך המקורי ואחרי החץ היא מחזירה
//                 מקבלת    
const fruits2 = fruits.map(fruit => {
    // מחזירה  
    return fruit.toUpperCase()
}); //["BANANA", "APPLE", "PINEAPPLE", "CHERRY", "PEACH"]
//יצרנו העתק חדש עם מניפולציה של הגדלה לאותיות גדולות

//מקורי
console.log(fruits);
//העתק + מניפולציה
console.log(fruits2);

//אופציה 2 ומיותרת
//console.log(fruits.map(fruit => fruit.toUpperCase()));

/*
יוצרת מערך חדש מקריאה לפונקציה עבור כל map
איבר במערך

היא אינה מבצעת את הפונקציה עבור אלמנטים ריקים
את זה היא לא תעשה עם זה כלום זה ירשום ""
//undifined

היא אינה משנה את המערך המקורי
*/

console.log("\n** ex **");
/*
קחו מערך של מספרים והחזירו מערך חדש שבו כל מספר מוכפל ב2
*/

const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(numbers => { return numbers * 2 });
console.log(doubled);


console.log("\n*** reduce ***");
//reduce זה להפחית
//היא יודעת לקבל שלושה פרמטרים
//acc
//current
// initial value
//money.reduce((acc,current,initial value(דוגמא=6000)))
const money = [1000, 1500, 0, 2000];

const total = money.reduce((totalMoney,
    salary) => totalMoney + salary);

//ריצה ראשונה
//totalMoney = 0 + salary = 1000 = 1000
//ריצה שנייה
//totalMoney = 1000 + salary = 1500 = 2500
//ריצה שלישית
//totalMoney = 2000 + salary = 0 = 2500
//ריצה רביעית
//totalMoney = 2500 + salary = 2000 = 4500

console.log(total);

//string יכול לעבוד גם על 
const words = ["hello ", "world ", "from ", "samuel "]
const fullSentence = words.reduce((totalSentence, singleWord) => totalSentence + singleWord)
console.log(fullSentence);

//string אם נחבר מספר עם 
//0 + "samuel"
//"0samuel"

//string על initial value אם נרצה לתת לו 
//string זה חייב להיות 
//money.reduce((acc,current,initial value(דוגמא="name")))


/*
מבצעת פונקצית הפחתה עבור איבר במערך reduce

היא מחזירה ערך בודד: התוצאה המצטברת של הפונקציה

אינה מבצעת את הפונקציה עבור רכיבי מערך ריקים

היא אינה משנה את המערך המקורי
*/

console.log("\n*** ex ***");

const exNum = [10, 20, 30, 40];

const totalExNum = exNum.reduce((totalNum, singleNum) => totalNum + singleNum);
console.log(totalExNum);


console.log("\n*** filter ***");
const ages = [10, 20, 30, 40];
const agesArray = ages.filter(age => age > 18);

//פילטר נועד לפלטר לסנן בעצם לבחור לי איברים מסוימים על פי תנאי במערך
//הוא יוסיף אותו במערך true אם התנאי הוא 
//הוא לא יוסיף אותו false אם התנאי הוא 

//גדול מ18 age שמנו תנאי של האם 
//בריצה הראשונה 10 קטן מ18 אז הוא לא יוציא אותו במערך החדש
//ריצה שנייה 20 גדול מ18 אז הוא ייתן לנו אותו במערך החדש
//ריצה שנייה 30 גדול מ18 אז הוא ייתן לנו אותו במערך החדש
//ריצה שנייה 40 גדול מ18 אז הוא ייתן לנו אותו במערך החדש

//נקבל מערך חדש מפולטר
// agesArray = [20, 30, 40];
//בלי לפגוע במערך המקורי
console.log(agesArray);
console.log(ages);

//string עובד גם על
const fruitsSalade = ["banana", "apple", "pineapple", "cherry", "peach"];
const finalFruitSalade = fruitsSalade.filter(fruit => fruit.startsWith("p"));
//והתנאי הוא כל string פה השתמשתי בפילטר על
//pמה שמתחיל ב
//.startwidth()כל מה שמתחיל ב נשתמש ב
console.log(finalFruitSalade);
//["pineapple", "peach"] המערך החדש יהיה

console.log("\n*** ex ***");

const num = [5, 12, 8, 20, 3];
const filterd = num.filter(num => num > 10);
console.log(filterd);




