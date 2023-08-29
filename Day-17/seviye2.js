const student = {
    firstName: 'Anıl',
    lastName: 'Sezgin',
    age: 22,
    skills: ['HTML5, CSS3, JavaScript'],
    country: 'Türkiye',
    enrolled: ['Frontend','FullStack','Backend']
}                             

localStorage.setItem('student', JSON.stringify(student, undefined, 4));
localStorage.getItem('student')