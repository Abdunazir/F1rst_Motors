import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Login from "../views/Login.vue";
import Cars from "../views/Cars.vue";
import CarInfo from "../views/CarInfo.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },

  {
    path: "/login",
    name: "login",
    component: Login,
  },

  {
    path: "/cars",
    name: "cars",
    component: Cars,
  },
  {
    path: "/car-info/:id",
    name: "car-info",
    component: CarInfo,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
