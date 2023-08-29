let month = prompt("Ayınızı giriniz: ");
let mevsim;
if(month=="Eylül" || month=="Ekim" || month=="Kasım")
{
    mevsim = "Sonbahar";
}
else if(month=="Aralık" || month=="Ocak" || month=="Şubat")
{
    mevsim = "Kış";
}
else if(month=="Mart" || month=="Nisan" || month=="Mayıs")
{
    mevsim = "Bahar";
}
else
{
    mevsim = "Yaz";
}
console.log(`Mevsim: ${mevsim}`);