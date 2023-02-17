import axios from "axios";

const api = axios.create()

//start request
api.interceptors.request.use(config => {
    if(localStorage.access_token) {
        config.headers.authorization = `Bearer ${localStorage.access_token}`
    }

    //Надо возвращать конфиг после его модификации
    return config
},error => {
    //Этот блок кода срабатывает только тогда, когда ошибка отправки запроса с фронта
    console.log(error)
})
//end request

//start response
api.interceptors.response.use(config => {
    if(localStorage.access_token) {
        config.headers.authorization = `Bearer ${localStorage.access_token}`
    }

    return config
})
//end response

export default api
