let div = document.querySelector(".wrapper")
for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        let box = document.createElement("div")
        box.textContent = i
        box.style.width = "150px";
        box.style.height = "120px"
        box.style.backgroundColor = "green"
        if(i==2)
        {
            box.style.backgroundColor="red"
        }
        box.style.margin = "8px";
        div.appendChild(box)
    } 
    else if(i%2!=0 && i%3!=0 && i%5!=0 && i%7!=0)
    {
        let box = document.createElement("div")
        box.textContent=i;
        box.style.width = "150px";
        box.style.height = "120px"
        box.style.backgroundColor = "red"
        if(i==1)
        {
            box.style.backgroundColor="yellow"
        }
        box.style.margin = "8px";
        div.appendChild(box)
    }
    else {
        let box = document.createElement("div")
        box.textContent = i;
        box.style.width = "150px";
        box.style.height = "120px";
        box.style.backgroundColor = "yellow"
        if(i==3 || i==5 || i==7)
        {
            box.style.backgroundColor="red"
        }
        box.style.margin = "8px";
        div.appendChild(box)
    }
}