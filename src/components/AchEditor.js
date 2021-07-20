// import { useEffect, useState }, React from 'react'
// import AchType from './AchType'
// import AchSubjects from './AchSubjects'
// import AchInput from './AchInput'
// import AchTextArea from './AchTextArea'
// import AchButton from './AchButton'
//
//
// export default ({ index }) => {
//   const item = achived[index]
//
//   return index && (
//     <>
//       <h1>{item.name}</h1>
//
//       <AchInput value={item.Name} placeholder='Name...' />
//       <AchType />
//       <AchSubjects />
//     </>
//   )
// }
//
//
// export default ({ index }) => {
//   const item = achived[index]
//
//   return index ? (
//     <>
//       <h1>{shorten(item.Name)}</h1>
//       <AchInput
// 	value={item.Name}
// 	placeholder='Name...'
//       />
//       <AchType />
//       <AchSubjects />
//       <AchInput
// 	type='date'
// 	value={item.Date}
//       />
//       <AchTextArea
// 	placeholer='Description...'
//       />
//       <AchTextArea
// 	placeholder='References...'
//       />
//
//       <AchButton onClick={() => {
//
// 	setIndex(null)
//       })/>
//         Done
//       </AchButton>
//     </>
//   ) : (
//     <>
//     </>
//   )
// }
//
//
// // trauncate a string
//
// function shorten(string, n) {
//   return string.length > n
//     ? `${string.slice(0, n)}...`
//     : string
// }
//
//
// function
