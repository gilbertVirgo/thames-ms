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
  await API.create(`achievement`, [{ fields: data }])
}


export async function editAchievement(id, data) {
  delete data.id
  await API.update(`achievement/${id}`, data)
}
