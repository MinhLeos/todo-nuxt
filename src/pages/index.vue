<template>
    <!-- <div class="relative h-[90vh] w-100">
        <div class="z-10 absolute w-full h-full flex justify-center items-center -mt-24">
            <div class="text-center w-1/2">
                <h1 class="text-8xl text-[#9c9191] font-serif mb-10">Find Todo</h1>
                <Search></Search>
            </div>
        </div>
    </div> -->
    <div class="mt-24 ml-16 items-center text-center">
        <!-- <NewKeyBoard></NewKeyBoard> -->
        <button class="button-success" @click="showNotiSuccess">Show noti success</button>
        <button class="button-error" @click="showNotiError">Show noti error</button>
    </div>
</template>

<script setup>
const { $noti } = useNuxtApp()
// const title = useState('title-client')
// useHead({
//     title: title
// })
const title = useState('title-server')
useHead({
    title: title
})
definePageMeta({
    ssr: false
})

function showNotiSuccess() {
    console.log('run')
    $noti({
        active: true,
        status: 'sucess',
        title: 'Minh test',
        content: 'Notification success!'
    })
}
function showNotiError() {
    console.log('run')
    $noti({
        active: true,
        status: 'error',
        title: 'Minh test',
        content: 'Notification error!'
    })
}
</script>
<style scoped lang="scss">
    button {
        margin-top: 20rem;
        border: 1px solid #333;
        border-radius: 10px;
        margin-left: 10px;
        padding: 10px;
        color: #fff;
        border: 1px solid transparent;
    }
    button:hover {
        opacity: 0.8;
    }
    button:active{
        opacity: 0.4;
        color: transparent;
    }

    .button-success {
        background-color: #84c44b;
    }
    .button-error {
        background-color: #f0080896;
    }
</style>