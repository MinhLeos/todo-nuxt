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
        <NewKeyBoard></NewKeyBoard>
    </div>
</template>

<script setup>
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
</script>