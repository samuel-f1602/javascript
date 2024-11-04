/////////////////////////// שיעור 3 //////////////////////////

//תנאי זה אם המספר גדול זה יתן לי תשובה אחת  ואם המספר קטן תשובה אחרת
const number1 = +prompt("please enter a number1:")
const number2 = +prompt("please enter a number2:")

//אם ההמספר הראשון גדול מהמספר השני תדפיס לי שהוא גדול ממנו
number1 > number2 && console.log(number1 + " is bigger than" + number2);

//אם ההמספר הראשון קטן מהמספר השני תדפיס לי שהוא קטן ממנו
number1 < number2 && console.log(number1 + " is smaller than" + number2);

//אם ההמספר הראשון שווה מהמספר השני תדפיס לי שהוא שווה ממנו
number1 === number2 && console.log(number1 + " is equal to" + number2);

console.log("*****************************");

//מהמשתמש לבקש שם משתמש וסיסמא 
const user = "samuel55";
const password = "1234";

//לפי השם משתמש וסיסמא להדפיס הודעה
const user1 = prompt("please enter your username:")
const password1 = prompt("please enter your password:")

user1 === user1 && password1 === password && console.log("welcome " + user1);
user1 === user1 && password1 !== password && console.log("wrong username and password");

//צורה נכונה לתנאי
//////////////////////////// condition  /////////////////////////

//                            if else                         //
///////////////////////////////// if ///////////////////////////

function comparenumbers(num3, num4) {
    if (num3 > num4) {
        console.log(num3 + " is bigger than " + num4);
    }

    if (num3 < num4) {
        console.log(num3 + " is smaller than " + num4);
    }

    if (num3 === num4) {
        console.log(num3 + " is equal to " + num4);
    }

}

const number3 = +prompt("please enter a number3:")
const number4 = +prompt("please enter a number4:")

comparenumbers(number3, number4)


////////////////////////// else ///////////////////////////////
//זה בעצם כל תשובה אחרת else
function comparenumbers(num5, num6) {
    if (num5 > num6) {
        console.log(num5 + " is bigger than " + num6);
    }

    if (num5 < num6) {
        console.log(num5 + " is smaller than " + num6);
    }

    else {
        console.log(num5 + " is equal to " + num6);
    }

}

const number5 = +prompt("please enter a number5:")
const number6 = +prompt("please enter a number6:")

comparenumbers(number5, number6)

//כדי לא להעמיס על הקוד עושים את זה בצורה הבאה
//לא בהכרח מתאים לכל סיטואציה
//function comparenumbers(num5, num6) {
//if (num5 > num6) {
//console.log(num5 + " is bigger than " + num6);
//}

// *else* if (num5 < num6) {
//console.log(num5 + " is smaller than " + num6);
//}

//else {
//console.log(num5 + " is equal to " + num6);
//}

//}

//const number5 = +prompt("please enter a number5:")
//const number6 = +prompt("please enter a number6:")

//comparenumbers(number5, number6)

//exercise -->