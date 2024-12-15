const sentence = 'The quick brown fox jumps over the lazy dog.';

//כמות האיברים כולל רווחים
console.log(sentence.length); //number of characters

//הגדלה של האותיות לאותיות גדולות
console.log(sentence.toUpperCase()); //all uppercase

//הקטנהה של האותיות לאותיות קטונות
console.log(sentence.toLowerCase()); //all lowercase

//'brown' מיקום של המילה
console.log(sentence.indexOf('brown')); //index of the word 'brown'

//'brown' מיקום של המילה האחרונה
console.log(sentence.lastIndexOf('brown')); //last index of the word 'brown'

//חותך ונותן לנו את מה שרשום מהאינדקס ה4 ל11
console.log("slice: ", sentence.slice(4, 11)); //slice from index 4 to 11

//לא דיסטרקטובי
console.log(sentence);

// 'string' רק שנעדיף להשתמש בו ב sliceכמו ה
console.log("substring: ", sentence.substring(4, 11)); //substring from index 4 to 11 //quick b


const name1 = "gilad";
const name2 = "israel";

//hello + gilad & israel

//op1
console.log("hello " + name1 + " & " + name2);

//op2
console.log(`hello ${name1} & ${name2}`); //string literals

// 'string'ב 'string' החלפת 
console.log(sentence.replace('quick', 'slow'));

//אחר 'string'ב 'string'להחליף את כל אותו ה
console.log(sentence.replaceAll('brown', 'red'));








