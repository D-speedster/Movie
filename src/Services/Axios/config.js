import axios from "axios";

const ApiRequest = axios.create({
    baseURL: " http://5.144.130.7:3001/",
    headers: {
        'Content-Type': 'application/json'
    }
})

export default ApiRequest 