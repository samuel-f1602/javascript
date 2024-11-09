///////////////////////// שיעור 4 /////////////////////
//////////////////////// switch case /////////////////
//breake; case חייבים לרשום בסוף ה switch case ב
//בעצם זה נוצר כדי לא לבדוק את שאר האופציות לדוגמא אנחנו מבקשים מלקוח לבחור יום ולפי הבחירה של הלקוח זה ידפיס לו הודעה וזה לא יבקש ממנו עוד שאלות

const day = Number(prompt("enter day"));
switch (day) {
    case 1:
        console.log("this is sunday and...");
        break;

    case 2:
        console.log("this week has just begun");
        break;

    case 3:
        console.log("the middle of the week");
        break;
    //כדי לעשות את אותה תשובה לשתי תשובות
    case 4: case 5:
        console.log("almost weekend");
        break;

    case 6: case 7:
        console.log("have a nice weekend");
        break;
    default:
        console.log("only 7 days....");
}
