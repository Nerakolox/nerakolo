import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import AllIcon from 'vue-ionicons/dist/ionicons.js'
import('vue-ionicons/ionicons.css')

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(AllIcon)

app.mount('#app')
