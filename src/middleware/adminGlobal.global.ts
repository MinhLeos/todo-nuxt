export default defineNuxtRouteMiddleware((to, from) => {
    const path = useState('path', () => '/')
    const isLogin = useState('login', () => false)
    const isLoginAdmin = useState('login-admin', () => false)
    if (to.path.includes('/todo/')) {
        if (!isLoginAdmin.value) {
            // Chạy trên server nên ko dùng alert được
            // alert('You do not have permission to access this page. Please login as admin to continue to this page!')
            path.value = to.path
            return navigateTo('/auth/login')
        }
    }
})