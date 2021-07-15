import API from '../../api'


export async function getAchievements(id) {
  const response = await API.get(`achievements/${id}`)

  if (! response.hasOwnProperty('content')) {
    throw new Error('no response content')
  }

  return response.content.map(({ fields }) => fields)
}


export async function deleteAchievement(id) {
  await API.delete(`achievement/${id}`)
}


export async function createEmptyAchievement(author, student) {
  await API.create('achievement', [{ fields: {
    Author: author,
    student_id: student,
    Name: 'Untitled achievement',
    Description: 'No description',
    Role: 'Participant',
    Associations: [],
  }}])
}


export async function editAchievement(id, data) {
  await API.update(`achievement/${id}`, data)
}
