<template>
    <div>
        <!-- use custom layout -->
        <NuxtPage />
    </div>
</template>

<script setup>
    definePageMeta({
        layout: "custom",
        middleware: 'admin'
    })
</script>