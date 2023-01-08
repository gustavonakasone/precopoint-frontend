import axios from 'axios'

const S_Account_API_BASE_URL='http://localhost:8080/add-usuario/fornecedor'

class SupplierAccountService{
    getSupplierAccounts(){
        return axios.get(S_Account_API_BASE_URL)
    }
    createSupplierAccount(data){
        return axios.post(S_Account_API_BASE_URL,data)

    }
    getSupplierAccountData(id){
        let URL =S_Account_API_BASE_URL+'/'+id
        return axios.get(URL);
    }
    updateSupplierAccount(data){
        console.log('inside updateSupplier')
        console.log(data)
        let URL=S_Account_API_BASE_URL+'/'+data.id
        return axios.put(URL,data)
    }
    deleteSupplierAccount(id){
        let URL =S_Account_API_BASE_URL+'/'+id
        return axios.delete(URL)
    }
}

export default new SupplierAccountService()
