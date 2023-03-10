import Vue from 'vue'
import Keycloak from 'keycloak-js'

const options = {
<<<<<<< HEAD
  url: 'http://127.0.0.1:8403/auth',
=======
  url: 'http://localhost:8081/',
>>>>>>> 9fea7c981f866a3925977ba0bcc25dd1af911d0d
  realm: 'testRealm',
  clientId: 'frontEndVue'
}

const _keycloak = Keycloak(options)

const Plugin = {
  install(Vue) {
    Vue.$keycloak = _keycloak
  }
}

Plugin.install = Vue => {
  Vue.$keycloak = _keycloak
  Object.defineProperties(Vue.prototype, {
    $keycloak: {
      get() {
        return _keycloak
      }
    }
  })
}

Vue.use(Plugin)

export default Plugin
