const fetch = require('node-fetch')
const unslug = slug => slug.split('-').join(' ')


module.exports = async subject => {
  let response = await fetch(`https://www.whatuni.com/degree-courses/search?subject=${subject}`).then(e => e.text())

  return [
    ...response.match(new RegExp('https://www.whatuni.com/degrees/(.+)/cd', 'g'))
  ]
  .map(link => ({
    name: unslug(link.split('/')[4]),
    link
  }))
}
