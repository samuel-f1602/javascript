////////////////////////// מערכים - arrays ////////////////////
//destructive
// משתנה פוינטר בעצם יש בו כמה משתנים
// [] js להציר מערך ב
// מערך תמיד מתחיל ב-0
// index           0         1          2          3
const fruits = ["lemon", "apple", "banana", "mango"];
console.log(fruits);
console.log(fruits[3]);
// כדי לגשת למספר מסוים במערך העשה את זה ככה 
//console.log(fruits[3]);

//const אבל אי אפשר לשנות  const אפשר לשנות איברים במערך שנמצא בתוך 
fruits[0] = "orange";

// length - אורך המערך
//אם נדפיס אותו נקבל את מספר האיברים במערך
console.log(fruits.length);
console.log(typeof fruits);//object

console.log("************** push *************");

//כדי להוסיף איבר לסוף המערך
fruits.push("grapes");
console.log(fruits);

//אופציה נוספת
fruits[5] = "pineapple"

//אם נשים אותו במיקום 10 למרות שעד האיבר הזה זה ריק זה ירשום לנו כמות האיברים הריקים ואז את האיבר האחרון
fruits[10] = "strewberry"
console.log(fruits);

console.log("************ unshift *************");
// הוא יוסיף את האיבר לתחילת המערך pushזה ההפך הגמור מ unshift 
fruits.unshift("kiwi");
console.log(fruits);
//האיבר האחרון במערך

//למה מינוס כי האינדקס האחרון הוא ספרה שלא קיימת כי זה מתחיל ב0 זה למה אנחנו נעשה מינוס 1 כדי לקבל את האחרון אם רוצים את הלפני האחרון נעשה מינוס 2 וכו וכו
console.log(fruits[fruits.length - 1]);
//כדי לקבל את הראשון הוא תמיד יהיה 0
console.log(fruits[0]);

//כדי לתת למשתמש להכניס את הערך הבא 
//fruits.push(prompt("enter a fruit name:"));

//console.log(fruits);


console.log("************ pop **************");

console.log(fruits);
//איך מסירים את האיבר האחרון במערך
//מוריד את האיבר האחרון במערך אז אין צורך לתת לה פרמטר pop 
fruits.pop();
// בהדפסה נראה את זה בלי האיבר האחרון
console.log(fruits);
//עוד אופציה
//פה הוא בעצם מסיר את האיבר האחרון במערך ומחזיר אותו במשתנה
const poped = fruits.pop()
console.log("poped ", poped);
// הוא יוסיף את האיבר לתחילת המערך popזה ההפך הגמור מ poped 


console.log("*********** shift **************");

//תסיר לנו את האיבר הראשון במערך shift 
//pop הוא בעצם ההפך מ
const shifed = fruits.shift();
//פה הוא בעצם מסיר את האיבר הראשון במערך ומחזיר אותו במשתנה
console.log("shifed: ", shifed);
console.log(fruits);


console.log("***************** splice ***************");
//כדי למחוק את האיבר שאנחנו רוצים בעצם לבחור את ההאיבר הרצוי 
//וחוץ מזה גם להחליף את האיבר הרצוי שמחקנו זאת אומרת שהיא גם מסירה וגם משנה
//הפונקציה הזאת מקבלת שתי פרמטרים והשנייה היא אופציונלית
//אבל אם נרשום רק את הפרמטר הראשון בלי להוסיף את הפרמטר האופציונלי הוא ימחוק מהפרמטר הראשון במערך עד סוף המערך
//הפרמטר השני הוא כדי להגיד לו למשך כמה איברים למחוק
//הפרמטר הראשון זה לפי אינדקסים אם נרשום 0 זה ימחק את הראשון

console.log("************* 1 parameters **************");

let colors = ['blue', 'yellow', 'red', 'green', 'purple', 'orange'];
colors.splice(2);
console.log(colors);
//פה הוא ימחק מהאינדקס השני כלומר 1 ועד סוף המערך

console.log("************* 2 parameters **************");
//אם נוסיף את הפרמטר השני
let colors1 = ['blue', 'yellow', 'red', 'green', 'purple', 'orange'];
colors1.splice(2, 2);
console.log(colors1);
//הוא ימחק לנו מהאינדקס השלישי כלומר 2 ולמשך 2 אינדקסים ונקבל בהדפסה
//'blue', 'yellow', 'purple', 'orange'

console.log("************* 2 parameters + change **************");
//כדי למחוק ולשים במקום איבר אחר נעשה את זה בצורה הבאה
let colors2 = ['blue', 'yellow', 'red', 'green', 'purple', 'orange'];
colors2.splice(2, 2, 'black', 'white');
console.log(colors2);
//אנחנו נקבל בהדפסה
//'blue', 'yellow', 'black', 'white', 'purple', 'orange'



console.log("********** ex ***************");

console.log("*ex1*");
const contact = ["gal", "dani", "yoni", "eden", "ron"]
console.log(contact);
console.log(contact.length);
console.log(typeof contact);

console.log("*get*");
const x = contact[3]
console.log(contact);

console.log("*get2*");
const x1 = contact[1] + ' ' + contact[2];
console.log(contact);


console.log("*set*");
contact[1] = "avi";
console.log(contact);

console.log("*set2*");
contact[3] = "meir";
contact[4] = "meir";
console.log(contact);

console.log("*add*");
contact.push("levi");
console.log(contact);

console.log();



//undestructive
console.log("************** slice ************");
//הוא יוצר לי העתק של המערך המקורי ועושה את השינוים עליו spliceבשונה מ 
const colors3 = ['Blue', 'Yellow', 'Red', 'Green', 'Purple', 'Orange'];
// 5 פה מדובר מהאינדקס 2 עד אינדקס 5 לא כולל
let myColors = colors3.slice(2, 5); // removes ['Blue', 'Yellow', 'Orange']

console.log(`myColors: ${myColors}`); // new array - ['Red', 'Green', 'Purple']
console.log(`colors: ${colors3}`);
