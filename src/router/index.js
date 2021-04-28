import Vue from 'vue';
import VueRouter from 'vue-router';
import PageAccueil from "@/views/PageAccueil.vue";
import PageInformations from "@/views/PageInformations";
import PageContact from "@/views/PageContact";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: PageAccueil,
  },
  {
    path: '/infos',
    name: 'Infos',
    component: PageInformations,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: PageContact,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
