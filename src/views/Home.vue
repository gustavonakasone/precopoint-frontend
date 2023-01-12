<template>
    <NavBar/>

    <div class="container-lg">
                <!--Titulo-->
                <div class="text-center mb-4 mt-4"> <span class="h1 text-warning fw-bold text-uppercase" >Categoria</span></div>
                <hr>
                <!--agrupamento dos card - Realizar lógica para criar 5 cards por grupo-->
                <div class="row">
                    
                    
                    <div class="col-xl-3 mb-2 ">
                        <div class="card shadow me-1" style="width:14rem" >
                            <div class="container text-center">
                                <img src="https://d3o3bdzeq5san1.cloudfront.net/thumbs/290/289082.jpg" class="card-img-top img-responsive img-rounded imagem">
                            </div>
                            <div class="card-body border">
                                <h6 class="fw-bold text-muted">Nestle</h6>
                                <span class="text-muted fs-6">Choc kit kat ao leite</span>
                                <p class="text-muted fs-6">450g</p>
                                <p class="h6 fs-6">R$ 7,90</p>
                                <div class="container text-center"><a href=""><button class="btn btn-outline-warning">Adicionar</button></a></div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                
            </div>
           
</template>

<script>
    import NavBar from '../components/HeaderTemplate.vue'
    
    export default ({
        // eslint-disable-next-line vue/multi-word-component-names
        name: "Home",
        components: {
            NavBar            
        }
        
        
    })

</script>

