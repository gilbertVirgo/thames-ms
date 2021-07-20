import React from 'react'
import { useParams } from 'react-router-dom'

// import AchList from '../components/AchList'
// import AchRecommend from '../components/AchRecommend'
// import AchDownload from '../components/AchDownload'



import AchClickable from '../components/AchClickable'

export default () => {
  const { id } = useParams()
  return (
    <>
      {/* this is just a test of all Ach components */}
      <h1>hello {id}</h1>
      <p>Buttons</p>
      <AchClickable>hello</AchClickable>

      <p>Cards</p>
      <AchClickable>
        <h1>This is a title very long very long very long</h1>
        <p>Subject: Maths, Physics</p>
        <p>I read a book about particle physics and the use of vectors.</p>
      </AchClickable>

    </>
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
