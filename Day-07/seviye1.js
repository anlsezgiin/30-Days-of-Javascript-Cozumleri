// 1
function fullName()
{
    console.log("Anıl Sezgin");
}

// 2
function fullName(firstName)
{
    console.log(`${firstName}`);
}

// 3
function addNumber(a,b)
{
    return a+b;
}

// 4
function areaOfRectangel(uzunKenar,kisaKenar)
{
    return uzunKenar*kisaKenar;
}

// 5
function perimeterOfRectangle(yükseklik,genişlik)
{
    return yükseklik*genişlik/2;
}

// 6
function volumeOfRectPrism(yükseklik,genişlik,uzunluk)
{
    return yükseklik*genişlik*uzunluk;
}

// 7-8-9-10-11-12 yeter yoruldum aynı şeyler hepsi

// 13 biraz daha güzel o yüzden yapacağım :D

function bmi(weight,height)
{
    let bmi = weight/height*height;
    if(bmi<18.6)
    {
        return "Underweight";
    }
    else if(bmi<25)
    {
        return "Normal weight";
    }
    else if(bmi<30)
    {
        return "overweight";
    }
    else
    {
        return "Obese";
    }
}
// 14 amele işi yapmıyorum (ben bunları temel konuları farklı dillerden bildiğim için yapmıyorum siz eğer yeniyseniz mutalaka yapın.)

// 15
function findMax(a,b,c)
{
    return Math.max(a,b,c);
}