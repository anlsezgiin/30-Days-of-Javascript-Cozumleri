let a ='Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(a.split(","));

let b = "JavaScript";
console.log(b.replace("JavaScript" ,"30 Days Of Python"));

let c = "JavaScript'in 30 Günü";
console.log(c.charAt(15));
console.log(c.charCodeAt("J"));
console.log(c.indexOf("a")); // ilk a nerede var ise onun konumunu veriyormuş.
console.log(c.lastIndexOf("a"));
console.log(c.match("a")); // a'nın tüm bulunduğu indeksi veriyor. (kelime bazında).

let d = "Bir cümleyi çünkü ile bitiremezsiniz çünkü çünkü bir bağlaçtır.";
console.log(d.indexOf("çünkü"));
console.log(d.lastIndexOf("çünkü"));
console.log(d.search("çünkü")); // search ile indexOf'un farkı ne acaba?
console.log(d.trim()); // cümlenin başındaki ve sonundaki boşlukları siliyormuş.
console.log(d.startsWith("Bir")); // başlangıç kelimesinin doğruluğu hakkında true veya false bilgi döndürüyormuş.
console.log(d.endsWith("bağlaçtır.")); // bu da aynısının bitişi olanı.

let e = "30 Days Of" , f = " JavaScript";
console.log(e.concat(f));
console.log(e.repeat(2));