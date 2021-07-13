// This algorithm uses the associated-words-inv.json dictionary to guess what an achievement is about
// after seeing several such achievements, it can start to predict which courses suite their interests
// note: this algorithm does not neccessarily predict which course is *best* for a student regarding
// future success. However, given that they have achieved prior success in a particular area, it's
// reasonable to conclude that they'd at least be "good at" the suggested course.

// Further improvements could be made by not just suggesting the course with the most representation in
// their achievements, but instead suggesting a course which matches their overall profile. For example,
// while maths may have the most representation, they might also have a reasonable amount of skill in art.
// This combination could imply that they'd enjoy architecture more than pure paths.


const words = require('../data/associated-words-inv.json')


function predict_from(sentence) {

  let split = sentence.toLowerCase().split(/\W+/)
  let topics = {} // topic frequency table

  split.forEach(word => {
    if (words.hasOwnProperty(word)) {

      words[word].forEach(topic => {
	topics[topic] = ~~topics[topic] + 1
      })
    }
  })

  return topics
}


module.exports = predict_from
