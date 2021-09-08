import Vue from 'vue'
import { ValidationObserver, ValidationProvider } from 'vee-validate'

Vue.component('ValidationObserver', ValidationObserver)
Vue.component('ValidationProvider', ValidationProvider)
Vue.mixin({
  methods: {
    getValidationState({ dirty, validated, valid = null }) {
      if (dirty && validated && valid) {
        return null
      } else if (validated && valid) {
        return null
      } else if (validated) {
        return false
      } else {
        return null
      }
    },
  },
})
