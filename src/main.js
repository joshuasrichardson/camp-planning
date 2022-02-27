import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {mockAreas, defaultItems} from './mock-data.js'

let data = {
  campingAreas: mockAreas,
  areasToVisit: [],
  activitiesToDo: [],
  itemsToBring: [...defaultItems],
  defaultItems: [...defaultItems],
}

Vue.config.productionTip = false

new Vue({
  data,
  router,
  render: h => h(App)
}).$mount('#app')
