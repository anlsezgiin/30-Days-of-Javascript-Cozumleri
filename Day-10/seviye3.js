const a = require('./countries_data');
// 1.1
function findLanguageCount(arr)
{
    const countryKeys = Object.keys(arr);
    const languages = [];
    
    countryKeys.forEach(country => {
        languages.push([arr[country].languages])
    })


    const languagesInSet = new Set();

    languages.forEach(language => languagesInSet.add(language))


    return `There are ${languagesInSet.size} languages`
}
console.log(findLanguageCount(a.countriesData));

// 1.2
function findMostSpokenLanguage(countries,count){
    const languagesCount = {};

    countries.forEach(country => {
        country.languages.forEach(language => {
            if(languagesCount[language]){
                languagesCount[language]++;
            }
            else {
                languagesCount[language]=1;
            }
        })
    })


    const mostSpokenLanguages = Object.keys(languagesCount).sort((a, b) => {
        
        if(languagesCount[a] > languagesCount[b]) return -1;
        if(languagesCount[a] < languagesCount[b]) return 1;

        return 0;   
    }).map(language => {
        return { [language] : languagesCount[language] }   
    })  


    return mostSpokenLanguages.slice(0, count);     
}

console.log(findMostSpokenLanguage(a.countriesData,5));
