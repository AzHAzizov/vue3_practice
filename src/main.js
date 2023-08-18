import { createApp } from 'vue'
import App from './App'
/* eslint-disable */

import components from "@/components/ui"


const app = createApp(App);

components.forEach(component => {
    app.component(component.name, component);
})

app.mount('#app')
