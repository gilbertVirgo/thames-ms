// import { useState }, React from 'react'
// import strings from '../data/strings'
// import AchEditor from './AchEditor'
// import AchParagraph from './AchParagraph'
//
//
// export default () => {
//   const [type, setType] = useState(null)
//   const [index, setIndex] = useState(null)
//
//   return (
//     <>
//       <h2>Achievements</h2>
//
//       <AchParagraph>{strings.ach.intro}</AchParagraph>
//       <AchType onChange={({ value }) => setType(value)} />
//
//       {achieved.map((item, i) =>
//         shouldShow(item, type) && <AchCard onClick={() => setIndex(i)} />
//       )}
//
//       <AchEditor
//         index={index}
//         onClose={() => setIndex(null)}
//       />
//     </>
//   )
// }
//
//
// // used to filter achievements by type
//
// function shouldShow(item, type) {
//   return !type || type == item.type
// }
