<template>
    <button class="btn" :class="props.action" :disabled="disable">
        <slot>{{ props.title }}</slot>
    </button>
</template>

<script setup>
    const props = defineProps(['title', 'action', 'disable'])
</script>

<style lang="scss" scoped>
@import '../assets/scss/button.scss';
</style>