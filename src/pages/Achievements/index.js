import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import AchievementForm from './AchievementForm'
import { AchievementCard, AchievementModal } from './styles'
import {
  getAchievements, 
  createAchievement, 
  deleteAchievement,
  editAchievement
} from './actions'


export default () => {
  const { id: student_id } = useParams()
  const [ achievements, setAchievements ] = React.useState(null)
  const [ isModalOpen, setIsModalOpen ] = React.useState(false)
  const [ index, setIndex ] = React.useState(null)


  React.useEffect(() => {
    if (! achievements) {
      (async () => {
	let ach = await getAchievements(student_id)
	setAchievements(ach)
      })()
    }
  })


  return !achievements ? (
    <p>Loading...</p>
  ) : (console.log(achievements),
    <>
      <h1>Achievements</h1>
      <div>
	{achievements.map(({ Name, Description, Type, Role, Associations }, i) => (
	  <AchievementCard onClick={() => {

	    setIndex(i)
	    setIsModalOpen(true)
	  }}>
	    <h3>{Name} {Type && `(${Type})`}</h3>
	    <p>{Associations && `Related to: ${Associations.join(', ')}`}</p>
	    <p>{Description}</p>
	  </AchievementCard>
	))}

	<AchievementCard onClick={() => {
	  
	  let addition = {
	    Name: 'Untitled', 
	    student_id: [ student_id ], 
	    Role: 'Participant', 
	    Description: 'No description'
	  }

	  createAchievement(addition)
	  setAchievements([...achievements, addition])
	}}>
	  <center>Add achievement</center>
	</AchievementCard>
      </div>

      {isModalOpen && (
	<AchievementModal>
	  <main>
	    <AchievementForm selected={achievements[index]} onSave={data => {
	      // use form data to update database
	      // and update list
	    }}/>

	    <button onClick={() => {
	      deleteAchievement(achievements[index].id)
	      setAchievements([...achievements.slice(0, index), ...achievements.slice(index + 1)])
	    }}/>
	  </main>
	</AchievementModal>
      )}
    </>
  )
}
