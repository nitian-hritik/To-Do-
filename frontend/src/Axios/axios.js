import axios from "axios"
const instance = axios.create({
    baseURL:"https://todo-backend.onrender.com/api"
})
export default instance
