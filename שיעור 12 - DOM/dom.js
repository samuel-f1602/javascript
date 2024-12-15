//DOM- Document Object Model
console.log(document);
//הדפסתי את כל מה שמופיע לי במסמך
//javascriptל htmlמחברים בין ה
//שלי html זה נקודת גישה לכל המסמך dom

//לכותרת id נתתי 
//פה אני יוצר משתנה של אותה כותרת ע״י 
//getElementById
const title = document.getElementById('title1');
//פה אני מדפיס את המשתנה שהוא הכותרת שלי
console.log(title.innerHTML);
//scriptאם זה נותן שגיאה נצטרך להוסיף ל
//defer שלנו 
//scriptתלוי איפה שמנו את ה
//לא תהיה לנו בעיה bodyאם שמנו אותו בסוף ה
//headאם שמנו אותו ב
//defer ניתן לו 
//נועד לגרום למסמך לקרוא קודם כל deferה
//js את התגיות ורק אז לקרוא את המסמך 
//javascriptהוא רק ל

console.log("\n*** getElementById ***");
/*
const title = document.getElementById('title');
//אלמנט בודד
console.log(title.innerHTML);
*/

console.log("\n*** getElementByclass ***");
const containers = document.getElementsByClassName('container')
//מערך באלמנטים
console.log(containers);
/*
יכול לחזור class פה הוא מחזיר לי מערך כי 
שהוא ייחודי idעל עצמו בשונה מ
*/
/* 
 ונרצה classאם יש לנו כמה אלמנטים עם אותו 
 לקרוא לאחד מהם בהדפסה נעשה את זה בצורה הבאה 
const container = document.getElementsByClassName('container')
console.log(container[0].innerHTML);
*/
//console.log(container.innerHTML);
//undefined נקבל 
console.log(containers[0].innerHTML);

//יש לנו אופציה שידפיס לנו רק את מה שיש בטקסט בלי התגיות זה נקרא אינרטקסט
console.log(containers[0].innerText);

console.log("\n*** queryselector ***");
const container = document.querySelector('.container');
//פניתי אליו עם נקודה לפני האלמנט cssכמו ב

console.log(container);
//הוא ידפיס לי רק את הראשון
//נועד רק לראשון מביניהם queryselector

const title2 = document.querySelector('#title2');
console.log(title2);
//const container = document.querySelector('#container');
//פניתי אליו עם סולמית לפני האלמנט cssכמו ב

const titleOfContainer = document.querySelector('.container > h1');
console.log(titleOfContainer);


console.log("\n*** queryselector all ***");
const titleOfContainers = document.querySelectorAll('.container > h1');
//פה הוא ידפיס לי כל מי שעומד בקריטריונים
//שהוא רק לראשון queryselector בשונה מ
console.log(titleOfContainers);
//אני יכול לבחוראיזה מהם אני רוצה שהוא ידפיס לי
console.log(titleOfContainers[1]);

console.log("\n**** ex ***");
const printAllListItems = () => {
    const listItems = document.querySelectorAll('li');
    listItems.forEach((item) => {
        console.log(item.innerHTML);

    })
}
printAllListItems();


console.log("\n****** innerHTML ******");
//html אני בעצם לוקח דיב שקיים במסמך 
//jsואני מוסיף לו אלמנטים דרך ה 
/*
const article = document.querySelector('.article');
article.innerHTML = `
<h2>article title</h2>
<p>
loremmmmmmmmmmmmm
</p>`
console.log(article.innerHTML);
console.log(article.innerText);
*/


//פה יצרתי פונקציה בונה לי דיב חדש
const createArticle = () => {
    const article = document.querySelector('.article');
    article.innerHTML = `
    <h2>article title</h2>
    <p>
    loremmmmmmmmmmmmm
    </p>
    
    <h2>article title</h2>
    <p>
    loremmmmmmmmmmmmm
    </p>
    
    <h2>article title</h2>
    <p>
    loremmmmmmmmmmmmm
    </p>
    `
    console.log(article.innerHTML);
    console.log(article.innerText);
}


console.log("\n****** attributes ******");
const article2 = document.querySelector('.article2');
article2.innerHTML = `
<h2>article title</h2>
<p>
loremmmmmmmmmmmmm
</p>`
console.log(article2.innerHTML);
console.log(article2.innerText);

//jsעיצבתי דרך ה
article2.style = 'color: blue; background-color: lightblue; padding: 10px'

//js דרך class שיניתי  
article2.className = 'article3';

//בצורה הזאת זה דורס את הקודם
article2.setAttribute('class', 'article2class')
//בצורה הזאת זה שומר את הקודם ומוסיף חדש
article2.setAttribute('class', 'article2 article2class')

//js דרך id נתתי לו 
article2.setAttribute('id', 'article2Id');

console.log(article2);


