console.log("****** setInterval ******");


// השהיה אחרי שניה יופיע
//setTimeout(sayHola, 1000);

//כל שנייה
//setInterval(sayHola, 1000);

let count = 0;

const sayHola = () => {
    console.log(count + ' hola');

    document.write("<h1> hola </h1>")
    count++;

    if (count === 5) {
        clearInterval(intervals)
    }
}

//או

/*
let count = 1;
const sayHola = () => {
    console.log(count + ' hola');
    count++;
    if (count > 5) {
        clearInterval(intervals)
    }
}
    */

const intervals = setInterval(sayHola, 1000);

//בעצם פה יצרנו משתנה שיעלה כל פעם באחד 
//יצרנו פונקציה של אינטרבל שזה כל שנייה hola ידפיס לנו 
//יצרנו את המשתנה כדי להדפיס את המשתנה פלוס הפונקציה וכל פעם שהוא מדפיס לנו את הפונקציה הוא מעלה את המשתנה באחד וכשהוא מגיע לפעם החמישית אז הוא יפסיק
//יצרנו את המשתנה כדי להגביל את הפונקציה בכמות פעמים

//זה כדי להדפיס בקונסול את מה שמופיע לנו html במסמך 
const title = document.getElementById("helloTitle");
// כדי שהוא ידפיס לנו .innerHTML הוספנו 
//בדיוק כמו במסמך
console.log(title.innerHTML);

//id אם היינו רושמים רק להדפיס את ה 
//console.log(titel);
//זה היה רושם 
//not defined
//headשלנו הוא ב script  כי ה
//defer נצטרך להוסיף לו 
//<script src="./script.js" defer></script>
//אבל אז הוא היה מדפיס לנו את כל מה שיש לנו head ב
//.innerHTML כדי שלא יקרה אנחנו מוסיפים 
//id ואז נקבל רק את מה שיש לנו בתוך ה 

//exercise
/*כיתבו מאמר דרך קובץ ה-JS
למאמר יהיו 4 כותרות ו 4 פסקאות

ניתן להתחיל עם תגיות ב-HTML או ליצור דרך ה-J */
//במסמך js



