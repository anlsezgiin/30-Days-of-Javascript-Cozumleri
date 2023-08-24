let  text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let newText=text.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');
const words = newText.split(" ");

console.log(words);
console.log(words.length);

