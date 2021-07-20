import React from 'react'
import { useParams } from 'react-router-dom'

// import AchList from '../components/AchList'
// import AchRecommend from '../components/AchRecommend'
// import AchDownload from '../components/AchDownload'
//

export default () => {
  const { id } = useParams()
  return (
    <>
      <h1>hello {id}</h1>
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
