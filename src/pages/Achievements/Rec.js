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
  console.log(subjectPercentages)

  return subjectPercentages
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
      let sum = Object.entries(subject).map(([subject, weight]) => weight).reduce((a, b) => a + b)
      let percentile = sum/10;
      let courses = []
      let i = 0;
      let j = 0;
      if (subject.english != undefined){
        let engCourse = await coursesFromSubject('english')
        let engSum = subject.english;
        j = 0;
        while (engSum > 0) {
	        courses[i] = engCourse[j]
	        i += 1;
	        j += 1;
	        engSum -= percentile
	       }
      }
      //Please clean this up, this is so ineffecient but it is all I can think of right now
      if (subject.chemistry != undefined){
        let chemCourse = await coursesFromSubject('chemistry')
        let chemSum = subject.chemistry;
        j = 0;
        while (chemSum > 0) {
         courses[i] = chemCourse[j]
         i += 1;
         j += 1;
         chemSum -= percentile
        }
      }
      if (subject.maths != undefined){
        let matCourse = await coursesFromSubject('maths')
        let matSum = subject.maths;
        j = 0;
        while (matSum > 0) {
         courses[i] = matCourse[j]
         i += 1;
         j += 1;
         matSum -= percentile
        }
      }
      if (subject.history != undefined){
        let hisCourse = await coursesFromSubject('history')
        let hisSum = subject.history;
        j = 0;
        while (hisSum > 0) {
         courses[i] = hisCourse[j]
         i += 1;
         j += 1;
         hisSum -= percentile
        }
      }
      if (subject.geography != undefined){
        let geoCourse = await coursesFromSubject('geography')
        let geoSum = subject.geography;
        j = 0;
        while (geoSum > 0) {
         courses[i] = geoCourse[j]
         i += 1;
         j += 1;
         geoSum -= percentile
        }
      }
      if (subject.physics != undefined){
        let phyCourse = await coursesFromSubject('physics')
        let phySum = subject.physics;
        j = 0;
        while (phySum > 0) {
         courses[i] = phyCourse[j]
         i += 1;
         j += 1;
         phySum -= percentile
        }
      }
      if (subject.['computer science'] != undefined){
        let comCourse = await coursesFromSubject('computer science')
        let comSum = subject.['computer science'];
        j = 0;
        while (comSum > 0) {
         courses[i] = comCourse[j]
         i += 1;
         j += 1;
         comSum -= percentile
        }
      }
      if (subject.biology != undefined){
        let bioCourse = await coursesFromSubject('biology')
        let bioSum = subject.biology;
        j = 0;
        while (bioSum > 0) {
         courses[i] = bioCourse[j]
         i += 1;
         j += 1;
         bioSum -= percentile
        }
      }
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
