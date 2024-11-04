const Name1 = +prompt("please enter your name:")
const days = +prompt("hello" + Name1 + "please enter the number of days do you want to stay:")
const pricePerDay = 100;
const priceOfBreakfast = 30;
let total = days * pricePerDay;

console.log(Name1 + " you will stay for " + days + " days and the total price is " + total + "$");

const breakfast = prompt("do you want to have breakfast for " + "days? (yes/no)");
if (breakfast === "yes") {
    //total = total + totalbreakfast;
    total += days * priceOfBreakfast;
} else if (breakfast === "no") {
    console.log("you don't want breakfast");

}

console.log(Name1 + " you will stay for " + days + " days and the total price is " + total + "$");


console.log("*****************************");


const name2 = +prompt("please enter your name:");
const alone = +prompt("i have a qustion" + name2 + "you come alone?" + "(yes/no)");

if (alone === "no") {
}
const many = +prompt("how many people ?");

if (many === 2) {
}
const option = +prompt("i have two option for you:" +
    "option - 1: sweety couple - the price is 200₪ per" +
    "option - 2: couple suit - the price is 300₪ per" + "(option1/option2)")

if (option === 2) {
}
const night = +prompt("how many night you want")

if (night === 2) {
}
const resume = +prompt("i resume the price for the two night for 2 personne in the couple suit is 600₪ " + "do you want to add breakfast for 30₪" + ("yes/no"));

if (resume === "yes") {
}
const breakfast2 = +prompt("total price of your reservation is 720₪ are you accepted")

if (breakfast2 === "yes") {
}
const thanks = console.log("thanks for you reservation");


