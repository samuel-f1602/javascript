///////////////////////// שיעור 1 //////////////////////

/*
הערה
*/

/*ככה עושים הודעת alert שזה הודעה כשנכנסים לעמוד */
/* 
    < !--< script defer >
alert("hello world!");
alert("hello world1");
    </script > -->
    */

console.log("hello world!");
console.log('hello world!');
console.log(`hello world!`);

//string "hello world"
console.log('hello my name is "john"')

//number: 6
console.log(6 + 6); //"12"
console.log("6" + "6"); //"66"
console.log("6" + 6 + 6); //"666"

// סימנים מתמטיים javascript
//+ חיבור
//- חיסור
// * כפל
// / חילוק

console.log("**********")

console.log(50 + 50); //100

var mynumber = 50;

console.log(mynumber + 50); //100
console.log(mynumber); //50

//כדי להפוך את המשתנה מ50 ל100 יש כמה דרכים לעשות את זה
//שיטה ראשונה
mynumber = mynumber + 50;
console.log(mynumber); //100

//שיטה שנייה 
//קח את המשתנה ותוסיף לן 50
mynumber += 50;

//נושא: השוואות
//שתי סוגי השוואות

//סוג ראשון
//ערכים בוליאנים
// boolean: true או false 
// בעצם הוא בודק אם המשתנה תואם למספר שהזנו
//== השווה שווה בודק אם הוא אותו ערך ולא אם הוא אותו הסוג
console.log(mynumber == 50); //false
console.log(mynumber == 150); //true
console.log(mynumber === "150"); //false
// את ההשוואה עושים עם שתי שווה כי שווה אחד נותן לנו השמה בעצם לשים ערך 
// לדוגמא : var mynumber = 100

//סוג שני
// true משול ל1
// false משול ל0
console.log('********************');
console.log(true == 1); //true
// (type) פה הוא בודק אם הוא אותו ערך ואם הוא אותו סוג
console.log(true === 1); //false
// כמו שאנחנו רואים קיבלנו לא נכון כי אכן הם אותו ערך אך לא אותו סוג  המילה נכון הוא ערך בוליאני והוא שווה ל1 והספרה 1 היא מספר ולא ערך בוליאני 

console.log('exercise: opt 1');

//exercise option 1

var total = 100
console.log(total); //100

console.log(total == 100); //100


//חיבור
console.log(total += 5); //105


//חיסור
console.log(total -= 5); //100

//כפל
console.log(total *= 5); //500

//חילוק
console.log(total /= 5); //100

console.log('exercise: opt 2');
//exercise option 2
//חיבור
total = total + 5;
console.log(total); //105

//חיסור
total = total - 5;
console.log(total); //100

//כפל
total = total * 5;
console.log(total); //500

//חילוק
total = total / 5;
console.log(total); //100



console.log('*******************');

// modulo operator
//  % <-- זה לא אחוז זה נקרא מודולו
// שארית החלוקה
// בעצם כמה פעמים המספר נכנס במספר השני ומה שנשאר נקרא שארית 
console.log(9 % 2); // 1 (9 / 2 = 4 and the remainder is 1)
console.log(7 / 4); // 1.75
console.log(7 % 4); // 3 (7 / 4 = 1 and the remainder is 3)

console.log(4 % 2 == 0); // true

// כדי לבדוק עם התוצאה של המספרים יוצא זוגי או לא זוגי
console.log(4 % 2 == 0); // true

console.log('*****************');

//exercise 3
//ככה לא נכון לעשות

var age = 25; //25
//method 1
console.log(age = age + 1);
; //26

//method 2
console.log(age += 1);
; //27

//method 3
console.log(age++);
; //
console.log(age);

//ככה נכון לעשות ^
// גרסה ישנה javascript האופציה הראשונה היא ל

//method 1
age = age - 1;

//method 2
age -= 1;

//method 3
age--;

console.log(age);



//  javascript ב
// נהוג להפריד את המילים במשהו שנקרא camel case (גב גמל)
//דוגמא: myNumber

console.log('*****************');

//בשונה ממה שבדקנו למעלה בנושא ההשוואה אנחנו עכשיו נראה איך עושים כדי לבדוק אם זה לא שוה
//! כדי לבדוק אם המספר הראשון לא שווה למספר השני צריך לשים סימן קריאה
//דוגמא:
console.log(3 * 3 === 9); //true 
//אם זה שווה גם מבחינת ערך וגם מבחינת סוג

console.log(3 * 3 !== 9); //false //לא שווה

console.log(3 * 3 == 9); //true 
//אם זה שווה רק מבחינת ערך

console.log(3 * 3 != 9); //false

console.log('*****************');

//אופרטורים לוגים גדול מ או קטן מ
//גדול מ>
console.log(3 > 2); //true

//קטן מ <
console.log(3 < 2); //false

//אפשר לבדוק אם המספר הזה לא גדול ולא קטן עי הוספת סימן קריאה אך הדבר הזה לא חוקי
//console.log(3 !< 2);

//כדי לבדוק אם הוא או גדול או שווה נעשה את זה ככה 
console.log(3 >= 3); //true
console.log(3 <= 3); //true
//מספיק שאחד מהסימונים נכון נקבל true
//זה נועד למספרים בלבד

//הדבר הזה בודק נטו אם הוא  
//גדול מ
//קטן מ
//גדול או שווה
//קטן או שווה

//לא בודק סוג
//<== הדבר הזה לא יעבוד

console.log('*******************');

var isok = 10;
console.log(isok == "10"); //אם הוא שווה
console.log(isok != "10"); //אם לא שווה

console.log(isok === "10");
console.log(isok !== "10");

console.log('****************');

// operators &&
console.log(3 > 2 && 10 > 4); //true
//false או true אנחנו מקבלים רק תשובה אחת 
// true אם שתיהם נכונים נקבל 

console.log(3 > 2 && 10 > 58); //false
// false אם רק אחד מיהם נכון נקבל 

// operators ||
console.log(3 > 2 || 10 > 58); //true
// true בפעולה הזאת מספיק שאחד מהם נכון נקבל 
// false שתיהם לא נכונים נקבל 
console.log(3 < 2 || 10 < 4); //false

console.log('***************');
console.log('***variables***');
console.log('***************');

//camelCase
//השמה
var tenPlusFiveMultiplyByTwo = 10 + 5 * 2;

//אפשר ליצור משתה ואז לבצע השמה
var tenPlusFiveMultiplyByTwo;
tenPlusFiveMultiplyByTwo = 10 + 5 * 2;

//כדי ליצור כמה משתנים בפעם אחת נעשה את זה בצורה הבאה
var x, y, z

x = 6;
y = 7;
z = 8;
console.log(x, y, z);

//ככה גם יעבוד אבל לא עושים את זה בצורה הזאת
var x = 6, y = 7, z = 8;
console.log(x, y, z);

// typeof כדי לקבל איזה סוג יש לנו משהו שנקרא 
var myName = "john";
console.log(typeof myName);

//אם נעשה את זה למשתנה שהצרנו מספר מבחינתו מספר זה מספר גם אם זה מספר עשרוני
var fullNumber = 10;
var floatingNumber = 10.5;

console.log(typeof fullNumber);
console.log(typeof floatingNumber);






























