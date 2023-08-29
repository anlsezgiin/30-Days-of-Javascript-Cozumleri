/////////////////////// 1 ///////////////////////
let chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
let randomChars = "";
for (let i = 0; i < 8; i++) {
    let random = Math.floor(Math.random() * chars.length);
    randomChars += chars[random];
}
console.log(randomChars);

///////////////////////// 2 ////////////////////////
let randomChars1 ="";
for (let j = 0; j < 6; j++) {
    let random1 = Math.floor(Math.random() * chars.length);
    randomChars1 += chars[random1];
}
console.log(`#${randomChars1}`);

////////////////////////// 3 /////////////////////////
let r = "";
let g = "";
let b = "";
for (let a = 0; a < 256; a++) {
    let random2 = Math.floor(Math.random() * 256);
    let random3 = Math.floor(Math.random() * 256);
    let random4 = Math.floor(Math.random() * 256);
    r = random2;
    g = random3;
    b = random4;
}
console.log(`rgb(${r},${g},${b})`);

////////////////////////// 4 //////////////////////////
const countries= ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"];
const newCountries = new Array();
for (let j = 0; j < countries.length; j++) {
    let random5 = Math.floor(Math.random() * (countries.length));
    newCountries[j]=countries[random5];
}
console.log(newCountries);

///////////////////////// 5 /////////////////////////////
const countriesLength = new Array();
for (let j = 0; j < countries.length; j++) {
    countriesLength[j]=countries[j].length; 
}
console.log(countriesLength);

////////////////////////// 6 ///////////////////////////////
const sayilar=[7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5];
const kisaltmalarDizi=new Array();
const karisikDizi=new Array();
for (let o = 0; o < countries.length; o++) {
    kisaltmalarDizi[o]=countries[o].slice(0,3);
}
console.log(kisaltmalarDizi);
for (let x = 0; x < countries.length; x++) {
    karisikDizi.push([countries[x], countries[x].slice(0, 3), countries[x].length])
}
console.log(karisikDizi);

///////////////////////////// 7 ////////////////////////////
const landArray=new Array();
for (let i = 0; i < countries.length; i++) {
    if(countries[i].includes("LAND")==true)
    {
        landArray.push(countries[i]);
    }   
}
console.log(landArray);

///////////////////////////// 8 //////////////////////////////
const iaArray=[];
for (let i = 0; i < countries.length; i++) {
    if(countries[i].includes("IA")==true)
    {
        iaArray.push(countries[i]);
    }   
}
console.log(iaArray);

/////////////////////////// 9 //////////////////////////////////
let longestCountry="";
for (let i = 0; i < countries.length-1; i++) {
    if(countries[i].length>countries[i+1].length)
    {
        longestCountry=countries[i];
    }   
}
console.log(longestCountry);

////////////////////////// 10 ////////////////////////////
let fiveCountry=[];
for (let i = 0; i < countries.length; i++) {
    if(countries[i].length==5)
    {
        fiveCountry.push(countries[i]);
    }
    
}
console.log(fiveCountry);