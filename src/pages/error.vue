<template>
    <div class="flex h-screen justify-center items-center flex-col">
        <h2 class="text-9xl">{{ 404 }}</h2>
        <p class="mt-7 text-4xl mb-4">Page not found </p>
        <NuxtLink to="/">Go to Home Page</NuxtLink>
    </div>
</template>

<script setup>
    definePageMeta({
        layout: false
    })
</script>