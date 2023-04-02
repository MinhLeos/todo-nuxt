<template>
    <div class="mt-24 flex">
        <TodoSideBar :filter="filter"></TodoSideBar>
        <div class="w-[70%] mb-16">
            <TodoItem v-for="todo in todosList" :key="todo.id" :todo="todo"></TodoItem>
            
            <!-- <TodoItem></TodoItem>
            <TodoItem></TodoItem> -->

            <!-- <ItemTodo></ItemTodo>
            <ItemTodo></ItemTodo> -->
        </div>
    </div>
</template>
<script setup>
    // import ItemTodo from '../Todo/Item.vue'
    const route = useRoute()
    const filter = ref(route.query.filterValue || '')

    watch(() => route.query, () => {
        filter.value = route.query.filterValue || ''
    })

    const { todosList } = useTodos()    
</script>