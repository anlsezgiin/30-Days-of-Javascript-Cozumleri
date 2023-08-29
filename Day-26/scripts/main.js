// Neye ihtiyacımız var bakalım
// 1 Starting Word(starts-with), Search with any word(search) ve sırz a-z(sort) dinlememiz lazım ancak buttonlar ile çalışmayı detaylı bilmediğim için sıkıntı yaşayabilirim.
// O halde şuna bakalım bir buttonın değerini nasıl algılayabilirim? ChatGpt'ye sordum sağolsun yardımcı oldu :)))
const countries = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    'Brazil',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Cape Verde',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Colombi',
    'Comoros',
    'Congo (Brazzaville)',
    'Congo',
    'Costa Rica',
    "Cote d'Ivoire",
    'Croatia',
    'Cuba',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'East Timor (Timor Timur)',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Ethiopia',
    'Fiji',
    'Finland',
    'France',
    'Gabon',
    'Gambia, The',
    'Georgia',
    'Germany',
    'Ghana',
    'Greece',
    'Grenada',
    'Guatemala',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Korea, North',
    'Korea, South',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macedonia',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Mauritania',
    'Mauritius',
    'Mexico',
    'Micronesia',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Poland',
    'Portugal',
    'Qatar',
    'Romania',
    'Russia',
    'Rwanda',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Vincent',
    'Samoa',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia and Montenegro',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Swaziland',
    'Sweden',
    'Switzerland',
    'Syria',
    'Taiwan',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Togo',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Vatican City',
    'Venezuela',
    'Vietnam',
    'Yemen',
    'Zambia',
    'Zimbabwe'
  ]
  
const startsWithRadio = document.getElementById('startsWithRadio')
const searchingAnyWord = document.getElementById("searchWithAnyWord")
const aToZchecked=document.getElementById("aToZ")
const searchInput = document.getElementById('search');
const mainContainer = document.querySelector('.main-container')
const par2 = document.getElementById("par-2")

let startingWord = false;
let searchWithAnyWord = false;
let aToZ=false;

// sonradan öğrendim true false eklemeye gerek yokmuş .checked ilede çalışabiliyormuşuz ama böyle daha rahat ettim o yüzden değiştirmiyorum.
startsWithRadio.addEventListener('click', function() 
{
    if (startsWithRadio.checked) 
    {
        startingWord=true;
    }
    else
    {
        startingWord=false;
    }
});

searchingAnyWord.addEventListener('click',function()
{
    if(searchingAnyWord.checked)
    {
        searchWithAnyWord=true;
    }
    else
    {
        searchWithAnyWord=false;
    }
})

aToZchecked.addEventListener('change',function()
{
    if(aToZchecked.checked)
    {
        aToZ=true;
        
    }
    else
    {
        aToZ=false;
        
    }
})


// Pekala şimdi dinlememiz gereken her şeyi dinliyoruz. Sırada gerekli fonksiyonları yazmak var.
// ilk olarak tüm ülkeleri html dosyamıza ekleyelim
function addAllCountries(a)
{
a.forEach( element =>
    {
        let countryInfo=document.createElement("div");
        countryInfo.classList.add("country-info")
        
        let countryName=document.createElement("p")
        countryName.classList.add("country-name")
        
        countryInfo.appendChild(countryName);

        countryName.textContent=element;
        mainContainer.appendChild(countryInfo)
    })
}
addAllCountries(countries)
// okey bunuda hallettik şimdi en sıkıntı kısım arama yerine gelelim :D İlk olarak aramamızı bi dinleyelim
searchInput.addEventListener("input",function()
{
    results = new Array()
    results2 = new Array()
    inputValue = searchInput.value;
    if(startingWord==true)
    {   
        for (let i = 0; i < countries.length; i++) {
            mainContainer.innerHTML=""
            if(countries[i].startsWith(inputValue))
            {
                results.push(countries[i])
            } 
        }
        par2.textContent=`${inputValue} with ${results.length} countries`
        console.log(results)
        addAllCountries(results)
    }
      
    if(searchWithAnyWord==true)
    {
        for (let i = 0; i < countries.length; i++) {
            mainContainer.innerHTML=""
            if(countries[i].includes(inputValue))
            {
                results2.push(countries[i])
            } 
        }
        console.log(results2)
        addAllCountries(results2)
        par2.textContent=`${inputValue} with ${results2.length} countries`
        console.log(par2.textContent)
    }
    
})
// şimdi sırada a'dan z'ye sıralama olayımız var.

aToZchecked.addEventListener("click",function()
{
        if(searchWithAnyWord==true)
        {
            mainContainer.innerHTML=""
            addAllCountries(results2.reverse())
        }
        else if (startingWord==true)
        {
            mainContainer.innerHTML=""
            addAllCountries(results.reverse())
        }
        else
        {
            mainContainer.innerHTML=""
            addAllCountries(countries.reverse())
        }
    
})
// sayın dostlar şuan program çalışıyor ancak ciddi ux eksiklikleri var buda benim tamamen button kullanmalarını bilmemem ve becerememden kaynaklı, gelecekte umarım daha iyisini yapabilirim ancak şimdilik bu kadar.
// Ayrıca farkettiyseniz yine data bağlamayı beceremedim :DDDD












   
