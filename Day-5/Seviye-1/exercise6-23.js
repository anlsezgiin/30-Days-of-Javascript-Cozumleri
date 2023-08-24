let itCompanies = ["Facebook", "Google","Amazon", "Apple","Samsung"];
console.log(itCompanies);
console.log(itCompanies.length);
console.log(itCompanies[0],itCompanies[2],itCompanies[4]);
console.log(itCompanies[0].toUpperCase()); // bunu diğerlerinede uygulamanızı istiyor ben yapmadım.
console.log(itCompanies.toString());

if(itCompanies.includes("Facebook")==true) // bunu farklı yaparsanız else bloğunu çalıştırabilirsiniz.
{
    console.log("Facebook");
}
else
{
    console.log("not found");
}

// 14. soru için döngü kullanmak gerekli göstermedikleri için kullanmadan sadece Facebook örneği üzerinden yapacağım.
if(itCompanies[0].includes("oo")==true)
{
    console.log("2 den fazla o harfi içerir.");
    // for döngüsü kullansaydık her birini tek tek inceleyip farklı bir diziye atayabilirdik ancak burada kullanmak doğru olmaz. İsterseniz döngüleri öğrendikten sonra dönüp yapabilirsiniz.
}
else
{
    console.log("ikiden fazla o harfi içermez.");
}

console.log(itCompanies.sort());
console.log(itCompanies.reverse());
console.log(itCompanies.slice(0,3));
console.log(itCompanies.slice(2,5));
console.log(itCompanies.slice(2,3));
itCompanies.shift();
console.log(itCompanies);
itCompanies.splice(1,2);
console.log(itCompanies);
itCompanies.pop();
console.log(itCompanies);
itCompanies.pop();
console.log(itCompanies);
