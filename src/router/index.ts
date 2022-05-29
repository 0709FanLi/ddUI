import { h } from 'vue'
import { createWebHistory, createRouter } from 'vue-router'
import Home from '@/views/home/index.vue'
import Doc from '@/views/doc/index.vue'
import Switch from '@/components/SwitchDemo.vue'
import Button from '@/components/ButtonDemo.vue'

import Markdown from '@/components/Markdown.vue'

const md = (filename: string) => {
  console.log('filename', h(Markdown, { path: `../../markdown/${filename}.md`, key: filename }))
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
      component: Doc,
      children: [
        { path: 'intro', component: md('intro') },
        { path: 'install', component: md('install') },
        { path: 'get-started', component: md('get-started') },
        {
          path: 'switch',
          component: Switch
        },
        {
          path: 'button',
          component: Button
        }
      ]
    }
  ]
})

export default router
