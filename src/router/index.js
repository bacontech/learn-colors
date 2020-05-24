import Vue from 'vue'
import VueRouter from 'vue-router'
import ColorWindow from '../components/ColorWindow';

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Learn Colors',
    component: ColorWindow,
    props: { colorSet: 'primary' }
  },
  {
    path: '/secondary',
    name: 'Secondary Colors',
    component: ColorWindow,
    props: { colorSet: 'secondary' }
  },
  {
    path: '/quinn',
    name: 'Quinn\'s Colors',
    component: ColorWindow,
    props: { colorSet: 'quinn' }
  }
]

const router = new VueRouter({
  routes
})

export default router
