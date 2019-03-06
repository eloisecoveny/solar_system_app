import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'


Vue.use(Vuetify)

export const eventBus = new Vue()

new Vue({
  el: '#app',
  render: h => h(App),
})
