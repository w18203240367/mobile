import axios from 'axios'
export default {
  axiosGet (url,params = {}) {
    return new Promise((resolve,reject) => {
      axios.get(url,params).then(res => {
        resolve(res.data)
      }).catch(error => {
        reject(error)
      })
    })
  },
  axiosPost(url,params = {}) {
    return new Promise((resolve,reject) => {
      axios.post(url,params).then(res => {
        resolve(res)
      }).catch(error => {
        reject(error)
      })
    })
  }
}