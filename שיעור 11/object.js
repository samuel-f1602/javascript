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





