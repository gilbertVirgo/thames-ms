const fs = require('fs')


const list = {
  'chemistry': ['../courpus/chemistry-terms.json'],
  'biology': ['../courpus/biology-terms.json'],
  'physics': ['../courpus/physics-terms.json'],
  'history': ['../courpus/history-terms.json'],
  'geography': ['../courpus/geography-terms.json'],
  'maths': ['../courpus/maths-terms.json'],
  'english': ['../courpus/english-terms.json']
}


module.exports = Object.fromEntries(Object.entries(list).map(([topic, texts]) => {
  return [topic, texts.map(path => fs.readFileSync(path)).join('\n')]
}))
