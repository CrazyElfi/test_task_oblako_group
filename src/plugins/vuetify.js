import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

import ru from 'vuetify/lib/locale/ru'
// import en from 'vuetify/lib/locale/en'

export default new Vuetify({
  lang: {
    locales: { ru },
    current: 'ru',
  },
});
