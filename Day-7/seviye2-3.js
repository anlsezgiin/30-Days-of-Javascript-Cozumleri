// 1 (çaktırmayın çok anlayamadım bunu.)
printArr = (arr) => {
    arr.forEach(function (ar) {
        console.log(ar);
    })
}
printArr([3, 4, 5])

// 2 (yaşlanmışım denklem çözümünu unutmuşuz )
function solveQuadEquation(a,b,c)
{
    const discriminant = b * b - 4 * a * c;
    if (discriminant < 0) {
        return "No real roots";
    } else if (discriminant === 0) {
        const root = -b / (2 * a);
        return [root];
    } else {
        const sqrtDiscriminant = Math.sqrt(discriminant);
        const root1 = (-b + sqrtDiscriminant) / (2 * a);
        const root2 = (-b - sqrtDiscriminant) / (2 * a);
        return [root1, root2];
    }
}
console.log(solveQuadEquation(1,4,4));

// 3
const array = [1,2,3,4,5];
function printArray(array1)
{
    for (let i = 0; i < array1.length; i++) {
        console.log(array1[i]);
        
    }
}
printArray(array);

// 4
function showDateTime()
{
    let a=new Date();
    let day=a.getDate();
    let month=a.getMonth();
    let year=a.getFullYear();
    let hours=a.getHours();
    let minutes=a.getMinutes();
    console.log(`${day}/${month}/${year} ${hours}:${minutes}`);
}
showDateTime();

// 5
function swapValues(a,b)
{
    let x = b;
    let y= a;
    console.log(x,y);
}

// 6
let x=[1,2,3,4,5];
function reverseArray(array)
{
    return array.reverse();
}
console.log(reverseArray(x));

// 6
capitalizeArr = (arr) => {
    let newArr = [];
    arr.forEach(function (ar) {
        newArr.push(ar.toUpperCase());
    })
    return newArr;
}
capitalizeArr(["john", "mike"]);

// 7
removeitem = (index) => {
    let names = ["john", "mike"]
    names.splice(index);
    return names
}
removeitem(1);

 //8
sumOfNumbers = (...args) => {
    let sum = 0;
    args.forEach(function (arg) {
        sum += arg
    })
    return sum;
}
sumOfNumbers(1, 2, 3, 4)

//9
sumOfEven = (...args) => {
    let evenSum = 0;
    args.forEach(function (arg) {
        if (arg % 2 === 0) {
            evenSum += arg
        }
    })
    return evenSum;
}
sumOfEven(1, 2, 3, 4)

//10
sumOfOdd = (...args) => {
    let oddSum = 0;
    args.forEach(function (arg) {
        if (arg % 2 === 0) {
            oddSum += arg
        }
    })
    return oddSum;
}
sumOfOdd(1, 2, 3, 4)

//11
evenAndOdds = (num) => {
    let odd = 0;
    let even = 0;
    for (let i = 0; i <= num; i++) {
        if (i % 2 === 0) {
            even++
        } else if (i % 2 !== 0) {
            odd++
        }
    }
    return `the number of odds are ${odd} \n the number of even are ${even}`
}
evenAndOdds(100)

//12
sum = (...args) => {
    let sum = 0;
    args.forEach(function (num) {
        sum += num;
    })
}
sum(1, 2, 3)

//13
generateRandomIp = () => {
    let one = Math.floor(Math.random() * 255);
    let two = Math.floor(Math.random() * 255);
    let three = Math.floor(Math.random() * 255);
    let four = Math.floor(Math.random() * 255);
    return `IP: ${one}:${two}:${three}:${four}`
}
generateRandomIp();

generateRandomMacAdd = () => {}

//14
generateRandomHex = () => {
    let chars = "0123456789ABCDEF";
    let hex = "";
    for (let i = 0; i <= 6; i++) {
        hex += chars[Math.floor(Math.random() * chars.length)];
    }

    return `#${hex}`
}
generateRandomHex();

//15
generateUserId = () => {
    let chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
    let userId = "";
    for (let i = 0; i <= 7; i++) {
        userId += chars[Math.floor(Math.random() * chars.length)];
    }
    return userId;
}
generateUserId();

