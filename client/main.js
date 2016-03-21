import Vue from 'vue'
import App from './App'
import Router from 'vue-router'
import Resource from 'vue-resource'
import Routes from './routes'

Vue.use(Router)
Vue.use(Resource)

let router = new Router()

router.map(Routes)

router.beforeEach(function () {
  window.scrollTo(0, 0)
})

router.start(App, '#app')
