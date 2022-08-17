import { createRouter, createWebHistory } from 'vue-router'
import SignIn from '../views/SignIn.vue'
import SignUp from '../views/SignUp.vue'
import LateralSignIn from '../views/SignIn/LateralSignIn.vue'
import FullSignIn from '../views/SignIn/FullSignIn.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: SignIn
    },
    {
      path: '/sign-up',
      name: 'sign-up',
      component: SignUp
    },
    {
      path: '/central-sign-in',
      name: 'sign-in',
      component: SignIn
    },
    {
      path: '/lateral-sign-in',
      name: 'lateral-sign-in',
      component: LateralSignIn
    },
    {
      path: '/full-sign-in',
      name: 'full-sign-in',
      component: FullSignIn
    },
  ]
})

export default router
