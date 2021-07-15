import API from "../api";
import React from "react";
import Menu from "../components/Menu";
import { useParams } from "react-router-dom";
import useRole from "../hooks/useRole";
import styled from "styled-components";


async function getAchievements(id) {
  const response = await API.get(`achievements/${id}`)

  if (! response.hasOwnProperty('content')) {
    throw new Error('no response content')
  }

  return response.content.map(({ fields }) => fields)
}


async function deleteAchievement(id) {
  await API.delete(`achievement/${id}`)
}


async function createEmptyAchievement(author, student) {
  await API.create('achievement', [{ fields: {
    Author: author,
    student_id: student,
    Name: 'Untitled achievement',
    Description: 'No description',
    Role: 'Participant',
    Associations: [],
  }}])
}


async function editAchievement(id, data) {
  await API.update(`achievement/${id}`, data)
}


const AchievementCard = styled.div`
  border: 2px solid black;
  padding: 2rem;
  margin: 1rem 0;

  :hover {
    background: #f2f2f2;
  }
`

const AchievementModal = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: #0a14274a;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  main {
    background: white;
    padding: 2rem;
    border: 2px solid black;
  }
`


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
	    <h1>{ selectedAchievement.Name } ({ selectedAchievement.Role })</h1>
	    <p> { selectedAchievement.Description }</p>
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
