import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import ElementPlus from 'element-plus';
import './index.css'
import 'element-plus/dist/index.css'

const app = createApp(App).use(router);
app.use(ElementPlus);

app.mount("#app");

