const userData = 
{
    keywords:
    {
      TW:"The Weekend",
      TS:"Taylor Swift",
      DL:"Demi Lovato",
      BE:"Billie Eilish",
      AG:"Ariana Grande",
      LDL:"Lana Del Rey"
    },
    information: 
    {
      firstName: 'Anıl',
      lastName: 'Sezgin',
      titles: 
      [
        ['☝️', 'Muslim'],
        ['💻', 'Programmer'],
        ['🌐', 'Self-taught Full-Stack Dev'],
        ['📔', 'Software Engineering Student at Istanbul Beykent University']
      ],  
    }, 
}
const musicianValue = document.querySelector(".musician-value");
const randomColorCSS = document.querySelector(".random-color")
const degreeValue = document.querySelector(".degree-value")


const musicianShort = Object.keys(userData.keywords);
const degreeShort = userData.information.titles;

function randomColor()
{
    const randomRGB1 = Math.floor(Math.random()*256)
    const randomRGB2 = Math.floor(Math.random()*256)
    const randomRGB3 = Math.floor(Math.random()*256)
    randomColorCSS.style.color=`rgb(${randomRGB1},${randomRGB2},${randomRGB3})`
}
function musicianChange()
{
    const random = Math.floor(Math.random()*musicianShort.length)
    musicianValue.textContent=userData.keywords[musicianShort[random]]
}


degreeValue.textContent=""
function degreeChange()
{
    const random = Math.floor(Math.random()*degreeShort.length)
    const filteredText = `${degreeShort[random][0]} ${degreeShort[random][1]}`
    degreeValue.textContent=filteredText
}
setInterval(musicianChange,1000)
setInterval(randomColor,1000)
setInterval(degreeChange,1500)








