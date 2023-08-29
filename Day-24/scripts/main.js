const planetData = {
    mercury: { mass: 3.30e23, radius: 2.44e6, surfaceGravity: 3.7 },
    venus: { mass: 4.87e24, radius: 6.05e6, surfaceGravity: 8.87 },
    earth: { mass: 5.97e24, radius: 6.37e6, surfaceGravity: 9.81 },
    mars: { mass: 6.39e23, radius: 3.39e6, surfaceGravity: 3.71 },
    jupiter: { mass: 1.90e27, radius: 6.99e7, surfaceGravity: 24.79 },
    saturn: { mass: 5.68e26, radius: 5.82e7, surfaceGravity: 10.44 },
    uranus: { mass: 8.68e25, radius: 2.54e7, surfaceGravity: 8.69 },
    neptune: { mass: 1.02e26, radius: 2.46e7, surfaceGravity: 11.15 }
  };
  function calculateWeight()
  {
    const ogre = document.querySelector(".ogre-container");
    const planetName=document.querySelector("select").value;
    const weight=document.querySelector("input").value;

    ogre.innerHTML='';

    if(planetName==="")
    {
        ogre.classList.remove("justify-content-between")
        return ogre.innerHTML='<p class="error">Please choose a Planet to proceed</p>'
    }
    if(weight==="")
    {
        ogre.classList.remove("justify-content-between")
        return ogre.innerHTML='<p class="error"> Please enter weight in kilograms.</p>'
    }
    const planet = planetData[planetName];

    const calcWeight = parseFloat(weight * planet.surfaceGravity).toFixed(2);
    ogre.classList.add("justify-content-between");
    return ogre.innerHTML=`<img src="./images/${planetName}.png" alt="${planetName}">
                            <div class="ogre">
                            <p class="error">The weight of object on <span>${planetName}</span></p>
                            <p class="error">${calcWeight}</p>
                            </div>                       
    `
  }