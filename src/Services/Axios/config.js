import axios from "axios";

const ApiRequest = axios.create({
    baseURL: " https://database-kappa-five.vercel.app/",
    headers: {
        'Content-Type': 'application/json'
    }
})

export default ApiRequest 
