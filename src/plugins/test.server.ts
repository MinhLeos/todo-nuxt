import { useShowNotification } from '@/stores/noti'

export default defineNuxtPlugin(nuxtApp => {
    const title = useState('title-server', () => 'Todo App Server')
    console.log('server : title-server', title.value)

    const title_client = useState('title-client')
    console.log('server : title-client', title_client.value)
    console.log('------------------------------------')
    const notiPinia = useShowNotification()
    console.log('notiPinia.isShowNoti', notiPinia.isShowNoti)
    console.log('------------------------------------')
  })