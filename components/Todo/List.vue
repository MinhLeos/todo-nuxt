<template>
    <div class="mt-24 flex">
        <TodoSideBar :filter="filterValue"></TodoSideBar>
        <div v-if="todoListCurrent.length > 0" class="list-todo-item">
            <TodoItem 
                v-for="todo in todoListCurrent" 
                :key="todo.id" 
                :todo="todo" 
                :length="todosList.length"
                @delete="deleteTodoItem"
            >
            </TodoItem>
            
            <!-- <TodoItem></TodoItem>
            <TodoItem></TodoItem> -->

            <!-- <ItemTodo></ItemTodo>
            <ItemTodo></ItemTodo> -->
        </div>
        <div v-else class="ml-56 text-[red] text-xl">
            <p>Have no todo</p>
        </div>
    </div>
</template>
<script setup>
    // import ItemTodo from '../Todo/Item.vue'
    const route = useRoute()
    const filterValue = ref(route.query.filterValue || '')
    const isFilter = ref(!!route.query.filter)
    const searchValue = ref(route.query.searchValue || '')
    const isSearch = ref(!!route.query.search)
    const { todosList, deleteOneTodo } = useTodos()    
    const todoListCurrent = ref(todosList)

    watchEffect(() => {

        // filter
        filterValue.value = route.query.filterValue || ''
        isFilter.value = !!route.query.filter

        if (isFilter.value && filterValue.value) { 
            const list = todosList.filter(todo => {
                if (todo.isDone && filterValue.value.trim().toLowerCase() === 'done') {
                    return true
                }
                if (!todo.isDone && filterValue.value.trim().toLowerCase() === 'new') {
                    return true
                }
                return false
            })
            todoListCurrent.value = list
        } else if (!isFilter.value && !filterValue.value) {
            todoListCurrent.value = todosList
        }
    })

    watchEffect(() => {
        //Search
        searchValue.value = route.query.searchValue || ''
        isSearch.value = !!route.query.search

        if (isSearch.value && searchValue.value) { 
            const list = todosList.filter(todo => {
                return todo.name.toLowerCase().includes(searchValue.value.trim().toLowerCase())
            })
            todoListCurrent.value = list
        } else if (!isSearch.value && !searchValue.value) {
            todoListCurrent.value = todosList
        }
    })

    function deleteTodoItem(id) {
        if (todosList.length === 1) {
            return
        }
        deleteOneTodo(id)
    }
</script>

<style lang="scss" scoped>
    .list-todo-item {
        @apply max-h-[70vh] w-[100%] overflow-auto;

        &::-webkit-scrollbar {
            @apply hidden w-0;
        }
    }
</style>