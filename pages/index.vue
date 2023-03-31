<template>
    <div
        class="relative h-[90vh] w-100 bg-no-repeat bg-cover bg-bottom bg-[url('https://www.stock-app.info/media/wp-content/uploads/2020/12/3633762_s-2.jpg')]">
        <div class="z-10 absolute w-full h-full flex justify-center items-center">
            <div class="text-center w-1/2">
                <h1 class="text-8xl font-serif mb-10 text-white">Find Todo</h1>
                <Search></Search>
            </div>
        </div>
        <div class="z-1 absolute w-full h-full opacity-50 bg-black"></div>
    </div>
</template>

<script setup>
    useHead({
        title: "Todo App"
    })
</script>