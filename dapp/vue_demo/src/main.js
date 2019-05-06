import Vue from 'vue'
import App from './App.vue'
import 'lib-flexible';
import Prism from 'prismjs'
// Prism.highlightAll()
Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')