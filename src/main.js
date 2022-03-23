import { createApp } from 'vue';
import LangResources from './langResources';
import Router from './router';

import App from './App.vue';

createApp(App)
    .use(LangResources)
    .use(Router)
    .mount('#app');
