export default defineNuxtPlugin(nuxtApp => {
    const title = useState('title-server')
    console.log('client : title-server', title.value)

    const title_client = useState('title-client', () => 'Todo App Client')
    console.log('client : title-client', title_client.value)
  })