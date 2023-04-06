export default defineNuxtRouteMiddleware((to, from) => {
    const isHaveTodoPath = to.path.includes('/todo/')
    console.log('isHaveTodoPath', isHaveTodoPath)
    if(isHaveTodoPath) {
      to.meta.layout = 'custom'
    }
  })