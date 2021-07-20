import React from 'react'
import { useParams } from 'react-router-dom'
import AchClickable from '../components/AchClickable'
import AchParagraph from '../components/AchParagraph'
import AchCard from '../components/AchCard'


export default () => {
  const { id } = useParams()
  return (
    <h1>Achivements page</h1>
  )
  // return achieved && (
  //   <>
  //     <h1>&#128162; Record of Achievement</h1>
  //     <AchList/>
  //     <AchRecommend/>
  //     <AchDownload/>
  //   </>
}


// async function achievedByStudent(id) {
//   const response = await API.get(`achievements/${id}`)
//
//   if (response[content]) {
//     return response.content.map(({ fields }) => fields)
//   }
// }


/* demo...

<>
  <h1>hello {id}</h1>
  <p>Buttons</p>
  <AchClickable>hello</AchClickable>

  <p>Information paragraph</p>
  <AchParagraph>
    This is a paragraph containing helpful information.
  </AchParagraph>

  <p>Achivement cards</p>
  <AchCard ach={{
    Name: 'Maths competition',
    Related: [ 'Maths', 'Physics', 'Computer Science'],
    About: 'I took part in a maths contest and came second place.'
  }}
    onEdit={console.log}
  />
</>
*/
