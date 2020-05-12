import i18next from 'i18next';
import VueI18Next from '@panter/vue-i18next';
import resources from '../i18n/index.js';

export default async ({ app, Vue }) => {
  await i18next.init({
    lng: 'pt-BR',
    resources,
  });
  Vue.use(VueI18Next);
  app.i18n = new VueI18Next(i18next);
};
