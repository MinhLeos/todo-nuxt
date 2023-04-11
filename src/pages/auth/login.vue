<template>
    <div>
        <Button title="Login" @click="login"></Button>
        <Button title="Login as Admin" @click="loginAdmin"></Button>
    </div>
</template>

<script setup>
    const isLogin = useState('login', () => false)
    const isLoginAdmin = useState('login-admin')
    const router = useRouter();
    const path = useState('path')
    function login(){
        console.log('login')
        console.log('path.value', path.value)
        console.log('isLogin', isLogin)
        isLogin.value = true
        console.log('isLogin after', isLogin)
        navigateTo(path.value)
        // router.back();
    }
    function loginAdmin(){
        isLoginAdmin.value = true
        navigateTo(path.value)
        // router.back();
    }
</script>