import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import RegisterKnight from '@/views/RegisterKnight.vue'
import ListKnights from '@/views/ListKnights.vue'

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/register',
    name: 'RegisterKnight',
    component: RegisterKnight
  },
  {
    path: '/lista',
    name: 'ListKnights',
    component: ListKnights
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
