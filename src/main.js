import { createApp } from 'vue'
import { createPinia } from 'pinia'
import uiComponents from './ui-components'

import App from './App.vue'
import router from './router'

const app = createApp(App)
uiComponents.map(component => app.component(component.name,component))

app.use(createPinia())
app.use(router)

app.mount('#app')
