// 1 keşke fonksiyonların ne yapacağını tam olarak belirtseymiş, neyse buradaki amaç obje oluşturma antremanı olduğu için şimdilik böyle bırakıyorum.
let personAccount ={
    firstName:"",
    lastName:"",
    incomes:"",
    expenses:"",
    totalIncome: function()
    {

    },
    totalExpense: function()
    {

    },
    accountInfo: function()
    {
        
    },
    addIncome: function()
    {

    },
    addExpense: function()
    {

    },
    accountBalance: function()
    {

    }
}

////////////////////////////////////////////////////////////
const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
    ];

    const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  }
]
// 2a (Anladığım kadarı ile bir üye olma simülasyonu istiyor. Eğer üye zaten varsa ZINK diye zaten var diyeceğiz)
function signUp(id,password,email)
{
    for(let i in users)
    {
        if(id==users[i]._id || email==users[i].email)
        {
            return "ZINKullanıcı zaten var."
        }
        else
        {
            id = prompt("id: ");
            email = prompt("email: ");
            password = prompt("password: ");
        }
    }
}

// 2b

function signIn(a,b)
{
    let msg="Yanlış bilgi girdiniz";
    for(let i=0; i<users.length; i++)
    {
        if(a==users[i]._id && b==users[i].password)
        {
            msg=("hoşgeldiniz");
            break;        
        }
       
    }
    return console.log(msg);
}
signIn('zwf8md','123111');

// 3a burda ne istendiğini tam anlayamadığım için producttaki ratingslerin rate'lerinin ortalmasını döndüreceğim.
let a,b,c;
function rateProduct(number)
{
    if(number==0)
    {
        a=products[number].ratings[number+1].rate;
        b=products[number].ratings[number].rate;        
        c=a+b/2;
        return c
    }
    if(number==1)
    {
        return console.log("no ratings");
    }
    if(number==2)
    {
        return products[number].ratings[0].rate;
    }
    
}
console.log(rateProduct(1));

// 3b ben yalnışlıkla 3b'de yapmam gerekeni 3a'da yapmışım :D ingilizcem yetmediği için saldım orayı :D

// like olup olmadığını kontrol edeceğim, eğer yoksa like ekleyeceğim.

const likeProduct = (name) => {
    control = false;
    for (let i = 0; i < products.length; i++) {
        if(name.toLowerCase()===products[i].name.toLowerCase())
        {
            console.log(`There is a ${name}!`)
            if(products[i].likes.length===0)
            {
                chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz"
                for (let j = 0; j < 6; j++) {
                    products[i].likes.push(chars[Math.floor(Math.random*chars.length)]);
                control = true;    
                }
            }
            else
            {
                console.log("It has been liked!")
                control = true;
            }
        }       
    }
    if(control==false)
    {
        console.log(`There isnt a ${name}`)
    }
}

likeProduct("Laptop");
// arkadaşlar bu konuda felaket burnout oldum bunun çözümlerii daha sonra gözden geçiririz.

