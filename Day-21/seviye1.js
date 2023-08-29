// 1
const firstParagraph = document.querySelector('p')

// 2
const idp1 = document.getElementById("paragraph-1")
const idp2 = document.getElementById("paragraph-2")
const idp3 = document.getElementById("paragraph-3")
const idp4 = document.getElementById("paragraph-4")
console.log(idp1,idp2,idp3,idp4)

// 3
const nodeList = document.querySelectorAll("p")
console.log(nodeList);

// 4
nodeList.forEach((i) =>
{
    console.log(i.innerHTML)
})

// 5
const changeP = document.getElementById("paragraph-4")
changeP.textContent="4. paragraf değiştirildi."
console.log(changeP.innerHTML)

// 6
const paragraphs = document.querySelectorAll("p")
for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].classList.add(`p${i+1}`)
    paragraphs[i].setAttribute(`id`, `idP${i+1}`)
}
console.log(paragraphs)