import axios from "axios";

const ApiRequest = axios.create({
    baseURL: "http://5.75.193.140:3000/",
    headers: {
        'Content-Type': 'application/json'
    }
})

export default ApiRequest 