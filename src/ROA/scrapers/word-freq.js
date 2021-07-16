const fs = require('fs')

const courpus = {
  'computer science': fs.readFileSync('../courpus/computer-science.txt'),
  'english': fs.readFileSync('../courpus/english-language.txt'),
  'chemistry': fs.readFileSync('../courpus/chemistry-terms.json'),
  'biology': fs.readFileSync('../courpus/biology-terms.json'),
  'physics': fs.readFileSync('../courpus/physics-terms.json')
}


const processed = Object.entries(courpus).map(([topic, text]) => {

  text = text.toString('utf8').toLowerCase()


  // word frequencies
  
  let words = text.split(/[^a-zA-Z]+/)
  let freqs = {}

  words.forEach(word => {
    freqs[word] = ~~freqs[word] + 1
  })


  freqs = Object.fromEntries(
    Object.entries(freqs)
    .map(([word, freq]) => [word, freq / words.length]))
  //  .sort((a, b) => a[1] - b[1])
  //)

  return [ topic, freqs ]

})


module.exports = Object.fromEntries(processed)
