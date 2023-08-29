let a = new Date();
let year = a.getFullYear();
let dayFeb=28;
if(year%4==0)
{
    dayFeb=29;
}
// diğer ayların kaç gün olduğuna bakmıyorum. dilerseniz bakabilirsiniz.
let b = prompt("Enter a month: ");
if (b=="February")
{
    console.log(`${b} has ${dayFeb} days`);
}
else
{
    console.log(`${b} has 31 days`);
}