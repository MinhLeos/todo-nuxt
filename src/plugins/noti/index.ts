import noti from './noti.client';
export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(noti);
});