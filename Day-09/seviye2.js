const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand',"England",'Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand',"England",'IceLand',"England"] // 5. soru için fazladan ülke ekledim.
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
const totalPriceOfProducts = products.map(product => product.price).filter(price => typeof price === 'number').reduce((acc, cur) => acc+cur, 0)
console.log(totalPriceOfProducts);

// 2
const sumOfProduct = products.reduce((acc,cur)=>acc + Number(cur.price),0);
console.log(sumOfProduct);

// 3
function categorizeCountries(countries) {
    const patterns = {
      'land': [],
      'ia': [],
      'island': [],
      'stan': []
    }};

// 4 yemin ederim hiç bir şey anlamadım cümleden, üzgünüm dostum.

// 5
const getFirstTenCountries = (countries) => {
     let firstTen=countries.slice(0,10);
     return firstTen;
}
console.log(getFirstTenCountries(countries));

// 6
const getLastTenCountries = (countries) => {
    let lastTen=countries.slice(countries.length-10,countries.length);
    return lastTen;
}
console.log(getLastTenCountries(countries));

// 7 bundanda hiç bir şey anlamadım benim ingilizcemi geliştirmem lazım :D


