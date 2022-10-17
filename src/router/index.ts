import { h } from 'vue'
import { createWebHistory, createRouter } from 'vue-router'
import Home from '@/views/home/index.vue'
import Doc from '@/views/doc/index.vue'
import SwitchDoc from '@/views/doc/switch/index.vue'
import ButtonDoc from '@/views/doc/button/index.vue'
import AvatorDoc from '@/views/doc/avatar/index.vue'
import TagDoc from '@/views/doc/tag/index.vue'

import Markdown from '@/components/Markdown.vue'

const md = (filename: string) => {
  return h(Markdown, { path: `../../markdown/${filename}.md`, key: filename })
}

const history = createWebHistory()
const router = createRouter({
  history,
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: Home },
    {
      path: '/doc',
      // redirect: '/doc/intro',
      component: Doc,
      children: [
        { path: 'intro', component: md('intro') },
        { path: 'install', component: md('install') },
        { path: 'get-started', component: md('get-started') },
        {
          path: 'switch',
          component: SwitchDoc
        },
        {
          path: 'button',
          component: ButtonDoc
        },
        {
          path: 'avatar',
          component: AvatorDoc
        },
        {
          path: 'tag',
          component: TagDoc
        }
      ]
    }
  ]
})

export default router
