<template>
    <div
        class="relative h-[90vh] w-100">
        <div class="z-10 absolute w-full h-full flex justify-center items-center -mt-24">
            <div class="text-center w-1/2">
                <h1 class="text-8xl text-[#9c9191] font-serif mb-10">Find Todo</h1>
                <Search></Search>
            </div>
        </div>
        <!-- <div class="z-1 absolute w-full h-full opacity-50 bg-black"></div> -->
    </div>
</template>

<script setup>
    useHead({
        title: "Todo App"
    })
</script>