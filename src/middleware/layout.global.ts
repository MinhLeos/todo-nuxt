export default defineNuxtRouteMiddleware((to, from) => {
    const isHaveTodoPath = to.path.includes('/todo/')
    if(isHaveTodoPath) {
      to.meta.layout = 'custom'
    }
    const isLoaded = useState('is-loaded')
    if (!isLoaded.value && to.path !== '/') {
       return navigateTo('/')
    }
  })