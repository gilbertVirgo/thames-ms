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


export async function createAchievement(data) {
  let response = await API.create(`achievement`, [{ fields: data }])
  
  return response.content[0].id
}


export async function editAchievement(id, data) {
  delete data.id
  await API.update(`achievement/${id}`, data)
}


export async function downloadAchievements(achievements) {
  console.log(achievements)
}
