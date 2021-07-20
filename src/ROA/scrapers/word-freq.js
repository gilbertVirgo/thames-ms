const fs = require('fs')
const courpus = require('./courpus')


console.log('[*] creating frequency table...')

const processed = Object.fromEntries(Object.entries(courpus).map(([topic, text]) => {

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

}))


// second pass, convert to an inverted index

console.log('[*] creating inverted index...')

const processed1 = {}


for (let topic in processed) {
  for (let word in processed[topic]) {
    let weight = Math.floor(processed[topic][word] * 1e5)

    if (! weight) continue

    if (! processed1.hasOwnProperty(word)) {
      processed1[word] = [[ topic, weight ]]
    } else {
      processed1[word].push([ topic, weight ])
    }
  }
}


// save results 

console.log('[*] saving results...')

delete processed1[""]
fs.writeFileSync('../data/v1.json', JSON.stringify(processed1))

console.log('[*] finished')
