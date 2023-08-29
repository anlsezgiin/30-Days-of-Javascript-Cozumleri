const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ];
  
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ];
  
  const mernStack = ['MongoDB', 'Express', 'React', 'Node'];

  let i=0;
  while(i<10)
  {
    console.log(i);
    i++;
  }

  /////////////////////////////  2-3  ////////////////////////////////////

  do
  {
    console.log(i);
    i++
  } while(i<10)

  //////////////////////////// 4 ///////////////////////////////////////

let str= "";
for (let i = 0; i < 7; i++) 
{
    str += "#";
    console.log(str);
}

///////////////////////////// 5(biraz fazla mı yapmışız acaba?) //////////////////////////////
let a=0;
let b=0;
for (let a = 0; a <= 10; a++) {
    for (let b = 0; b <=10; b++) {
       c = a*b;
       console.log(`${a}*${b}=${c}`);        
    }   
}

///////////////////////////// 6 //////////////////////////////
let e=0;
let f=0;
let g=0;
console.log("i\ti^2\ti^3");
for (let e = 0; e < 11; e++) {
    console.log((e)+"\t"+(e*e)+"\t"+(e*e*e));
    
}

/////////////////////////// 7-8 ///////////////////////////////////

let ab = 0;
while (ab<101)
{
    if(ab%2==0)
    {
        console.log(ab);
    }
    else
    {
        console.log(ab); //umarım mantığı anlarsın. :)
    }
    ab++;
}
 /////////////////////////// 9 //////////////////////////////////////
 console.log(2);
 console.log(3);
 console.log(5);
 console.log(7);
 for (let sayi = 2; sayi < 101; sayi++) {
   
    if(sayi%2!=0 && sayi%3!=0 && sayi%5!=0 && sayi%7!=0)
   {
    console.log(sayi);
   } 
}
/////////////////////////////////// 10 ////////////////////////////
let toplam = 0;
let say1 = 0;
while (say1<101)
{
    toplam = toplam + say1;
    say1++;
}
console.log(toplam);

///////////////////////////////// 11 //////////////////////////////////
let say2=0;
let tekToplam=0;
let ciftToplam=0;
while(say2<101)
{
    if(say2%2==0)
    {
        ciftToplam=ciftToplam+say2;
        say2++;
    }
    else
    {
        tekToplam=tekToplam+say2;
        say2++;
    }
}
console.log(tekToplam);
console.log(ciftToplam);