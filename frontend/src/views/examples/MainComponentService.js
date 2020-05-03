import axios from 'axios'

const health = () => {
  return new Promise((resolve, reject) => {
    axios({
      method: 'get',
      url: `${process.env.REACT_APP_DIALOGFLOW_PRODUCTION_SERVER_URL}/health`
    })
      .then(function (response) {
        /* console.log(response.data)
        console.log(response.status)
        console.log(response.statusText)
        console.log(response.headers)
        console.log(response.config) */
        resolve(true)
      })
      .catch(function (error) {
        /* if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data)
          console.log(error.response.status)
          console.log(error.response.headers)
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request)
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message)
        } */
        reject(error)
      })
  })
}
export {
  health
}
