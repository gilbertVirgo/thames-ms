import React, { useEffect } from 'react';
import styled from 'styled-components'
import API from '../../api'


function coursesFromSubject(subject) {
  return API.get(`/courses/${subject}`)
}


function mostCommonSubject(achievements) {
  let tab = {}
  let list = []

  achievements.forEach(({ Associations }) => list.push(...Associations));
  list.forEach(subject => tab[subject] = ~~tab[subject] + 1)

  return Object.entries(tab).map(([k, v]) => `${v}: ${k}`).sort().slice(-1)[0].split(': ')[1]
}


const CourseList = styled.ul`
  li {
    text-transform: Capitalize;
  }
`


export default ({ achievements  }) => {
  const [ courses, setCourses ] = React.useState(null)

  useEffect(() => {
    !courses && (async () => {
      let subject = mostCommonSubject(achievements)
      let courses = await coursesFromSubject(subject)
      setCourses(courses)
    })()
  })

  return courses ? (
    <CourseList>
      {courses.map(({ name, link }) => <li><a href={ link }>{ name }</a></li>)}
    </CourseList>
  ) : (
    <div></div>
  )
}
