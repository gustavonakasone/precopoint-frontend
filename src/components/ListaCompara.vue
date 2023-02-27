<template>
    <div class="table-responsive">
        <table class="table table-bordered table-limit">
            <thead class="table-dark" >
                <tr>
                    <th scope="col" class="table-cell" style="width: 50%">Mercado</th>
                    <th scope="col" class="table-cell" style="width: 50%; word-wrap: break-word;">Valor Total</th>
                </tr>
            </thead>
            <tbody v-for="(produto, index) in produtos" :key="index">
                
                <th scope="col" >
                    <img src="../assets/user.png" style="width: 40px; height: 40px; margin-right: 10px;">
                    <label style="display: inline-block;">Nome da Empresa</label>
                </th>
                <th scope="col" style="text-align: right">R$ {{ Number(produto.preco).toLocaleString('pt-BR', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                        useGrouping: true
                        }) }}</th>
            </tbody>
            <button @click="comparaLista()"></button>
        </table>
    </div>
</template>
<script lang="ts">
    import { PropType } from 'vue';
    import IProduto from '../interfaces/IProduto'
    export default ({
        name: "ListaCompara",
        props: {
            produtos: {
                type: Array as PropType<IProduto[]>,
                required: true
            }
                
        },
        data(){
            return{
                fornecedores: ["extra", "americanas", "ponto-frio"]
            }
        }        
        ,
        methods: {
            comparaLista(){
                console.log("teste")
            }
        }
    })
</script>
<style scoped>
    .table-limit {
    max-width: 500px;
    }

    @media only screen and (max-width: 768px) {
    .table-limit {
        max-width: 100%;
    }
    .table-responsive {
        overflow-x: auto;
    }

    .table {
        width: 100%;
    }
    }
</style>