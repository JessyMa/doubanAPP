import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/Index/Index'
import Broadcast from '../pages/Broadcast/Broadcast'
import AudioBook from '../pages/AudioBook/AudioBook'
import Group from '../pages/Group/group'
import Mine from '../pages/Mine/Mine'

import Film from '../pages/AudioBook/film'
import Read from '../pages/AudioBook/read'
import City from '../pages/AudioBook/city'
import Tv from '../pages/AudioBook/tv'
import Music from '../pages/AudioBook/music'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/broadcast',
      name: 'Broadcast',
      component: Broadcast
    },
    {
      path: '/audioBook',
      name: 'AudioBook',
      component: AudioBook,
      children:[
        {path:'',component:Film},
        {path:'film',component:Film},
        {path:'read',component:Read},
        {path:'tv',component:Tv},
        {path:'music',component:Music},
        {path:'city',component:City},
      ]
    },
    {
      path: '/group',
      name: 'Group',
      component: Group
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    },
    {
      path: '/Index',
      redirect: '/'
    },
    {
      path: '*',
      redirect: '/'
    },
  ]
})
