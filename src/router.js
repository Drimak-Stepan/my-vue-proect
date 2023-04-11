import Homepage from "./pages/Homepage";
import Apartment from "./pages/Apartment";
import ErrorPage from "./pages/ErrorPage";
import LoginPage from "./pages/Login";
import RegistrationPage from "./pages/Registration";

import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: Homepage,
    name: "homepage",
  },
  {
    path: "/apartments/:id",
    component: Apartment,
    name: "apartment",
  },
  {
    path: "/login",
    component: LoginPage,
    name: "login-page",
  },
  {
    path: "/registration",
    component: RegistrationPage,
    name: "registration-page",
  },
  {
    path: "/:pathMatch(.*)",
    component: ErrorPage,
    name: "error-page",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
