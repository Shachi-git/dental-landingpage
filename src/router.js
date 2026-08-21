import { createRouter, createWebHashHistory } from "vue-router";

import Homepage from "./sections/homepage/Homepage.vue";
import Consultation from "./sections/consultation/Consultation.vue";

const routes = [
  { path: "/", name: "Homepage", component: Homepage },
  { path: "/consultation", name: "Consultation", component: Consultation },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
