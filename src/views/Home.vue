<template>
    <HeaderTemplate  @search="searchList"></HeaderTemplate>

    <!--Espaço entre nav e conteudo-->
    <div class="mt-3"></div>
    <FiltroProduto></FiltroProduto>
    <div class="container-lg">
        <!--Titulo-->
        <div class="text-center mb-4 mt-4"> <span class="h1 text-warning fw-bold fs-1" >Categoria</span></div>
        <!--agrupamento dos card - Realizar lógica para criar 5 cards por grupo-->
        <div class="row">
            <!--card-->
            <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-2 " v-for="produto in filteredList" :key="produto.id">
                <div class="card  shadow" style="width: 15rem; height: 19rem;">
                    <div class="container text-center">
                        <img src="https://d3o3bdzeq5san1.cloudfront.net/thumbs/290/289082.jpg" class="card-img-top img-produto" >
                    </div>
                    <div class="card-body border ">
                        <small class="text-danger fw-bold">{{produto.marcaProduto}}</small><br>
                        <span class="text-muted fs-6">{{produto.produto}}<span> - {{produto.descricao}}</span></span>
                        <p class="h6 ">R$ {{produto.preco}}</p>
                        <div class="text-center mt-4"><button class="btn btn-outline-warning">Adicionar</button></div>
                    </div>
                </div>
            </div>               
        </div>         
    </div>
           
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HeaderTemplate from '@/components/HeaderTemplate.vue'
import FiltroProduto from '@/components/FiltroProduto.vue'
import api from '@/http/index'
import IProduto from '@/interfaces/IProduto'


export default defineComponent({
    name: "TesteView",
    components: {
        HeaderTemplate,
        FiltroProduto
    },
    data() {
        return {
            produtos: [{
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
            filteredList: {} as IProduto[],
            
        };
    },
    created() {
        this.getProdutos();
        this.filteredList = this.produtos;
    },
    methods: {
        async getProdutos() {
            await api.get("produto/list-produto")
                .then((response) => this.produtos = response.data)
                .catch((err) => console.log("Erro: " + err));
        },
        searchList(searchTerm: string){
            if(searchTerm == '') {
                this.filteredList = this.produtos
            }
            else{
                this.filteredList = []
                this.produtos.forEach(produto => {
                    
                    if(produto.produto.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1){
                        this.filteredList.push(produto)
                    }
                });

                
            }
        }
    }
})
</script>

<style scoped>
.img-produto{
  height: 120px;
  width: 120px;
}
</style>

