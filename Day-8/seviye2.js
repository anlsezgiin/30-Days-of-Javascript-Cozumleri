const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }
  
// 1
let winner;
let max ="0";
for (const i in users) 
{ // bu for döngüsü kullanımı obje üzerinde sırayla gezinmeye yazar yani önce Alex'e sonra Asab'a sırayla bakar.
    if (users[i].skills.length > max) {
        max = users[i].skills.length;
        winner = i;
    }
}
console.log(winner);

// 2
let loggedInUsers=0;
let greater50 =0;
for(const x in users)
{
    if(users[x].isLoggedIn==true)
    {
        loggedInUsers++;
    }
    if(users[x].points>=50)
    {
        greater50++;
    }
}
console.log(loggedInUsers, greater50);

// 3 MERN Stack olan kişileri bul
const mernStack=["MongoDB", "Express","React","Node"];
const mernStackDevelopers=[];
for(const i in users)
{
    if(users[i].skills.includes("MongoDB")==true && users[i].skills.includes("Express") && users[i].skills.includes("React") && users[i].skills.includes("Node"))
    {
        mernStackDevelopers.push(i);
    }
}
console.log(mernStackDevelopers);

// 4 
const copyUsers = Object.assign(users);
copyUsers.Anıl={
    email: 'anlsezgin3@gmail.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Unix'],
    age: 21,
    isLoggedIn: false,
    points: 999999999999999 // :D
}
console.log(copyUsers);

// 5

console.log(Object.keys(users));

// 6

console.log(Object.values(users));

// 7

let country = {
    name: "Türkiye",
    capital: "Ankara",
    population: "81 milyon",
    languages: ["Türkçe"]
}

console.log(`${country.name}\n${country.capital}\n${country.population}\n${country.languages}`)