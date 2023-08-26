// 1
let dog = {};

// 2
console.log(dog);

// 3
dog.name="Ceku";
dog.legs=4;
dog.color="Golden";
dog.age=3;
dog.bark=function()
{
    console.log("woof woof!");
}
console.log(dog);

// 4
console.log(Object.values(dog));

// 5
dog.breed = "german shepherd";
dog.getDogInfo = function () {
    console.log(Object.values(this));
}
