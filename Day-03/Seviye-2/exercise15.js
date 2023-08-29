let a = new Date();
let date = a.getDate();
let month = a.getMonth()+1;
let year = a.getFullYear();
let hours = a.getHours();
let minutes = a.getMinutes();

console.log(`${date}/${month}/${year} ${hours}:${minutes}`);