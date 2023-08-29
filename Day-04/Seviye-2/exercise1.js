let a = prompt("Enter your note ");
let harfNotu;
if(a<50)
{
    harfNotu = "F";
}
else if(a<60)
{
    harfNotu = "D";
}
else if(a<70)
{
    harfNotu = "C"
}
else if(a<90)
{
    harfNotu = "B"
}
else
{
    harfNotu ="A"
}
console.log(`Your note is: ${harfNotu}`);