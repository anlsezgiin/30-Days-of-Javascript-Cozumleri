const fileSystem = require('fs')

var importColorJS = require('../data/colors');

const colors = importColorJS.colors;

const filteredKeysOfColorCodes = Object.keys(colors).filter(color => color.includes('300')).filter(colorKey => colors[colorKey].includes('#'))


const filteredColorCodes = filteredKeysOfColorCodes.map(colorKey => colors[colorKey])



const data = `const colorCodes = ${JSON.stringify(filteredColorCodes)};`

fileSystem.writeFile('./data/generatedColors.js', data, (err) => {
  if (err) throw err;
  console.log('Data written to file!');
});