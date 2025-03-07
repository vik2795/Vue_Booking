
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import "vue-toastification/dist/index.css"

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import Toast from 'vue-toastification'



const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
