const fs = require('fs')


const list = {
  'chemistry': [
    '../courpus/chemistry-terms.json'
  ],
  'biology': ['../courpus/biology-terms.json'],
  'physics': ['../courpus/physics-terms.json'],
  'history': ['../courpus/history-terms.json'],
  'geography': [
    '../courpus/geography-terms.json',
    '../courpus/geography.txt'
  ],
  'maths': [
    '../courpus/maths-terms.json',
    '../courpus/maths-notes.txt'
  ],
  'english': [
    '../courpus/english-terms.json',
    '../courpus/english-language.txt',
    '../corpus/english-writers.json'
  ]
}

console.log('[*] reading courpus...')

module.exports = Object.fromEntries(Object.entries(list).map(([topic, texts]) => {
  return [topic, texts.map(path => fs.readFileSync(path)).join('\n')]
}))
