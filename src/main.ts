import { createApp } from 'vue';
import router from '@src/router/index.js';
import store from '@src/store/index.js';
// import vuetify from '@src/plugins/vuetify';
// import Vuetify from 'vuetify';

import App from '@src/App.vue';
import '@src/index.css';

createApp(App)
  // .use(Vuetify)
  .use(store)
  .use(router)
  .mount('#app');

