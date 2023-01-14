<template>
    <HeaderTemplate></HeaderTemplate>

    <!--Espaço entre nav e conteudo-->
    <div class="mt-3"></div>
    <FiltroProduto></FiltroProduto>
    <div class="container-lg">
        <!--Titulo-->
        <div class="text-center mb-4 mt-4"> <span class="h1 text-warning fw-bold fs-1" >Categoria</span></div>
        <!--agrupamento dos card - Realizar lógica para criar 5 cards por grupo-->
        <div class="row">
            <!--card-->
            <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-2 " v-for="produto in produtos" :key="produto.id">
                <div class="card  shadow" style="width: 15rem; height: 19rem;">
                    <div class="container text-center">
                        <img src="https://d3o3bdzeq5san1.cloudfront.net/thumbs/290/289082.jpg" class="card-img-top img-produto" >
                    </div>
                    <div class="card-body border ">
                        <small class="text-danger fw-bold">{{produto.marcaProduto}}</small><br>
                        <span class="text-muted fs-6">{{produto.produto}}<span> - {{produto.descricao}}</span></span>
                        <p class="h6 ">{{produto.preco}}</p>
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


export default defineComponent({
    name: "TesteView",
    components: {
        HeaderTemplate,
        FiltroProduto
    },
    data() {
        return {
            produtos: {},
        };
    },
    created() {
        this.getProdutos();
    },
    methods: {
        async getProdutos() {
            await api.get("produto/list-produto")
                .then((response) => this.produtos = response.data)
                .catch((err) => console.log("Erro: " + err));
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

