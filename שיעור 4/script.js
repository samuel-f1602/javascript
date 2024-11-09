///////////////////////// שיעור 4 /////////////////////
//////////////////////// switch case /////////////////
//breake; case חייבים לרשום בסוף ה switch case ב
//בעצם זה נוצר כדי לא לבדוק את שאר האופציות לדוגמא אנחנו מבקשים מלקוח לבחור יום ולפי הבחירה של הלקוח זה ידפיס לו הודעה וזה לא יבקש ממנו עוד שאלות

//const day = Number(prompt("enter day"));
//switch (day) {
//case 1:
//console.log("this is sunday and...");
//break;

//case 2:
//console.log("this week has just begun");
//break;

//case 3:
//console.log("the middle of the week");
//break;
//כדי לעשות את אותה תשובה לשתי תשובות
//case 4: case 5:
//console.log("almost weekend");
//break;

//case 6: case 7:
//console.log("have a nice weekend");
//break;
//default:
//console.log("only 7 days....");
//}

//switch case  אופציה שניה ל

const days = +prompt("please enter the day (number):")
switch (days) {
    case 1:
        console.log("sunday");
        break;

    case 2:
        console.log("monday");
        break;

    case 3:
        console.log("tuesday");
        break;
    //כדי לעשות את אותה תשובה לשתי תשובות
    case 4:
        console.log("wednesday");
        break;

    case 5:
        console.log("thursday");
        break;

    case 6: case 7:
        console.log("have a nice weekend");
        break;
    default:
        console.log("please enter a valide day");
}


//exercise hotel sport
const uName = prompt("please enter your name:");
const guests = +prompt("hello " + uName + " please enter the number of guests:");
let totalPrice = 0;
let price = 0;

switch (guests) {
    case 1: case 2:
        price = 200;
        totalPrice = guests * price;
        console.log("room for 2 " + "total price is " + totalPrice + "₪");
        break;

    case 3: case 4: case 5:
        price = 100;
        totalPrice = guests * price;
        console.log("room for 5 " + "total price is " + totalPrice + "₪");
        break;
    case 6: case 7: case 8: case 9: case 10: case 11: case 12: case 13: case 14: case 15:
        price = 50;
        totalPrice = guests * price;
        console.log("room for 15 " + "total price is " + totalPrice + "₪");
        break;
}

const nights = +prompt(" please enter the number of nights:");
console.log("you will stay for " + nights + " nights and the total price is " + nights * totalPrice + "₪");

const breakFast = prompt("do you want to have breakfast for " + nights + " nights? (yes/no)")

switch (breakFast) {
    case "yes":
        totalPrice += nights * 30;
        console.log("you will have breakfast for " + nights + " nights and the total price is " + totalPrice + "₪");
        break;
    case "no":
        console.log("you dont want breakfast and the total price is " + totalPrice + "₪");
        break;
    default:
        console.log("we take that as no and the total price is " + totalPrice + "₪");
        break;
}