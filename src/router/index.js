import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import RegisterKnight from '@/views/RegisterKnight.vue';
import ListKnights from '@/views/ListKnights.vue';
import ViewKnight from '@/views/ViewKnight.vue';
import EditKnight from '@/views/EditKnight.vue';

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
  },
  {
    path: '/view',
    name: 'ViewKnight',
    component: ViewKnight
  },
  {
    path: '/edit',
    name: 'EditKnight',
    component: EditKnight
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
