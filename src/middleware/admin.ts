export default defineNuxtRouteMiddleware((to, from) => {
    const isLoginAdmin = useState('login-admin')
    const path = useState('path')

    if (!isLoginAdmin.value) {
        alert('You do not have permission to access this page. Please login as admin to continue to this page!')
        path.value = to.path
        return navigateTo('/auth/login')
    }
  })