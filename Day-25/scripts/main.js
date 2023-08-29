// fonksyionlarımızı tasarlayalım. Neye ihtiyacımız var?
// 1. en kalabalık 10 ülkeyi döndüren fonksiyon
// 2 en çok kullanılan 10 dil (set kullanacağız)
// 3 button clicklerini dinleme


function most10CrowdCountry()
{
    const filteredCountries = Object.keys(countries_data).map(key =>
        {
            return {
                name: countries_data[key].name,
                population: countries_data[key].population
            }
        }).sort((a,b) =>
        {
            if(a.population>b.population) return -1
            if(a.population<b.population) return 1
            return 0
        }).splice(0,10)
        return filteredCountries;
}

// Ne yaptık? Data'dan key'lerimizi aldık (yani her bir ülkenin bilgileri olan indeksi), o indexe map uygulayarak içeriğini name ve population olarak güncelledik, ardından sıraladık, ardından ilk 10 ülkeyi döndürdük.

// Şimdi sırada dilleri sıralamak var. Dilleri sıralamak için set kullanacağız çünkü bir ülkede birden fazla dil kullanılıyor ve bir dil birden fazla ülkede kullanılabiliyor. O yüzden unique değerler olarak tutmamız gerekiyor ki tekrarlanmasın.
function findTenMostSpokenLanguages(){

    const filteringLanguages = new Set()
  
    Object.keys(countries_data).forEach(key => {
      countries_data[key].languages.forEach(lang => filteringLanguages.add(lang))
    })
    console.log(filteringLanguages)
    const languagesWithCount = Array.from(filteringLanguages).reduce((acc, cur) => {
      acc[cur] = {
        language: cur,
        count: 0
      }
      return acc
    }, {})
    
    Object.keys(countries_data).forEach(key => {
      countries_data[key].languages.forEach(lang => {
          if(languagesWithCount[lang].language === lang) languagesWithCount[lang].count++
      })
    })
  
    const tenMostSpokenLanguages = Object.keys(languagesWithCount).map(key => languagesWithCount[key]).sort((a, b)=> {
      if (a.count>b.count) return -1
      if (a.count<b.count) return 1
      return 0
    }).splice(0, 10)
  
    return tenMostSpokenLanguages
  }
  console.log(findTenMostSpokenLanguages(countries_data))

  // Şimdi sırada DOM manipülasyonu var.
  
  function updateDOM(optionToProceed){

    const mainContainer = document.querySelector('.main-container');
          mainContainer.innerHTML = ''
  
    if (optionToProceed === 'languages') {
  
      const returnedObject = findTenMostSpokenLanguages();
  
      const maxValue = Object.keys(returnedObject).map(key => {
                           return returnedObject[key].count
                        })[0]
      
      Object.keys(returnedObject).forEach(key => {
        const componentElement = document.createElement('div')
            componentElement.classList.add('component')
        
        const language = returnedObject[key].language,
              spokenCountOfLanguage = returnedObject[key].count
  
        componentElement.innerHTML = `
        <p class="description">${language}</p>
        <progress min="0" max="${maxValue}" value="${spokenCountOfLanguage}"></progress>
        <p class="count">${spokenCountOfLanguage}</p>
        `
  
        mainContainer.appendChild(componentElement)
        
      })
      return
    }
  
    const returnedObject = most10CrowdCountry();
  
    const maxValue = Object.keys(returnedObject).map(key => {
                         return returnedObject[key].population
                      })[0]
    
    Object.keys(returnedObject).forEach(key => {
      const componentElement = document.createElement('div')
            componentElement.classList.add('component')
      
      const country = returnedObject[key].name,
            populationOfCountry = returnedObject[key].population
  
      componentElement.innerHTML = `
      <p class="description">${country}</p>
      <progress min="0" max="${maxValue}" value="${populationOfCountry}"></progress>
      <p class="count">${populationOfCountry}</p>
      `
  
      mainContainer.appendChild(componentElement)
    })
  }
  document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', (e)=>updateDOM(e.target.value))
  })

  // iki saat boyunca şu kod çalışmadı kafayı yedim meğersem ben kendi testlerimi yapmak için datayı buna bağlamıştım iki kere tanımlayınca çalışmıyormuş ben yandım siz yanmayın :D