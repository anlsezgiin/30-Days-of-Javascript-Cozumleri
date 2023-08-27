const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand',"England"]
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]
// 1
// forEach bir dizi elemanlarını sırayla gezmemizi sağlar ve genellikle bu elemanları gezerken bir fonksiyon çalıştırır.
// map bir dizideki değişiklikler yapıp bu değişikliği farklı bir diziye atamamızı sağlar.
// map 3 değer alır: işlemden geçen elemanın değeri, işlemden geçen elemanın indis değeri, işlemden geçen elemanın ait olduğu dizi.
// map değeri olmayan dizilerde işe yaramaz, varsayılan diziyi değiştirmez.
// filter: dizi içerisinde istediğimiz koşullara uyan elamanları bize geri döndürür. Örneğin a ile başlayan kelimleri filtrelemek için kullanılır.
// reduce: reduce() metodu, dizinin her değeri için bir işlev yürütür ve sonunda diziyi tek bir değere düşürür.
// Metodun dönüş değeri ilk parametresi olan accumulator parametresinde saklanır.

// 2
const callback = (n) => n**2;
console.log(callback(10));

const cube = (callback, n) => callback(n)*n;
console.log(cube(callback, 3));

// 3
countries.forEach((element) => console.log(element));

// 4
names.forEach((element)=> console.log(element));

// 5
numbers.forEach((element)=>console.log(element));

// 6
const upperCountries = countries.map((element)=>element.toUpperCase());
console.log(upperCountries);

// 7
const countriesLength=countries.map((element)=>element.length);
console.log(countriesLength);

// 8
const numbersSquare= numbers.map((element)=>element**2);
console.log(numbersSquare);

// 9
const upperNames = names.map((element)=>element.toUpperCase());
console.log(upperNames);

// 10
const productPrices = products.map((product) => product.price)
console.log(productPrices);

// 11
const endWithLand = countries.filter((element)=>element.includes("land"));
console.log(endWithLand);

// 12
const sixLand = countries.filter((element)=>element.length==6);
console.log(sixLand);

// 13
const moreSixLand = countries.filter((element)=>element.length>=6);
console.log(moreSixLand);

// 14
const startWithE = countries.filter(element=>element.startsWith("E")); // Dizide e ile başlayan ülke olmadığı için "England"ı ekledim.
console.log(startWithE);

// 15
const productWithValidPrices = products.filter(product => product.price !== "" && product.price !== " " );
console.log(productWithValidPrices);

// 16
function getStirngLists(arr)
{
  const stringArray = [];
  arr.forEach(el =>{typeof el === 'string'? stringArray.push(el): stringArray}); // korkma, bu bir karar.

    return stringArray;
}

// 17
let sumNumbers = numbers.reduce((accumulator,element)=>accumulator+element,0);
console.log(sumNumbers);

// 18
const sentence = countries.reduce((accumulator, country, index) => {
  if (index === countries.length - 1) {
    return accumulator + "and " + country;
  } 
  else if (index === countries.length - 2) {
    return accumulator + country + " ";
  } 
  else {
    return accumulator + country + ", ";
  }
}, '') + " are north European countries.";

console.log(sentence);

// 19
// some en az bir element gerekli şartı içeriyorsa true döndürürken, every tüm elementler gerekli şartları sağlıyorsa true döndürür.

// 20
const greaterThan = countries.some((element)=>element.length>=7);
console.log(greaterThan);

// 21
const landCheck = countries.every((element)=> element.includes("land"));
console.log(landCheck);

// 22
// find istenilen koşuldaki ilk elemanı döndürür iken, findIndex bu elemanın indexini döndürür.

// 23
const firstCountry = countries.find((element)=>element.length==6);
console.log(firstCountry);

// 24
const firstCountryIndex = countries.findIndex((element)=>element.length==6);
console.log(firstCountryIndex);

// 25
const norwayPosition = countries.findIndex((element)=>element=="Norway"); // Eğer ki Norway dizide olmasaydı -1 döndürecekti.
console.log(norwayPosition);

// 26
const russiaPosition = countries.findIndex((element)=>element=="Russia");
console.log(russiaPosition);