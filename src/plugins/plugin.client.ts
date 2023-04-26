import { useShowNotification } from '@/stores/noti'
export default defineNuxtPlugin(nuxtApp => {
    console.log('-------------plugin.client.ts')
    console.log('____________________________________________')
    const notiPinia = useShowNotification()
    console.log('notiPinia.isShowNoti', notiPinia.isShowNoti)
    console.log('____________________________________________')
  })