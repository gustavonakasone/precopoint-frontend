<template>
    <Navbar />
    <div class="container mt-4">
        <div class="row">
            <div class="col">
                <div class="d-flex justify-content-between mt-4 mb-4">
                
                    
                    <div class="text-center mx-auto text-uppercase"> 
                    <span class="h1 text-warning fw-bold">listas de produtos</span>
                    </div>
                    <button type="button" class="btn btn-dark hover mb-2" >Baixar Lista</button>
                </div>
            </div>
        </div>
        <hr>
        <div class="container">
            <div class="row">
            <div class="col-3">
                <span class="h2 fw-bold">Descricão da Lista</span>
            </div>
            <div class="col-4"></div>
                <div class="col-5 d-flex justify-content-end">
                    <div class="form-group" style="display: flex">
                        <input type="text" class="form-control mr-2" style="flex: 2;" v-model="searchTerm">
                        <button class="btn btn-dark hover "  style="flex: 1;width: 25%; margin-left: 2%" @click="searchList">Pesquisar</button>
                    </div>
                </div>  
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="tabela col-12 col-md-8">
                <form>
                <table class="table table-bordered">
                    <thead class="table-dark text-center">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Imagem</th>
                        <th scope="col">Produto</th>
                        <th scope="col">Detalhe</th>
                        <th scope="col" style="width:12.5%">Quantidade</th>
                        <th scope="col">Valor</th>
                        <th scope="col">Alterar</th>
                    </tr>
                    </thead>
                    <tbody v-for="(produto, index) in filteredList" :key="index">
                    <tr class="table-light table-hover text-center">
                        <th scope="row">{{ index + 1 }}</th>
                        <td><img v-bind:src="produto.imagem" width="30" height="30"></td>
                        <td>{{ produto.produto }}</td>
                        <td>{{ produto.descricao }}</td>
                        <td>{{ produto.quantidade }}</td>
                        <td>R$ {{ produto.preco }}</td>
                        <td>
                        <EditarListaProduto :produto="produto"  />
                        </td>
                    </tr>
                    </tbody>
                    
                </table>
                <Total :produtos="listaProdutos"/>
                </form>
            </div>

            <div class="col-12 col-md-4">
                
                <ListaCompara :produtos="listaProdutos" />
                
            </div>
        </div>
        <!--container-->
    </div>
    <div class="container">
        <div class="col text-end">
            <button type="button" class="btn btn-dark hover ">Salvar</button>
        </div>

    </div>
</template>

<script lang="ts">
import Total from '@/components/Total.vue'
import api from '@/http/index'
import router from '@/router'
import Navbar from '../components/HeaderTemplate.vue'
import ListaCompara from '../components/ListaCompara.vue'
import IProduto from '../interfaces/IProduto'
import EditarListaProduto from '../components/EditarListaProduto.vue'
import { defineComponent } from 'vue'
export default defineComponent({
    name: "ListaProduto",
    emits: ["aoCarregarLista"],
    components: {
        Navbar,
        ListaCompara,
        EditarListaProduto,
        Total
    },
    data() {
        return {

            listaProdutos: [{
                id: 1,
                produto: "string",
                preco: "20.00",
                quantidade: 10,
                imagem: "https://d3o3bdzeq5san1.cloudfront.net/thumbs/290/289082.jpg",
                descricao: "String",
                marcaProduto: "Teste2"
            }, {
                id: 2,
                produto: "drng",
                preco: "30.50",
                quantidade: 5,
                imagem: "String",
                descricao: "String",
                marcaProduto: "Teste3"
            },
            {
                id: 3,
                produto: "string",
                preco: "40.00",
                quantidade: 10,
                imagem: "String",
                descricao: "String",
                marcaProduto: "Teste3"
            }] as IProduto[],
            searchTerm: '',
            filteredList: [] as IProduto[]
        }
    },
    created() {
        
        this.filteredList = this.listaProdutos;
        
    },
    computed: {
    },
    methods: {
        
        listaEstaVazia(listaProdutos: Array<IProduto>) {
                return listaProdutos.length === 0
        },
        searchList(){
            if(this.searchTerm == '') {
                this.filteredList = this.listaProdutos
            }
            else{
                this.filteredList = []
                
                this.listaProdutos.forEach(produto => {
                    if(produto.produto.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1){
                        this.filteredList.push(produto)
                    }
                });

                
            }
        },
        async recebeLista(){
                await api.get('produto/list-produto', {})
                    .then((response) => {
                        console.log(response.data),
                        router.push('/')

                    })
                    .catch((err) => console.log("Erro: "+ err))
                
        },
    }
        

})
</script>
<style scoped>
    th, td {
  vertical-align: middle; /* alinhamento vertical */
}
</style>
