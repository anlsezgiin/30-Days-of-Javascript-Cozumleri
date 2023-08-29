const main = document.querySelector("main")
const h1 = document.querySelector("h1")
h1Text = h1.textContent
const karakterler = h1Text.split("")
const newH1 = document.createElement("h1")


function changeColor()
{
    main.innerHTML=""
    newH1.innerHTML=""
    karakterler.forEach(e =>
        {
            
            if(e=="")
            {
                const div = document.createElement("span")
                span.textContent=" "
                newH1.appendChild(span)
            }
            else
            {
                
                const span = document.createElement("span")
                span.textContent=e   
                const r1 = Math.floor(Math.random()*256)
                const r2 = Math.floor(Math.random()*256)
                const r3 = Math.floor(Math.random()*256)           
                span.classList.add("random-color")
                span.style.color=`rgb(${r1},${r2},${r3})`
                newH1.appendChild(span)
            }
            newH1.classList.add("clone-h1")
            main.appendChild(newH1)
        })
    
}

setInterval(changeColor,2000)
