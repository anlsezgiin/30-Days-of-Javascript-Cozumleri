const catsAPI = 'https://api.thecatapi.com/v1/breeds';
let catNames;
fetch(catsAPI)
.then(response => response.json())
.then(data => {
    catNames = data.map(object => object.name)
    console.log(catNames)
})
.catch(error => console.log(error))