//16
userIdGeneratedByUser = () => {
    let chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
    let noId = Number(prompt("how many id do you want to generate"));
    let noChars = Number(prompt("in how many chars"));
    let ids = [];
    for (i = 0; i < noId; i++) {
        ids[i] = "";
        for (k = 0; k < noChars; k++) {
            ids[i] += chars[Math.floor(Math.random() * chars.length)];
        }
    }
    console.log(ids)
    ids.forEach(function (id) {
        console.log(id);
    })
}
userIdGeneratedByUser();

// 17
rgbColorGnerator = () => {
    let one = Math.floor(Math.random() * 255);
    let two = Math.floor(Math.random() * 255);
    let three = Math.floor(Math.random() * 255);
    return `rgb(${one},${two},${three})`;
}
rgbColorGnerator();

// 18
arrayOfHexaColors = () => {
    let chars = "0123456789ABCDEF";
    let hex = [];
    for (let k = 0; k < 3; k++) {
        hex[k] = "#";
        for (let i = 0; i < 6; i++) {
            hex[k] += chars[Math.floor(Math.random() * chars.length)];
        }
    }

    return hex;
}
arrayOfHexaColors();

// 19
generateColors = (type, arrLength) => {
    let chars = "0123456789ABCDEF";
    let colors = [];
    if (type === "rgb") {
        for (i = 0; i < arrLength; i++) {
            colors[i] = "rgb";
            colors[i] += `(${ Math.floor(Math.random() * 256) },`;
            colors[i] += `${ Math.floor(Math.random() * 256) },`
            colors[i] += `${ Math.floor(Math.random() * 256) },)`
        }
    } else if (type === "hex") {
        for (let i = 0; i < arrLength; i++) {
            colors[i] = "#";
            for (k = 0; k < 6; k++) {
                colors[i] += chars[Math.floor(Math.random() * chars.length)];
            }
        }
    }
    return colors;
}
generateColors("rgb", 3);

// 20
shuffleArray = (arr) => {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let rand = Math.floor(Math.random() * arr.length - 1);
        if (arr.indexOf(rand) !== -1 && !newArr.includes(arr[rand])) {
            newArr.push(arr[rand]);
        }
    }
    return newArr
}
shuffleArray([1, 2, 3]);

// 21
factorial = (num) => {
    let factorial = 1;
    for (let i = num; i > 0; i--) {
        // if (i === 0) {
        //     break;
        // }

        factorial *= i;
    }
    return factorial;
}
factorial(5);

// 22
isEmpty = (val) => {
    if (val === undefined) {
        return `it's empty`
    } else {
        return `not empty`
    }
}
isEmpty()

// 23
sum = (...args) => {
    let sum = 0;
    args.forEach(function (arg) {
        sum += arg
    })
    return sum;
}
sum(1, 2, 3, 4);

//24
sumOfArrayItems = (arr) => {
    let sum = 0;
    arr.forEach(function (ar) {
        if (typeof ar === "number") {
            sum += ar
        } else {
            sum = `it's a string`
        }
    })
    return sum;
}
sumOfArrayItems([1, 2, 3])

//25
average = (arr) => {
    let sum = 0;
    arr.forEach(function (ar) {
        if (typeof ar === "number") {
            sum += ar;
            sum = arr.length / sum;
        } else {
            sum = `it's a string`;
        }
    })
    return sum;
}
average([1, 2, 3]);

//26
modifyArray = (arr) => {
    if (arr.length >= 6) {
        for (let i = 0; i < arr.length; i++) {
            if (i = 5) {
                arr.splice(5)
            }
        }
        return arr
    } else {
        return `item not found`
    }
}
modifyArray([1, 2, 3]);

//27
isPrime = (num) => {
    for (let i = 2; i < num; i++) {
        if (num % i === 0 && num > 1) {
            return `${num} is a prime number`;
        } else {
            return `not prime`
        }
    }
}
isPrime(5);

//28
reverseCountries = () => {
    let countries = ["nigeria", "U.S.A", "italy", "canada", "lebanon"];
    return countries.reverse();
}
reverseCountries();

