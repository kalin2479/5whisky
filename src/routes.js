import Sweet from '@/component/sweetComponent.vue'
import Home from '@/component/homeComponent.vue'

const routes = [
  // { path: '/' },
  { path: '/', component: Home, name: 'home' },
  { path: '/whisky/:id', component: Sweet, name: 'sweet' }
]

export default routes
