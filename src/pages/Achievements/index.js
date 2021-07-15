import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import AchievementForm from './AchievementForm'
import { AchievementCard, AchievementModal } from './styles'
import {
  getAchievements, 
  createEmptyAchievement, 
  deleteAchievement,
  editAchievement
} from './actions'


export default () => {
  const { id: student_id } = useParams()
  const [ achievements, setAchievements ] = React.useState(null)
  const [ isModalOpen, setIsModalOpen ] = React.useState(false)
  const [ selectedAchievement, setSelectedAchievement ] = React.useState(null)


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
  ) : (
    <>
      <h1>Achievements</h1>
      <div>
	{achievements.map(({ Name, Description, Type, Role, Associations }, index) => (
	  <AchievementCard onClick={() => {

	    setSelectedAchievement(achievements[index])
	    setIsModalOpen(true)
	  }}>
	    <h3>{Name} ({Type})</h3>
	    <p>Related to: {Associations.join(', ')}</p>
	    <p>{Description}</p>
	  </AchievementCard>
	))}

	<AchievementCard onClick={() => {
	  let addition = { Name: 'Untitled', Role: 'Participant', Description: 'No description', Associations: [] }
	  setAchievements([...achievements, addition])
	}}>
	  <center>
	    Add achievement
	  </center>
	</AchievementCard>
      </div>

      { isModalOpen && (
	<AchievementModal>
	  <main>
	    <AchievementForm onSave={( data ) => {
	      // use form data to update database
	      // and update list
	    }}/>
	  </main>
	</AchievementModal>
      )}
    </>
  )
}



/*
export default () => {

	const { id } = useParams();
	const [record, setRecord] = React.useState(null);
	const [loading, setLoading] = React.useState("Loading assignment data...")
	const [error, setError] = React.useState();






	React.useEffect(() => {
		if (loading) {
			(async function () {
				try {
					const response = await API.get(`achievements/${id}`) /*await API.get(`achievement/${id}`);


					if (! response.hasOwnProperty('content')) {
					  throw new Error('no response content')
					}

					const achievements = response.content.map(({ fields }) => fields)

					setRecord(achievements);
					setLoading(false);
				} catch (err) {
					setError(err.toString());
				}
			})();
		}
	}, [loading]);

	return !loading ? (
		<React.Fragment>
			<h1> Achivements</h1>
			<div>{ list.map(ach => <AchievementCard achievement={achievement} list={list} />) }</div>
		</React.Fragment>
	) : (
		"Loading..."
	);
};*/
