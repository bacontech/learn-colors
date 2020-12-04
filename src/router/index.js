import Vue from 'vue'
import VueRouter from 'vue-router'
import ColorWindow from '../components/ColorWindow';
import ShapesWindow from '../components/ShapesWindow';
import LettersWindow from '@/components/LettersWindow'

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
  },
  {
    path: '/shapes',
    name: 'Shapes',
    component: ShapesWindow
  },
  {
    path: '/letters',
    name: 'Letters',
    component: LettersWindow,
    props: { colorSet: 'quinn' }
  },
  {
    path: '/letters/ordered',
    name: 'Letters',
    component: LettersWindow,
    props: {
      colorSet: 'quinn',
      ordered: true
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
