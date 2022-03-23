import { createApp } from 'vue';
import LangResources from './langResources';

import App from './App.vue';

createApp(App)
    .use(LangResources)
    .mount('#app');
