const now = new Date();
console.log(now);
console.log(typeof now);
console.log(now.toString());


//year, month, day, time
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDay());

//תאריך בזמן אמת
console.log(now.toLocaleDateString());
//שעה בזמן אמת
console.log(now.toLocaleTimeString());


console.log(new Date('february 1 2022'));
console.log(new Date('2008-05-13'));


//html להציג שעון רץ בזמן אמת על ה
setInterval(() => {
    const time = document.getElementById("iTime");
    time.innerHTML = new Date().toLocaleTimeString();
}, 1000);


//יופיע השעה לא משנה באיזה מסך יופיע שעון של 24 שעות
setInterval(() => {
    const time = document.getElementById("time1");
    time.innerHTML = new Date().toLocaleTimeString({ hour12: false });
}, 1000);

//שעון של מקום אחר בעולם

//console.log(parisTime.toLocaleTimeString());

setInterval(() => {
    const parisTime = new Date();
    parisTime.setHours(parisTime.getHours() - 1);
    const newTime = document.getElementById("pTime");
    newTime.innerHTML = parisTime.toLocaleTimeString();
}, 1000)


setInterval(() => {
    const germanyTime = new Date();
    germanyTime.setHours(germanyTime.getHours() - 1);
    const el = document.getElementById("gTime");
    el.innerHTML = germanyTime.toLocaleTimeString();
}, 1000)

setInterval(() => {
    const mexicoTime = new Date();
    mexicoTime.setHours(mexicoTime.getHours() - 7);
    const el = document.getElementById("mTime");
    el.innerHTML = mexicoTime.toLocaleTimeString();
}, 1000)



