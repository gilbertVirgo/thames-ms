import React, { useEffect } from 'react';
import styled from 'styled-components'
import API from '../../api'


function coursesFromSubject(subject) {
  return API.get(`/courses/${subject}`)
}


async function mostCommonSubject(achievements) {
  let tab = {}
  let list = []

  achievements.forEach(({ Associations }) => list.push(...Associations));
  list.forEach(subject => tab[subject] = ~~tab[subject] + 1)

  return Object.entries(tab).map(([k, v]) => `${v}: ${k}`).sort().slice(-1)[0].split(': ')[1]
}


async function mostLikelySubject(achievements) {
  const combinedText = achievements.map(({ Description, Name }) => `${Description} ${Name}`).join(' ')
  console.log(combinedText)

  const subjectPercentages = await API.get(`/topics/${encodeURIComponent(combinedText)}`)

  return 'maths'
}


const CourseList = styled.ul`
  li {
    text-transform: Capitalize;
    line-height: 2
  }
`


export default ({ achievements  }) => {
  const [ courses, setCourses ] = React.useState(null)
  const [ previous, setPrevious ] = React.useState(achievements)

  useEffect(() => {
    (!courses || (achievements != previous)) && (async () => {
      let subject = await mostLikelySubject(achievements)
      let courses = await coursesFromSubject(subject)
      setCourses(courses)
      setPrevious(achievements)
    })()
  })

  return courses ? (
    <CourseList>
      {courses.map(({ name, link, uni }) => <li><a href={ link }>{ name } ({ uni })</a></li>)}
    </CourseList>
  ) : (
    <div></div>
  )
}
