import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ListaUsuario from '../views/ListaUsuario.vue'
import Login from '../views/Login.vue'
import ListaProduto from '../views/ListaProduto.vue'
import ListaFornecedor from '../views/ListaFornecedor.vue'
import EditarUsuario from '../views/EditarUsuario.vue'
import EditarFornecedor from '../views/EditarFornecedor.vue'
import AdicionarProduto from '../views/AdicionarProduto.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/listas',
    name: 'ListaUsuario',
    component: ListaUsuario
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/lista-de-produtos',
    name: 'ListaProduto',
    component: ListaProduto
  },
  {
    path: '/produtos-fornecedor',
    name: 'ListaFornecedor',
    component: ListaFornecedor
  },
  {
    path:'/editar-usuario',
    name:'EditarUsuario',
    component: EditarUsuario
  },
  {
    path:'/editar-fornecedor',
    name:'EditarFornecedor',
    component: EditarFornecedor
  },
  {
    path: '/adicionar-produto',
    name: 'AdicionarProduto',
    component: AdicionarProduto
  }
]

const router = createRouter({
  
  history: createWebHistory(process.env.BASE_URL),
  routes
  
})
console.log(router)
export default router
