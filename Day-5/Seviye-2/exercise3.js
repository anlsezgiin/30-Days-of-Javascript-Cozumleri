const  shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
if(shoppingCart.includes("Meat")==false)
{
    shoppingCart.unshift("Meat");
}
if(shoppingCart.includes("Sugar")==false)
{
    shoppingCart.push("Sugar");
}
let alerji=true; // bunu dilerseniz kullanıcıya sorabilirsiniz.
if(alerji==true)
{
    shoppingCart.splice(4,1);
}
shoppingCart.splice(3,1,"Green Tea");
console.log(shoppingCart);
