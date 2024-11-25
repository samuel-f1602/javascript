console.log("******* ex *******");
console.log("***** jsהדפסה מ ****");

const title1 = "hello1"
document.write("<h1>" + title1 + "</h1>")
const paragraph1 = "hi everybody 1"
document.write("<p>" + paragraph1 + "</p>")

const title2 = "hello2"
document.write("<h1>" + title2 + "</h1>")
const paragraph2 = "hi everybody 2"
document.write("<p>" + paragraph2 + "</p>")

const title3 = "hello3"
document.write("<h1>" + title3 + "</h1>")
const paragraph3 = "hi everybody 3"
document.write("<p>" + paragraph3 + "</p>")

const title4 = "hello4"
document.write("<h1>" + title4 + "</h1>")
const paragraph4 = "hi everybody 4"
document.write("<p>" + paragraph4 + "</p>")

console.log("\n******* htmlהדפסה מ *******");

const title5 = document.getElementById("title-ex1");
console.log(title5.innerHTML);
const paragraph5 = document.getElementById("p-ex1")
console.log(paragraph5.innerHTML);


const title6 = document.getElementById("title-ex2");
console.log(title6.innerHTML);
const paragraph6 = document.getElementById("p-ex2")
console.log(paragraph6.innerHTML);

const title7 = document.getElementById("title-ex3");
console.log(title7.innerHTML);
const paragraph7 = document.getElementById("p-ex3")
console.log(paragraph7.innerHTML);

const title8 = document.getElementById("title-ex4");
console.log(title8.innerHTML);
const paragraph8 = document.getElementById("p-ex4")
console.log(paragraph8.innerHTML);