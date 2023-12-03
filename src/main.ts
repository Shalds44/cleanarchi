import './assets/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import exo from './exoObj.js'
console.log(exo)
// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { FontAwesomeIcon } from '@/assets/fontAwesome'

const vuetify = createVuetify({
  components,
  directives
})

import {decoratorExample} from "@/decorator/decoratorExample";

const foo = new decoratorExample("foo")
const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(createPinia())
app.use(router)
app.use(vuetify)
app.mount('#app')
