import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

import './styles/quasar.styl'
import lang from 'quasar-framework/i18n/pt-br'
import 'quasar-extras/animate'
import 'quasar-extras/roboto-font'
import 'quasar-extras/material-icons'
import 'quasar-extras/fontawesome'
import 'quasar-extras/ionicons'
import Quasar from 'quasar'

import VueLayers from "vuelayers";
import "vuelayers/lib/style.css"; // needs css-loader
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faFire } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.use(Quasar, {
  config: {}, i18n: lang
 })

Vue.use(VueLayers);

library.add(faUser)
library.add(faFire)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
