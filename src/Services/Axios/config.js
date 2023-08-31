import axios from "axios";

const ApiRequest = axios.create({
    baseURL: " https://database-vert.vercel.app/",
    headers: {
        'Content-Type': 'application/json'
    }
})

export default ApiRequest 
