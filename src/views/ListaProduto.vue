<template>
    <Navbar />
    <div class="container mt-4">
        <div class="row">
            <div class="col">
                <div class="d-flex justify-content-between mt-4 mb-4">
                
                    
                    <div class="text-center mx-auto text-uppercase"> 
                    <span class="h1 text-warning fw-bold">listas de produtos</span>
                    </div>
                    <button type="button" class="btn btn-dark hover mb-2" :disabled="listaProdutos.length === 0">Baixar Lista</button>

                </div>
            </div>
        </div>
        <hr>
        <div class="container">
            <div class="row">
            <div class="col-3">
                <span class="h2 fw-bold">Descrição da Lista</span>
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
                <table class="table table-bordered" >
                    <thead class="table-dark text-center">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Imagem</th>
                        <th scope="col">Produto</th>
                        <th scope="col">Detalhes</th>
                        <th scope="col" style="width:12.5%">Quantidade</th>
                        <th scope="col">Valor</th>
                        <th scope="col">Alterar</th>
                    </tr>
                    </thead>
                    <tbody v-if="filteredList.length > 0">
                        <tr v-for="(produto, index) in filteredList" :key="index" class="table-light table-hover text-center">
                          <th scope="row">{{ index + 1 }}</th>
                          <td><img v-bind:src="produto.imagem" width="30" height="30"></td>
                          <td style="text-align:left">{{ produto.produto }}</td>
                          <td>{{ produto.descricao }}</td>
                          <td>{{ produto.quantidade }}</td>
                          <td>R$ {{ (Number(produto.preco) * produto.quantidade).toLocaleString('pt-BR', {
                                          minimumFractionDigits: 2,
                                          maximumFractionDigits: 2,
                                          useGrouping: true
                                        }) }}
                          </td>
                          <td>
                            <EditarListaProduto :produto="produto" @editar-quantidade="atualizarQuantidade(1 ,produto.id, $event)" />
                          </td>
                        </tr>
                      </tbody>
                      <tbody v-else>
                        <tr>
                          <td colspan="7" class="text-center">Nenhum produto encontrado</td>
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
import Navbar from '../components/HeaderTemplate.vue'
import ListaCompara from '../components/ListaCompara.vue'
import IProduto from '../interfaces/IProduto'
import EditarListaProduto from '../components/EditarListaProduto.vue'
import { defineComponent } from 'vue'
import Cookies from 'js-cookie'
import axios from 'axios'
export default defineComponent({
    name: "ListaProduto",
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
                produto: "Chocolate Kit Kat ao Leite",
                preco: "3.99",
                quantidade: 10,
                imagem: "https://d3o3bdzeq5san1.cloudfront.net/thumbs/290/289082.jpg",
                descricao: "41g",
                marcaProduto: "Carrefour"
            }, {
                id: 2,
                produto: "Bis Xtra Chocolate ao Leite",
                preco: "3.99",
                quantidade: 5,
                imagem: "https://images-americanas.b2w.io/produtos/01/00/img/89818/4/89818428_1GG.jpg",
                descricao: "45g",
                marcaProduto: "Americanas"
            },
            {
                id: 3,
                produto: "Fini Dentaduras",
                preco: "6.99",
                quantidade: 10,
                imagem: "https://images-americanas.b2w.io/produtos/01/00/img/6889/6/6889656_1GG.jpg",
                descricao: "90g",
                marcaProduto: "FiniStore"
            }] as IProduto[],
            searchTerm: '',
            filteredList: [] as IProduto[],
            dadoRecebido: null,
            listaId: Cookies.get('lista')
            
        }
    },
    async created() {
        if (this.listaId !== undefined) {
            this.getLista(this.listaId);
        }
        
        
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
        async getLista(id : string){
          
            try {
                const token = Cookies.get("token")
                const headers = {
                    'Authorization': `Bearer ${token}`
                };

                axios.post('http://localhost:8080/listaProdutos', id, { headers })
                .then(response => {
                    const data = response.data;
                    console.log(data);
                    this.listaProdutos = data;
                })
                .catch(error => {
                    console.log('Erro:', error);
                });
            }
            catch{
                console.log("Erro ao carregar lista.")
            }
        },
        atualizarQuantidade(id: number, index: number, novaQuantidade: number) {
            index = index - 1
            const produto = this.filteredList[index]
            produto.quantidade = novaQuantidade
                
            this.listaProdutos[index].quantidade = produto.quantidade
            this.filteredList[index].quantidade = produto.quantidade
            
        }
    }
        

    })
</script>
<style scoped>
    th, td {
  vertical-align: middle; /* alinhamento vertical */
}
</style>
