const fs = require('fs')


const list = {
  'chemistry': ['../courpus/chemistry-own.json'],
  'biology': ['../courpus/biology-own.json'],
  'physics': ['../courpus/physics-own.json'],
  'history': ['../courpus/history-own.json'],
  'computer science': ['../courpus/computer-own.json'],
  'geography': [
    '../courpus/geography-own.json'  ],
  'maths': [
    '../courpus/maths-own.json' ],
  'english': [
    '../courpus/english-own.json'
  ]
}

console.log('[*] reading courpus...')

module.exports = Object.fromEntries(Object.entries(list).map(([topic, texts]) => {
  return [topic, texts.map(path => fs.readFileSync(path)).join('\n')]
}))
