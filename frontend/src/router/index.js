import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Assignment1 from '@/components/Assignment1.vue'
import Assignment2 from '@/components/Assignment2.vue'
import Assignment3 from '@/components/Assignment3.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Assignment1',
      name: 'Assignment1',
      component: Assignment1
    },
    {
      path: '/Assignment2',
      name: 'Assignment2',
      component: Assignment2
    },
    {
      path: '/Assignment3',
      name: 'Assignment3',
      component: Assignment3
    }
  ]
})
