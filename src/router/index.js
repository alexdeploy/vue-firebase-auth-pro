import { createRouter, createWebHistory } from 'vue-router'
import CentralSignIn from '../views/SignIn/CentralSignIn.vue'
import SignUp from '../views/SignUp/SignUp.vue'
import LateralSignIn from '../views/SignIn/LateralSignIn.vue'
import FullSignIn from '../views/SignIn/FullSignIn.vue'
import Success from '../views/Success.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: FullSignIn
    },
    {
      path: '/sign-up',
      name: 'sign-up',
      component: SignUp
    },
    {
      path: '/central-sign-in',
      name: 'central-sign-in',
      component: CentralSignIn
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
    {
      path: '/success',
      name: 'success',
      component: Success
    }
  ]
})

export default router
