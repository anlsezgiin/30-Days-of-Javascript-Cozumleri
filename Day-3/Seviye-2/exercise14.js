let sec = 60;
let hoursSec= sec * 60;
let daySec = hoursSec * 24;
let monthSec = daySec * 30;
let yearSec = monthSec * 12;
let a = Number(prompt("Enter number of years you live: "));
let secAge = yearSec * a;
alert(`you lived ${secAge} seconds.`)
