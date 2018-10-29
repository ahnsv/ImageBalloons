import Vue from 'vue'
import popup from './Popup.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
new Vue({
    el: '#app',
    render: h => h(popup)
})