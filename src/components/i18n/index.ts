// @ts-ignore
import Vue from 'vue';
// @ts-ignore
import VueI18n from 'vue-i18n';
Vue.use(VueI18n);
import zh from './config/zh'
import en2 from './config/en'
const i18n =new VueI18n({
  locale:'zh',
  silentTranslationWarn: true,
  messages:{
    zh,
    en2
  }
})
export default  i18n;
