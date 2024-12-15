console.log("*** עיצוב אלמנטים ***");

const styleElement = (element) => {
    element.style.backgroundColor = 'red';
    element.style.color = 'white';
    element.style.fontSize = '20px';
    element.style.boxShadow = '3px 6px 12px black';
    element.style.textAlign = 'center';
}

const container = document.getElementById('container');
styleElement(container);

const demo1 = (demo) => {
    demo.style.fontSize = "20px";
    demo.style.backgroundColor = "black";
    demo.style.color = "yellow";
    demo.style.padding = "20px";
    demo.style.margin = "20px";
    demo.style.outline = "1px solid black";
    demo.style.boxShadow = "0px 0px 10px black";
    demo.style.border = "1px solid yellow";
}

const demo1container = document.getElementById("demo1-container");
demo1(demo1container);


const demoex3 = (demo2) => {
    demo2.style.fontSize = "20px";
    demo2.style.backgroundColor = "green";
    demo2.style.color = "yellow";
    demo2.style.padding = "20px";
    demo2.style.margin = "20px";
    demo2.style.outline = "1px solid black";
    demo2.style.boxShadow = "0px 0px 10px black";
    demo2.style.border = "1px solid yellow";
}
const demolog = document.getElementById('demolog')
demoex3(demolog)
console.log(demolog.style.backgroundColor);
console.log(demolog.style.color);
console.log(demolog.style.fontSize);



console.log("\n** יצירת והוספת אלמנטים **");

//html אני שם בסוגריים את שם האלמנט במסמך
const emptyDiv = document.getElementById('empty');
//אני שם בסוגריים את האלמנט שאני רוצה ליצור
const h2 = document.createElement('h2');
//יוצר את התוכן באלמנט
h2.innerText = 'I am h2!!!';
//איפה אני רוצה לשים את האלמנט
//שמתי אותו בדיב
emptyDiv.appendChild(h2);

console.log("**html אופציה להכניס אלמנטים ל **");

//בצורה הבאה bodyאפשר לשים גם ישירות ב
// בלי להשתמש
const emptyDiv2 = document.createElement('div');
document.body.appendChild(emptyDiv2);
const h3 = document.createElement('h3');
emptyDiv.appendChild(h3);
h3.innerText = 'I am h3!!!';


console.log("** ex **");
const divEx = document.getElementById('ex1');
const titleEx = document.createElement('h2');
titleEx.innerText = 'Hola I am the ex';

divEx.appendChild(titleEx);

const styleEx = (whEx1) => {
    whEx1.style.height = '100px';
    whEx1.style.width = '100px';
    whEx1.style.border = '1px solid black';
    whEx1.style.backgroundColor = 'red';
}

const ex1 = document.getElementById('ex1');
styleEx(ex1)

console.log("*ex2*");
const divEx2 = document.getElementById('ex2')
const h4 = document.createElement('h4');
h4.innerText = 'new title';
divEx2.appendChild(h4);

const styleEx2 = (whEx2) => {
    whEx2.style.color = 'skyblue';
    whEx2.style.backgroundColor = 'grey';
    whEx2.style.textAlign = 'center';
}

const ex2 = document.getElementById('ex2');
styleEx2(ex2);


console.log("** ex3 **");
const divEx3 = document.getElementById('ex3');

// יצירת אלמנט קישור (a)
const link = document.createElement('a');

// הגדרת כתובת האתר
link.href = 'https://www.google.com';  // כתובת האתר

// הגדרת מאפיין target לפתיחה בלשונית חדשה
link.target = '_blank';  // פותח את הקישור בלשונית חדשה

// הגדרת הטקסט של הקישור
link.textContent = 'Go to Google';  // הטקסט שיוצג על הקישור

// הוספת הקישור לאלמנט עם ID 'ex3'
divEx3.appendChild(link);
const styleEx3 = (whEx3) => {
    whEx3.style.height = '100px';
    whEx3.style.width = '100px';
    whEx3.style.border = '1px solid black';
}

const ex3 = document.getElementById('ex3');
styleEx3(ex3);


console.log("\n**מחיקת והחלפת אלמנטים **");
const removeBox1 = () => {
    const box1 = document.getElementById('box1');
    document.body.removeChild(box1);
}
//removeBox1()

//אופציה שנייה
const removecontainer2 = () => {
    document.body.removeChild(document.getElementById('container2'));
}
//אם עובדים אם כפתור אין צורך לקרוא לפונקציה בצורה הבאה
//removecontainer2()

const removeItemFromList = () => {
    const list = document.getElementById('list');
    const listItem = list.querySelectorAll('li');
    console.log(listItem);
    const filterList = [];
    listItem.forEach((item) => {
        if (item.innerText === "yes" || item.innerText === "no") {
            filterList.push(item);
        }
    });
    console.log(filterList);


    list.innerHTML = '';
    filterList.forEach((item) => {
        list.appendChild(item);
    });

}

/*

const removeItemFromList = () => {
    const list = document.getElementById('list');
    const listItem = list.querySelectorAll('li');
    console.log(listItem);

    list.innerHTML = '';
    listItem.forEach((item) => {
        if (item.innerText === "yes" || item.innerText === "no") {
        list.appendChild(item);
        }
    });
}
*/



/*
כדי שזה גם ימחק את מה שלא שווה לכן ולא ויצבע לי בירוק מה שכן ויצבע לי באדום מה שלא
const removeItemFromList = () => {
    const list = document.getElementById('list');
    const listItem = list.querySelectorAll('li');
    console.log(listItem);

    list.innerHTML = '';
    listItem.forEach((item) => {
        if (item.innerText === "yes" {
        item.style.color = 'green';
        list.appenchild(item);
        } else if (item.innerText === "no") {
         item.style.color = 'red';
        list.appendChild(item);
        }
    });
}
*/


console.log("\n** events **");
const printSelected = () => {
    const select = document.getElementById('select');
    console.log(select.value);
}

console.log("\n** eventlistener **");
//js דרך select אם יצרתי את 
// נצטרך לעשות את זה בדרך אחרת
//eventlistener
//היא מקבלת שתי פרמטרים
//פרמטר ראשון
//אירוע

//פרמטר שני
//מה יקרה כשיקרה האירוע

const circle = document.querySelector('.circle');

//click=onclick הפרמטר הראשון שזה האירוע 
//הפרמטר השני שזה מה יקרה כשיקרה האירוע שזה
//יקרה שצבע רקע יחליף לכחול בעת לחיצה click
circle.addEventListener('click', (event) => {
    circle.style.backgroundColor = 'blue';
    console.log(event);
    event.target.style.backgroundColor = 'blue';

});
/*
//אם רוצים שעל כל לחיצה יהיה צבע רנדומלי

circle.addEventListener('click', (event) => {
    circle.style.backgroundColor = 'blue';
    console.log(event);
    event.target.style.backgroundColor = `rgb(${Math.ceil(Math.random()*255)},${Math.ceil(Math.random()*255)},${Math.ceil(Math.random()*255)})`

;

});
*/
