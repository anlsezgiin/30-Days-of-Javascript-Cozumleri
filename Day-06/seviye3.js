////////////////////////////// 1 /////////////////////////////
const countries = [
    'Japan',
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
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
  ]
  
  const mernStack = ['MongoDB', 'Express', 'React', 'Node']
///////////////////////////////// 2 ////////////////////////////////
const nCountries=[];
for (let i = 0; i < countries.length; i++) {
    nCountries[i] = countries[i];    
}
nCountries.sort();
console.log(nCountries);

// 3
webTechs.sort();
mernStack.sort();

// 4
const landArray=[];
for (let i = 0; i < countries.length; i++) {
    if(countries[i].includes("land"))
    {
        landArray.push(countries[i]);
    }    
}
console.log(landArray);

// 5
let longestC="";
for (let k = 0; k < countries.length; k++) {
    
    if(countries[k].length>longestC.length)
    {
        longestC=countries[k];    
    }
}
console.log(longestC);

// 6 4 karakterli ülke olmadığı için 7 karakterli ülkeleri yazdırdım.
for (let i = 0; i < countries.length; i++) {
    if(countries[i].length==7)
    {
        console.log(countries[i]);
    }
    
}
// 7de istenilen parametreler yok.

// 8
let reverseArray=[];
reverseArray=countries.sort().reverse().toString();
console.log(reverseArray.toUpperCase());
