// which-topic.js, guesses the topic of a string using word frequency
// accuracy is dependent of the quality of words-to-topics.json


const words = require('../data/words-to-topics.json')


module.exports = function(string) {
  let topics = {}

  string.toLowerCase().split(/\W+/).forEach(word => {
    words.hasOwnProperty(word) && words[word].forEach(topic => topics[topic] = ~~topics[topic] + 1)
  })

  return topics
}
