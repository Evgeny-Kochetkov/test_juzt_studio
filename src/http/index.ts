import axios from 'axios'

const $api = axios.create({
    baseURL: process.env.API_HOST
})

$api.interceptors.request.use((config) => {
    return config
})

export default $api