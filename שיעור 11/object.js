console.log("******** -objects- ********");

//מפתחות ומערכים
// או מאפיינים 
const car = {
    manafacturer: 'toyota',
    year: 2015,
    model: 'corola',
    color: 'red',
    //נהיה חייבים למקף לשים אותו במרכעות
    "number-of-wheels": 4
};

console.log(typeof car);
console.log(car);

//כדי להדפיס רק דבר אחד באובייקט נעשה נקודה ונרשום את מה שאנחנו רוצים מתוך האובייקט
console.log("model:", car.model);

//אופ 2
console.log("model:", car['model']);

//האופצייה השנייה טובה למקף כי המערכת חושבת שזה מינוס
//כדי שהיא תזהה את זה כסטרינג נשתמש בצורה הבאה
console.log("number-of-wheels:", car["number-of-wheels"]);

console.log("\n******** object methods ********");

const car1 = {
    manafacturer: 'toyota',
    year: 2015,
    model: 'corola',
    color: 'red',
    //נהיה חייבים למקף לשים אותו במרכעות
    "number-of-wheels": 4,

    //אפשר להכניס פונקציה בתוך אובייקט
    //methods
    drive: () => {
        console.log("car is moving");
    },

    stop: () => {
        console.log("car stopped");

    },

    changeYear: (year) => {
        car1.year = year;
    }
};

car1.drive();
car1.stop();
car1.changeYear(2024);

console.log(car1);

console.log("\n********* object - this ******");
//זה מילה שמורה this

const car2 = {
    manafacturer: 'toyota',
    year: 2015,
    model: 'corola',
    color: 'red',
    //נהיה חייבים למקף לשים אותו במרכעות
    "number-of-wheels": 4,

    //אפשר להכניס פונקציה בתוך אובייקט
    //methods
    drive: () => {
        console.log("car is moving");
    },

    stop: () => {
        console.log("car stopped");

    },

    //באובייקט עדיף לעבוד בפונקציה בצורה הישנה ולא פונקציית חץ כי אז תהיה לנו בעיה 
    //לא עובד פונקציה חץ  this ב
    changeYear: function (year) {
        this.year = year;
    },

    changeModel: function (model) {
        this.model = model;
        console.log(this);

    },
};

car2.drive();
car2.stop();
car2.changeYear(2024);
car2.changeModel("camry");
console.log(car2);


console.log("\n********** object & loops ************");


console.log("\n*מפתחות*");
//כדי לקרוא רק למפתחות
for (let key in car) {
    console.log(key); //this will print all the
}


console.log("\n*מאפיינים*");
//כדי לקרוא רק למאפיינים
for (let key in car) {
    console.log(car[key]); //this will print all the
}

console.log("\n********** object for of ************");
/*
 בצורה הרגילה כי הוא עובר ע״פ סדר האינדקסים for of אי אפשר לתת
 ואין לנו פה אינדקסים
for (let key of car) {
console.log(key); //this will print all the
}
*/

//for of ככה נשתמש ב
for (let key of Object.keys(car2)) {
    console.log(key);

}
for (let props of Object.values(car2)) {
    console.log(props);

}
console.log(Object.keys(car2));
console.log(Object.values(car2));

console.log("**object - changing method **");

const character = {
    name: "john",
    level: 1,
    xp: 0,

    raiseXp: function (points) {
        this.xp += points;

        if (this.xp === 10) {
            this.level++;
            this.xp = 0;
            this.print('level');
        }
    },
    print(what) {
        if (what === 'all') {
            console.log(this);
        } else if (what === 'level') {
            console.log("level up:", this.level);

        }
    }
}

character.raiseXp(10);
character.print('all')



