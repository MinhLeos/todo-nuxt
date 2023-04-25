import noti from './noti';
export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(noti);
});