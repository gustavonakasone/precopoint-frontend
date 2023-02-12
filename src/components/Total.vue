<template>
    <table class="table table-bordered">
        <thead class="table-dark text-center">
            <tr>
                <th scope="col">Total de Itens</th>
                <th scope="col">Valor total</th>
            
            </tr>
        </thead>
        <tbody class="table-light table-hover text-center">
            <tr>
                <td>{{ quantidadeProdutos }}</td>
                <td>R$ {{ totalProdutos.toFixed(2) }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script lang="ts">
    import IProduto from '@/interfaces/IProduto';
    import { defineComponent, PropType } from 'vue';

    export default defineComponent({
        // eslint-disable-next-line vue/multi-word-component-names
        name: "Total",
        props: {
            produtos: {
                type: Array as PropType<IProduto[]>,
                required: true
            }
        },
        data() {
            return {
                quantidadeProdutos: 0,
                totalProdutos: 0
            };
        },
        created() {
            this.produtos.forEach(element => {
                this.quantidadeProdutos += element.quantidade;
                this.totalProdutos += element.quantidade * Number(element.preco);
            });
        },
        methods: {

        }
    });

</script>
