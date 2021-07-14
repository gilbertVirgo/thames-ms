function request({ endpoint, method }) {


  if (endpoint.startsWith('achievements')) {
    
    console.log(`got request for ${endpoint}`)
  }
}



export default {
  get: (endpoint) => request({ endpoint, method: "GET" }),
  update: (endpoint, data) => request({ endpoint, data, method: "PATCH" }),
  create: (endpoint, data) => request({ endpoint, data, method: "PUT" }),

}; 
