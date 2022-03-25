import { createApp } from 'vue';
import LangResources from './langResources';
import Router from './router';

import FontAwesomeIcon from './styles/fontawesome';
import './styles/index.scss';

import App from './App.vue';


createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(LangResources)
    .use(Router)
    .mount('#app');
