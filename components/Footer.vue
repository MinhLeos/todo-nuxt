<template>
    <footer class="footer">
        <div class="footer-div">
            <p class="footer-div-all">Total: {{ todoLength.length }}</p>
            <p class="footer-div-done">Done: {{ todoLength.doneLength }}</p>
        </div>
    </footer>
</template>

<script setup>
    const { todosList, getTodosLength } = useTodos()
    const todoLength = reactive({length: 0, doneLength: 0})
    watch(todosList, () => {
        todoLength.length = getTodosLength().length
        todoLength.doneLength = getTodosLength().doneLength
    }, {immediate: true})
</script>

<style lang="scss" scoped>
@import '../assets/scss/footer.scss'
</style>