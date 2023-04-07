export default defineNuxtPlugin(nuxtApp => {
    const title = useState('title-server', () => 'Todo App Server')
    console.log('server : title-server', title.value)

    const title_client = useState('title-client')
    console.log('server : title-client', title_client.value)
  })