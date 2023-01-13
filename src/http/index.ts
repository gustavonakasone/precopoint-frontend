import axios , {AxiosInstance} from 'axios'

const api: AxiosInstance = axios.create({
    baseURL: "http://192.168.0.16:8080/"
});

export default api;