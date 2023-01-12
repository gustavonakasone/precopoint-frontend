import axios from 'axios'

const C_Account_API_BASE_URL='http://localhost:8080/add-usuario/consumidor'




class ClientAccountService{
    getClientAccounts(){
        return axios.get(C_Account_API_BASE_URL)
    }
    createClientAccount(data){
        return axios.post(C_Account_API_BASE_URL,data)

    }
    getClientAccountData(id){
        let URL =C_Account_API_BASE_URL+'/'+id
        return axios.get(URL);
    }
    updateClientAccount(data){
        console.log('inside updateEmployee')
        console.log(data)
        let URL=C_Account_API_BASE_URL+'/'+data.id
        return axios.put(URL,data)
    }
    deleteClientAccount(id){
        let URL =C_Account_API_BASE_URL+'/'+id
        return axios.delete(URL)
    }
}
export default new ClientAccountService()
