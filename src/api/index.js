import axios from'./request'

export const getList = function(params) {
  return axios.axiosPost('/getData',params)
}