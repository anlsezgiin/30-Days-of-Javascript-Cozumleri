// ne yapmamız gerekiyor adımlayalım
// Tarih oluşturulup display-date-time class'lı dive yazılacak
// 2020 yazılı span süreli olarak renk değiştirecek
function generateTime(){
let date = new Date();
const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];
let month = date.getMonth();
let monthName = months[month];
let monthDay =  date.getDate();
let year = date.getFullYear();
let hours = date.getHours();
let minutes =  date.getMinutes();
let seconds = date.getSeconds();
if(minutes<10)
{
    minutes = '0'+minutes;
}
if(seconds<10)
{
    seconds = '0'+seconds;
}
let fullDate=`${monthName} ${monthDay},${year} ${hours}:${minutes}:${seconds}`
return fullDate;
}

function getRandomHex(){
    const hexCharecters = '1234567890ABCDEF'

    let generatedHex = '#'

    for(let i=1; i<=6; i++){
        const randomDigit = Math.floor(Math.random()*hexCharecters.length)
        
        generatedHex+=hexCharecters[randomDigit]
    }

    return generatedHex;
}

const span2023 = document.querySelector("span");
const dateHTML = document.querySelector(".display-date-time");

setInterval(()=>
{
    dateHTML.textContent=generateTime();
    span2023.style.color = getRandomHex(); // bu kısıma dikkat etmenizi istiyorum. Kod çalışıyor ancak clean code açısından burda bir terslik var. Araştırmanızı öneririm.

},1000)