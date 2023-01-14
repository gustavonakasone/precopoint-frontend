<template>
    <header>
    <!--NAVBAR-->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark text-light">
            <div class="container-fluid p-2">
                <a class="navbar-brand pe-5 text-warning" href="#">PreçoPoint</a>
                <!--Botão para aparecer opções quando tela estiVer em proporção pequena-->
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item  pe-3">
                            <a class="nav-link hover" aria-current="page" href="/" >Home</a>
                        </li>
                        <li class="nav-item dropdown  pe-3">
                            <a class="nav-link dropdown-toggle hover" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Categoria
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="/1" >Categoria 1</a></li>
                                <li><a class="dropdown-item" href="/2" >Categoria 2</a></li>
                                <!-- <li><hr class="dropdown-divider"></li> -->
                                <li><a class="dropdown-item" href="/3">Categoria 3</a></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown  pe-3">
                            <a class="nav-link dropdown-toggle hover" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Suas listas
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="/1" >Lista 1</a></li>
                                <li><a class="dropdown-item" href="/2" >Lista 2</a></li>
                                <!-- <li><hr class="dropdown-divider"></li> -->
                                <li><a class="dropdown-item" href="/3">Lista 3</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <div class="d-flex">
                                <input class="form-control me-2" type="search" placeholder="Pesquisar produto..." aria-label="Search">
                                <button class="btn btn-outline-warning" >Pesquisar</button>
                            </div>
                        </li>
                    </ul>
                    <div class="dropdown pe-4">
                        <a href="" class=" nav-link nav-item dropdown-toggle hover" id="navbarDropdown2" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src="../assets/user.png" alt="" height="30px" width="30px">
                            Opções usuário
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown2">
                            <li><router-link class="dropdown-item" to="/editar-usuario">Ver minha conta</router-link></li>
                            <li><a class="dropdown-item" href="/listas">Minhas Listas</a></li>
                            <li><hr class="dropdown-divider"></li>
                            <li><a class="dropdown-item" href="/login">Sair</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
        
        
    </header>
</template>

<script lang="ts">
import { defineComponent } from "vue"

    export default defineComponent({
        name: "HeaderTemplate",
        data () {
            return{
                categoria: "categoria"
            }
        }
    })
</script>

<style scoped>
.estrelas input[type=radio] {
    display: none;
  }
  .estrelas label i.fa{
    font-size: 2.5em
  }
  .estrelas label i.fa:before {
    content:'\f005';
    color: #FC0;
  }
  .estrelas input[type=radio]:checked ~ label i.fa:before {
    color: #CCC;
  }

  .hover{
    color: white;
  }
  .hover:hover{
    color:#ffc107;
}
</style>
