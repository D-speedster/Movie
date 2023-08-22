import axios from "axios";

const ApiRequest = axios.create({
    baseURL: " http://5.78.48.230:3004/",
    headers: {
        'Content-Type': 'application/json'
    }
})

export default ApiRequest 