import axios from "axios";

const ApiRequest = axios.create({
    baseURL: " https://dev-speedster.ir/",
    headers: {
        'Content-Type': 'application/json' ,



    }
})

export default ApiRequest 
