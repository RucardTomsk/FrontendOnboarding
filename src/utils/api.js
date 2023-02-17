import axios from "axios";

const api = axios.create()

api.interceptors.request.use(config => {
    if(localStorage.access_token) {
        config.headers.authorization = `Bearer ${localStorage.access_token}`
    }


    return config
},error => {

    console.log(error)
})

api.interceptors.response.use(config => {
    if(localStorage.access_token) {
        config.headers.authorization = `Bearer ${localStorage.access_token}`
    }

    return config
})

export default api
