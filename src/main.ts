import { createApp } from 'vue';
import './assets/scss/app.scss';
import App from './App.vue';
import './samples/node-api';

createApp(App)
    .mount('#app')
    .$nextTick(() => {
        postMessage({ payload: 'removeLoading' }, '*');
    });
