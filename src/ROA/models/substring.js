const courpus = require('../scrapers/courpus')


module.exports = function(sentence) {
  let words = [...new Set(sentence.toLowerCase().split(/[^a-zA-Z]+/))]
  let freqs = {}
  
  for (let topic in courpus) {
    let text = courpus[topic]
    
    let similarity = words.map(word => {
      return [...text.matchAll(new RegExp(word, 'g'))].length
    })
    .reduce((a, b) => a + b) / text.length
    
    freqs[topic] = similarity
  }

  return freqs
}
