<template>
    <Navbar/>
     <div class="container mt-4" >
            <div class="row" >
                <div class="col">
                    <div class="d-flex justify-content-between mt-4 mb-4" >
                        <p></p>
                        <div class="text-center mx-auto text-uppercase"> <span class="h1 text-warning fw-bold" >listas de produtos</span></div>
                        <button type="button" class="btn btn-dark hover ">Baixar Lista</button>
                    </div>
                </div>
            </div> 
            <hr>
                <div class="container">
                    <div class="row">
                        <div class="col-5">
                                <span class="h2  fw-bold">Descricao da Lista</span>                     
                        </div>
                        <div class="col-2"></div>
                        <div class="col-5 text-end">
                            <input type="text" class="mt-2"> 
                        </div> 
                    </div>
                </div>                
            <hr>   
            <div class="row">
                
                <div class="tabela col-8">
                <table class="table table-bordered">
                    
                        <thead class="table-dark">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Imagem</th>
                                <th scope="col">Produto</th>
                                <th scope="col">Detalhe</th>
                                <th scope="col">Valor</th>
                                <th scope="col">Quantidade</th>
                                <th scope="col">Alterar</th>
                            </tr>
                        </thead>
                        <tbody >
                            <tr class="table-light table-hover">
                                <th scope="row">1</th>
                                <td ><img src="31R9MUUFL7L._AC_SL1000_.jpg" width="20" height="20" ></td>
                                <td>Roteador</td>
                                <td>Redmi</td>
                                <td>R$ 10,00</td>
                                <td>5.00</td>
                                <td><a href="#"><img src="img/edit.jpg" width="40" height="40"></a></td>   
                            </tr>   
                            
                        </tbody> 
                        </table>
                </div>

                <!--Valor da lista dos mercados-->
                <div class="col-4">
                    <table class="table table-bordered">
                        <thead class="table-dark" >
                            <tr>
                                <th scope="col">Mercado</th>
                                <th scope="col">Valor Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <th scope="col">
                                <img src="extra.jfif" width="40" height="40">
                                <p>Extra</p>
                            </th>
                            <th scope="col">R$ 20,00</th>
                        </tbody>
                        
                    </table>
                </div>
            <!--End of Row-->
            </div>
        <!--container-->
        </div>
        <div class="container">
            <div class="col text-end">
                <button type="button" class="btn btn-dark hover ">Salvar</button>
            </div>

        </div>
</template>

<script>
    import Navbar from '../components/HeaderTemplate.vue'
    export default ({
        name: "ListaProduto",
        components: {
            Navbar
        }
    })
</script>