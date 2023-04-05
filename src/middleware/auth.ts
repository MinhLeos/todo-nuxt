export default defineNuxtRouteMiddleware((to, from) => {
    const isLogin = useState('login')
    const isLoginAdmin = useState('login-admin')
    const path = useState('path')

    if (!isLogin.value && !isLoginAdmin.value) {
        alert('Please login to continue to this page!')
        path.value = to.path
      return navigateTo('/auth/login')
    }
  })