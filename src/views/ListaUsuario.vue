<template>
    <Navbar></Navbar>
    <!--Body-->

    <div class="container"  >
        <!--                                   Header Body                                                  -->
       
            <div class="row">
                <div class="col">
                    <div class="d-flex justify-content-between mt-4 mb-4" >
                        <p></p>
                        <div class="text-center mx-auto text-uppercase"> <span class="h1 text-warning fw-bold" >Listas</span></div>
                        <a  href="/lista-de-produtos"><button type="button" class="btn btn-dark hover">Criar Lista</button></a>
                        
                    </div>
                </div>
            </div> 
            <hr>   
        <!---------------------------------------------------------------------------------------------------->
                                              <!--FILTRAGEM-->
        <!---------------------------------------------------------------------------------------------------->










        <!---------------------------------------------------------------------------------------------------->
                                                <!--LISTAGEM-->
        <!---------------------------------------------------------------------------------------------------->                          
        <div class="row" >
            <div class="col-lg-4 mb-4 d-flex align-items-lg-center ">
                <div class="card shadow me-5">
                        
                        <div class="card-body border" style="width: 18rem; height: 10rem">
                            <h6 class="fw-bold text-muted text-center" style="font-size: 20px">Lista 2</h6>
                            <p class="text-center p-1" >Lanches e Bebidas</p>
                            <div class="container text-center mt-3">
                                <a href=""><button class="btn btn-warning" >Editar</button></a>
                                <a href=""><button class="btn btn-danger ms-2">Excluir</button></a>
                            </div>
                        </div>
                    </div>  
            </div> 
            <div class="col-lg-4 mb-4 d-flex align-items-lg-center ">
                <div class="card shadow me-5">
                        
                        <div class="card-body border" style="width: 18rem; height: 10rem">
                            <h6 class="fw-bold text-muted text-center" style="font-size: 20px">Lista 2</h6>
                            <p class="text-center p-1" >Lanches e Bebidas</p>
                            <div class="container text-center mt-3">
                                <a href=""><button class="btn btn-warning" >Editar</button></a>
                                <a href=""><button class="btn btn-danger ms-2">Excluir</button></a>
                            </div>
                        </div>
                    </div>  
            </div> 
            <div class="col-lg-4 mb-4 d-flex align-items-lg-center ">
                <div class="card shadow me-5">
                        
                        <div class="card-body border" style="width: 18rem; height: 10rem">
                            <h6 class="fw-bold text-muted text-center" style="font-size: 20px">Lista 2</h6>
                            <p class="text-center p-1" >Lanches e Bebidas</p>
                            <div class="container text-center mt-3">
                                <a href=""><button class="btn btn-warning" >Editar</button></a>
                                <a href=""><button class="btn btn-danger ms-2">Excluir</button></a>
                            </div>
                        </div>
                    </div>  
            </div> 
            
            
                           
        </div>
    </div>


</template>

<script lang="ts">
    import Navbar from "../components/HeaderTemplate.vue"

    export default({
        name: "ListaUsuario",
        components:{
            Navbar
        }
    })
</script>
    
<style scoped>
    button {
            display: inline-block;
            text-align: center;
            transition: all 0.5s;
            cursor: pointer;
            margin: 5px;
            color: whitesmoke;
        }
        button span { 
            cursor: pointer;
            display: inline-block;
            position: relative;
            transition: 0.5s;
        }
        button span:after {
            content: '\00bb';
            position: absolute;
            opacity: 0;
            top: 0;
            right: -20px;
            transition: 0.5s;
        }
        button:hover {
           color: white;
           opacity: 0.75;
        }
        button:hover span {
            padding-right: 25px;
        }
        button:hover span:after {
            opacity: 1;
            right: 0;
        }

</style>