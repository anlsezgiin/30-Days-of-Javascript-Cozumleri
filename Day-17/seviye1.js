const userDetails = {
    firstName: 'Anıl',
    secondName: 'Sezgin',
    age: 22,
    country: 'Türkiye',
}

localStorage.setItem('user', JSON.stringify(userDetails, undefined, 4))