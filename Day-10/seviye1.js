// 1-2-3-4
const bosSet = new Set();
for (let i = 0; i < 10; i++) {
    bosSet.add(i);
}
console.log(bosSet);
bosSet.delete(0);
console.log(bosSet)
bosSet.clear();
console.log(bosSet);

// 5
const sett = ["Anıl","Sezgin"];
const setAnil=new Set(sett);
console.log(setAnil);

// 6
countries = [
    ['Finland', '7'],
    ['Sweden', '6'],
    ['Norway', '6'],
  ]
  const map = new Map(countries)
  console.log(map)
