import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import authentication from "@/plugins/authentication"

Vue.config.productionTip = false
Vue.use(authentication)
Vue.$keycloak
  .init({checkLoginIframe: false })
  .success(() => {
    new Vue({
      vuetify,
      router,
      render: h => h(App)
    }).$mount('#app')
  });
