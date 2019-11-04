import Vue from 'vue'
import App from './App.vue'
import ElmentUI from 'element-ui'
import 'common/css/index.css'
Vue.use(ElmentUI)
import 'common/stylus/index.styl'
import store from './store'
import router from "./router"
import VueDraggableResizable from 'vue-draggable-resizable'
import 'vue-draggable-resizable/dist/VueDraggableResizable.css'
Vue.component('vue-draggable-resizable', VueDraggableResizable)
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
