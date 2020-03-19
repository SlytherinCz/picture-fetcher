import Vue from 'vue'
import App from './App.vue'
import ImageFetcherServicePlugin from "./services/ImageFetcherService";

Vue.config.productionTip = false

Vue.use(new ImageFetcherServicePlugin())

new Vue({
  render: h => h(App),
}).$mount('#app')
