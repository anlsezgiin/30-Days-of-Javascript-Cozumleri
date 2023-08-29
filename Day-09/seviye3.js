// Ülkeler
const a = require('./countries_data');

// 1
const sortedCountriesByName = [a.countriesData].sort();
  // console.log(sortedCountriesByName);

// 2 biraz kopya çekmiş olabilirim (:
function mostSpokenLanguages(countriesArray, count){

    const languageCounts = {};
    
    countriesArray.forEach(country => {
    
      country.languages.forEach(language => {
        if(languageCounts[language]){
          languageCounts[language]++;
        }else {
          languageCounts[language]=1;
        }
      })
    
    })
    
    const languageCountsArray = Object.keys(languageCounts).map(language => {
      return { country: language, count: languageCounts[language] }
    })
    
    const filteredArray = languageCountsArray.sort((a, b) => {
      if(a.count > b.count) return -1;
    
      if(a.count < b.count) return 1;
    
      return 0
    }).splice(0, count)
    
    return filteredArray
    
    }
console.log(mostSpokenLanguages(a.countriesData,5));

// 3
function mostPopulatedCountries(countriesArray,count)
{
    const newArray = countriesArray.map(currentCountry => {
        return { country: currentCountry.name, 
                population: currentCountry.population }
      }).sort((a, b) => {
        if(a.population > b.population) return -1;

        if(a.population < b.population) return 1;

        return 0;
      });

return newArray.splice(0, count)
}

console.log(mostPopulatedCountries(a.countriesData,5));

// 4
const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]
                                                
const statistics = {
  
  count(){
    return ages.length;
  },

  sum(){
    return ages.reduce((acc, cur) => acc+cur, 0)
  },

  min(){
    return Math.min(ages);
  },


  max(){
    return Math.max(ages)
  },

  sort(){
    return ages.sort((a, b) => {
      if(a > b) return 1;

      if(a < b) return -1;

      return 0
    })
  },

  range(){
    return Math.max(ages) - Math.min(ages)
  },

  mean(){
    return Math.round(this.sum() / this.count())
  },

  median(){
    const arr = [],
          arrayLength = this.sort().length,
          sortedArray = this.sort();

    if(arrayLength %2 !== 0){
      arr.push(sortedArray[Math.ceil(arrayLength/2-1)])

      return [arr]
    }

    else if(arrayLength %2 === 0){
      arr.push(sortedArray[Math.ceil(arrayLength/2-1)], sortedArray[Math.ceil(arrayLength/2-1)+1])

      return [arr].reduce((acc, cur) => acc+cur, 0)/2
    }

    return 'Error';
  },

  mode(){
    const sortedArray = this.sort();

    const frequency = sortedArray.reduce((freq, num) => {
      freq[num] = (freq[num] || 0) +1;
      return freq;
    }, {});

    const result = Object.keys(frequency).map(freq => {
      return { 'mode': freq, 'count': frequency[freq] }
    }).sort((a, b) => {

      if(a.count > b.count) return -1;
      if(a.count < b.count) return 1;
      return 0;
    }).slice(0, 1)

    
    return result[0];
  },

  var(){
    const mean = this.mean();

    const sumSquaredDeviations = ages.reduce((sum, num)=> sum+Math.pow(num -mean, 2), 0)

    const variance = sumSquaredDeviations / ages.length;

    return variance
  },

  std(){
    const variance = this.var()

    return Math.sqrt(variance).toFixed(1)
  }

  
}

console.log(statistics.count()) 
console.log(statistics.sum())   
console.log(statistics.range()) 
console.log(statistics.mean())  
console.log(statistics.sort())  
console.log(statistics.median())
console.log(statistics.mode())  
console.log(statistics.var())   
console.log(statistics.std())   