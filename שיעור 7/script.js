console.log("*********hw class***********");

const grades = [80, 85, 40, 100, 60];

function calcStudentGrades() {
    const failed = [];
    const passed = [];
    const excellent = [];

    for (let grade of grades) {
        if (grade <= 69) {
            failed.push(grade);
        } else if (grade >= 70 && grade <= 90) {
            passed.push(grade);
        } else {
            excellent.push(grade);
        }
    }
    console.log('failed:', failed);
    console.log('passed:', passed);
    console.log('excellent:', excellent);

    //כדי שיהיה יותר יפה 
    // console.log(failed.length  + ' students failed');

    //כדי לקבל את הכמות ולא את  הציונים נוסיף
    //console.log('failed:', failed.length);
    //console.log('passed:', passed.length);
    //console.log('excellent:', excellent.length);
}

calcStudentGrades();

console.log("ֿ\n\n********* filter ********");
console.log("*********hw class***********");


function filterStudentGrades() {
    const failed = grades.filter(function (someitem) {
        return someitem <= 69;
    });

    const passed = grades.filter(function (someitem) {
        return someitem >= 70 && someitem <= 90;
    });
    const excellent = grades.filter(function (someitem) {
        return someitem >= 90;
    });

    console.log('failed:', failed.length);
    console.log('passed:', passed.length);
    console.log('excellent:', excellent.length);
}

filterStudentGrades();


console.log("\n\n*********ex********");
//צרו מערך המכיל 5 בעלי חיים
const animals = ['dog', 'cat', 'fish', 'bird', 'snake'];

//סננו מתוך המערך את כל החיות שאורך שמם גדול מ 3
//d סננו מתוך המערך את כל החיות שמתחילות באות 

function moreThree() {
    const above = animals.filter(function (animal) {
        return animal.length > 3
    })
    console.log(above);

    const d = animals.filter(function (item) {
        return item[0] === 'd';
    })
    console.log(d);

}

moreThree();

console.log("\n\n*********foreach********");

const countries = ['israel', 'usa', 'france', 'italy', 'spain',];

// for of איך עושים ב
//for (let country of countries) {
//console.log(country);
//}

// נשים חץ function פונקצית חץ מחליפה את המילה 
//אחרי המשתנה שבחרנו

//for each בא עם פרמטר נוספים כמו מערך ואינדקס
//לא חייב להשתמש בפרמטר השלישי שהוא מערך

/*countries.forEach((country, i, arr) => {
    console.log(i + "- " + country);
    console.log(arr);
    }); */


//זה בעצם שילוב של for in + for of
countries.forEach((country, i) => {
    console.log(i + "- " + country);

});

//0- israel
//1- usa
//2- france
//3- italy
//4- spain

console.log("\n\n********* map ********");
//ככה היינו עושים ב foreach
/* const numbers = [1, 2, 3, 4, 5];
const numbers2 = [];
 
numbers.forEach(num => {
    numbers2.push(num * 100);
    })
    
    console.log(numbers2);
    */
// ככה נעשה ב map
// זה מערך חדש מהמערך הקיים עם תוספת שינוי map
//לדוגמא הכפלה
const numbers = [1, 2, 3, 4, 5];

const numbers2 = numbers.map((num) => {
    return num * 100;
})

console.log(numbers2);
//אפשר לחבר פילטר עם מאפ
/* const numbers2 = numbers.filter(
).map((num) => {
    return num * 100;
})
    */

console.log("\n\n*********ex********");
// צרו מערך המכיל 5 מספרים   
// צרו מערך חדש שבו כל מספר יהיה כפול 10 מהמערך הראשון

// צרו מערך המכיל 10 מספרים
// צרו מערך חדש שבו כל מספר יהיה כפול 100 מהמערך הראשון במידה והוא זוגי

// צרו מערך של 5 ערי בירה
// צרו מערך נוסף בעל מספר איברים זהה ובו שמת של המדינות של ערי הבירה

// צרו מערך חדש מתוך 2 המערכים שבו כל איבר יהיה סטרינג שבו שם המדינה והעיר

console.log("\n\n*********ex1********");

const numbers3 = [100, 200, 300, 400, 500];

const numbers4 = numbers3.map((num1) => {
    return num1 * 10;
})

console.log(numbers4);

console.log("\n\n*********ex2********");

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNumsArray = nums.filter((num) => {
    return num % 2 === 0;
}).map((num) => {
    return num * 100;
});

console.log(newNumsArray);

/* const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

 const newNumsArray = nums.filter((num) => num % 2 === 0;).map((num) => {
    return num * 100;
}); */

// return לא צריך  scope אם אין לנו 
//זה יעבוד לנו רק בשורת קוד אחת

console.log("\n\n*********ex3********");

const capitalEx = ['jerusalem', 'paris', 'berlin', 'london', 'rome'];
const countryEx = ['Israel', 'France', 'Germany', 'England', 'Italy'];

//"jerusalem - israel"
const citiesAndCountries = capitalEx.map((item, i) => {
    return item + ' - ' + countryEx[i];
});
/*"jerusalem - israel"
const citiesAndCountries = capitalEx.map((item, i) => {
    return i + ": "item + ' - ' + countryEx[i];
});*/

console.log(citiesAndCountries);

//כדי שירד שורה בין אחד לאחד
citiesAndCountries.forEach((item) => {
    console.log(item);

})

//כדי שירד שתי שורות בין אחד לאחד
citiesAndCountries.forEach((item) => {
    console.log(item + "\n\n");

})


console.log("*********** reduce *********");

const ages = [31, 44, 45, 42, 37, 26, 21];

const sum = ages.reduce((acc, item) => {
    // האפס זה בעצם הערך הצבור זאת אומרת שהוא מתחיל מ0
    return acc + item;
}, 0);

console.log(sum);

//כדי לקבל את המספר הגבוהה
//const ages = [31, 44, 45, 42, 37, 26, 21];
//const sum = ages.reduce((acc, item) => {
//if(acc > item){
//return acc;
//}else {
//return item;
//}
//}, 0);

//ממוצע
console.log("ages average in our humble class is: " + sum / ages.length);


const heights = [180, 170, 160, 190, 200, 150, 140,]

const highest = heights.reduce((acc, item) => {
    if (item > acc) {
        return item;
    } else {
        return acc;
    }
}, 0);

console.log("the highest student in our humble class is: " + highest);
