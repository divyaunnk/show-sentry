import axios from "axios";
import queryString from "queryString";
const baseURL="https://127.0.0.1:5000/api/v1"
const privateClient = axios.create({
    baseURL,
    paramsSerializer: {
        encode: params => queryString.stringify(params)
    }
})

privateClient.interceptors.request.use(async config=> {
    return {
        ...config,
        headers: {
            "Content-type" : "application/json",
            "Authorization" : `Bearer ${localStorage.getItem("actokn")}`
        }
    }
});

privateClient.interceptors.response.use(response => {
    if (response && response.data) return response.data;
    return response;
}, (err) =>   {
    throw err.response.data;
})

export default privateClient;