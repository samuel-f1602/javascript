const uName = prompt('שלום, מדברה אנדרואיד, מה השם בבקשה?');

let many;

function aloF() {
    const alone = prompt('יש לי שאלה, ' + uName + ',אתה מגיע לבד?');

    if (alone != 'כן') {
        const many = prompt('כמה אורחים תהיו?');
    } else {

    }
}

aloF()

alert('האופציות שיש לי להציע לך הן: אופציה 1 - זוגי מפנק - עולה 200 ש״ח לאדם אופציה 2 - זוגי סוויטה - עולה 300 ש״ח לאדם');

let roomP;
function rooF() {
    let room = prompt('באיזה אופציה תהיה מעוניין?');

    if (room === '1') {
        roomP = 200;
    } else if (room === '2') {
        roomP = 300;
    }
}

rooF();

let night = prompt('כמה לילות?');

let cost = roomP * many * night;

alert('היי');