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
  
  const html = `
    <style>
      body {
	width: 100%;
	max-width: 630px;
	padding: 2rem 19;
      }

      section {
	border-top: 2px solid #999;
      }
    </style>
    <script>
      window.onload = print()
      window.close()
    </script>
    <h1>&#128162; Record of Achievement</h1>
    
    <div>
      ${achievements.map(achievement => `
	<section>
	  <h3>${achievement.Date}, ${achievement.Name} ${achievement.Type ? `(${achievement.Type})` : ''}</h3>
	  <p>Role: ${achievement.Role}</p>
	  <p>${achievement.description || 'No description'}</p>
	</section>
      `).join('')}
    <div>
  `

  let blob = new Blob([ html ], { type: 'text/html' })
   
  window.open(URL.createObjectURL(blob))


}
