let bornDate = Number(prompt("Doğum tarihinizi giriniz:"));
let a = new Date();
let year = a.getFullYear();
let age = year - bornDate;
alert(`Your age is:${age}`);