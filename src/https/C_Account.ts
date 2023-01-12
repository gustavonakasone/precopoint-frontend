import axios from "axios"

const clienteHttp: AxiosInstance = axios.create({
    baseURL: "http://localhost:3000/"
})
export default  clienteHttp