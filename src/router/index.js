import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import FormacionView from '../views/FormacionView.vue';
import AgenciaView from '../views/AgenciaView.vue';
import ConocenosView from '../views/ConocenosView.vue';
import ContactoView from '../views/ContactoView.vue';
import CanalEticoView from '../views/CanalEticoView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/formacion',
    name: 'formacion',
    component: FormacionView
  },
  {
    path: '/agencia',
    name: 'agencia',
    component: AgenciaView
  },
  {
    path: '/conocenos',
    name: 'conocenos',
    component: ConocenosView
  },
  {
    path: '/contacto',
    name: 'contacto',
    component: ContactoView
  },
  {
    path: '/canalEtico',
    name: 'canalEtico',
    component: CanalEticoView
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
