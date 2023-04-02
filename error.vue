<template>
    <div class="flex h-screen justify-center items-center flex-col">
        <h2 class="text-9xl">{{ error?.statusCode }}</h2>
        <p class="mt-7 text-4xl mb-4">{{ error?.message }}</p>
        <NuxtLink to="/">Go to Home Page</NuxtLink>
    </div>

</template>

<script setup>
    const error = useError();
</script>