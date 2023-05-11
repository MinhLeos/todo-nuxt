<template>
    <div>
        <div class="mt-24 flex">
            <TodoSideBar :filter="filter"></TodoSideBar>
            <div v-if="Array.isArray(todos) && todos.length > 0" class="list-todo-item">
                <TodoItem 
                    v-for="(todo, index) in todos" 
                    :index="index"
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
        <div class="page">
            <!-- <p v-if="Array.isArray(todos)">Page: {{ page }}</p> -->
            <div>
                <button v-ripple class="page-button" @click="previous" v-if="page > 1">Previous</button>
                <button v-ripple class="page-button" @click="next" v-if="Array.isArray(todos) && todos.length == itemPerPage">Next</button>
            </div>
        </div>
    </div>
</template>
<script setup>

    // Chú ý về perfomance >>> khi show list todos >>> popup show when click delete todo >>> có nhiều if >>> ảnh hương perfomance
    // Khắc phục bằng cách chỉ dùng 1 popup  >>> chưa làm

    // import ItemTodo from '../Todo/Item.vue'
    const { $notification } = useNuxtApp()
    const nuxtApp = useNuxtApp()
    const pending = ref(false)
    //use pinia
    import { useTodoStore } from '@/stores/todos.js'
    const todoStore = useTodoStore()

    // const localStorageTodos = useLocalStorage('todos', {})
    // console.log('localStorage', localStorageTodos.value)

    const sessionStorageTodos = useSessionStorage('todos', {})
    console.log('sessionStorageTodos', sessionStorageTodos.value)
    const sessionStoragePage = useSessionStorage('page', 1)

    const route = useRoute()
    // const filterValue = ref(route.query.filterValue || '')
    // const isFilter = ref(!!route.query.filter)
    // const searchValue = ref(route.query.searchValue || '')
    // const isSearch = ref(!!route.query.search)
    const { todosList, deleteOneTodo } = useTodos()    
    const todoListCurrent = ref(todoStore.todosList)

    const search = useState('search')
    const isSearch = useState('is-search')
    const filter = useState('filter')
    const isFilter = useState('is-filter')

    const page = ref(sessionStoragePage.value);
    const itemPerPage = ref(10)
    const todos = ref()
    
    // ******useAsyncData*********
    // ********* Notes **************
        // Chú ý khi dùng useAsyncData ( nếu chuyển page khi click) thì sẽ phải đợi useFetch chạy xong mới chuyển 
        // còn nếu dùng useLazyAsyncData thì sẽ chuyển page ngay lập tức dù API chưa call xong
        // Khi dùng useAsyncData với options có watch ( dùng với api thay đổi theo id ...) >>> API vẫn dc call đúng id mới
        // và nếu API trước chưa chạy xong thì vẫn tiếp tục chạy 
    // ********* Notes **************

    // const getTodos = async () => {
    //         console.log('call API')
    //         await clearNuxtData('todos') // nếu ko dùng thì khi F5 sẽ ko call lại API
    //         const { data, error } = await useAsyncData(
    //         'todos',
    //         () => $fetch( `/api/todos`, {
    //             method: 'GET',
    //             //baseURL: 'http://localhost:3000',
    //             params: {
    //             page: page.value,
    //             itemPerPage: itemPerPage.value,
    //             }
    //         } )
    //     );
    //     todos.value = [...data.value]
    // }

    // ********* useFetch *************
    // ********* Notes **************
        // Chú ý khi dùng useFetch ( nếu chuyển page khi click) thì sẽ phải đợi useFetch chạy xong mới chuyển 
        // còn nếu dùng useLazyFetch thì sẽ chuyển page ngay lập tức dù API chưa call xong
        // khi dùng useFetch với options có watch ( dùng với api thay đổi theo id ...) >>> sẽ chỉ call đúng với id ban đầu
        // và nếu API trước chưa chạy xong thì sẽ bị cancel
    // ********* Notes **************

    const getTodos = async () => {
        //Nếu đưa call API ra bên ngoài chứ ko đặt trong hàm để call thì ko gặp trường hợp mô tả bên dưới
        // Khi gọi hàm này ở onMouted thì phải có await clearNuxtData() hoặc await nextTick()
        // Nếu ko có await clearNuxtData() hoặc await nextTick() thì thay vì gọi ở onMounted
        // ta sẽ gọi ở nuxt Hook "page:finish"


        // await clearNuxtData() // nếu ko dùng thì khi F5 lại sẽ ko call API
        // await nextTick() //nếu ko dùng thì khi F5 lại sẽ ko call API
        if(sessionStorageTodos.value[page.value] && sessionStorageTodos.value[page.value].length > 0) {
            todos.value = [...sessionStorageTodos.value[page.value]]
            return
        }
        console.log('call API')
        const { data, error } = await useFetch(
            '/api/todos',
            {
                method: 'GET',
                // baseURL: 'http://localhost:3000',
                params: {
                    page: page.value,
                    itemPerPage: itemPerPage.value,
                }
            }
            // ,{initialCache: false}
            //do API cache nên sẽ ko gửi request khác >>> dùng initialCache: false  để tránh điều này
            // 1 số trang nói initialCache ko còn dc hỗ trợ cho useFetch nữa
        );

        console.log('Error', error.value)
        if (error.value) {
            $notification({
                active: true,
                status: 'error',
                title: 'Get List Todos Fail',
                content: error.value || 'Get list todos fail!',
                timeout: 6000,
            })
            return
        }
        console.log('12345', data)
        sessionStorageTodos.value[page.value] = [...data.value]
        todos.value = [...data.value]
        $notification({
            active: true,
            status: 'sucess',
            title: 'Get List Todos Success',
            content: 'Get list todos success',
            timeout: 6000,
        })
    }
    // onMounted(() => {
    //     getTodos()
    // })
    nuxtApp.hook("page:start", () => {
        pending.value = true
    })
    nuxtApp.hook("page:finish", () => {
        pending.value = false
        getTodos()
    })
    const previous = () => {
        if( page.value != 1 ){
            page.value = page.value - 1 ;
            sessionStoragePage.value = page.value
        }
    }

    const next = () => {
        if( todos.value.length == itemPerPage.value ){
            page.value = page.value + 1;
            sessionStoragePage.value = page.value
        }
    }
    watch([page, itemPerPage], () => {
        getTodos()
    })
    //use pinia
    watchEffect(() => {
        if (!!search.value && isSearch.value) {
            const list = todoStore.todosList.filter(todo => {
                return todo.name.toLowerCase().includes(search.value.trim().toLowerCase())
            })
            todoListCurrent.value = list
        } else {
            todoListCurrent.value = todoStore.todosList
        }

        if (!!filter.value && isFilter.value) {
            const list = todoListCurrent.value.filter(todo => {
                if (todo.isDone && filter.value.trim().toLowerCase() === 'done') {
                    return true
                }
                if (!todo.isDone && filter.value.trim().toLowerCase() === 'new') {
                    return true
                }
                return false
            })
            todoListCurrent.value = list
        }
    })
    function deleteTodoItem(id) {
        if (todoStore.todosList.length === 1) {
            return
        }
        todoStore.deleteOneTodo(id)
        $notification({
            active: true,
            status: 'success',
            title: 'Delete',
            content: 'Delete todo success!'
        })
    }

    // watchEffect(() => {
    //     if (!!search.value && isSearch.value) {
    //         const list = todosList.filter(todo => {
    //             return todo.name.toLowerCase().includes(search.value.trim().toLowerCase())
    //         })
    //         todoListCurrent.value = list
    //     } else {
    //         todoListCurrent.value = todosList
    //     }

    //     if (!!filter.value && isFilter.value) {
    //         const list = todoListCurrent.value.filter(todo => {
    //             if (todo.isDone && filter.value.trim().toLowerCase() === 'done') {
    //                 return true
    //             }
    //             if (!todo.isDone && filter.value.trim().toLowerCase() === 'new') {
    //                 return true
    //             }
    //             return false
    //         })
    //         todoListCurrent.value = list
    //     }
    // })

    // watchEffect(() => {

    //     // filter
    //     filterValue.value = route.query.filterValue || ''
    //     isFilter.value = !!route.query.filter

    //     if (isFilter.value && filterValue.value) { 
    //         const list = todosList.filter(todo => {
    //             if (todo.isDone && filterValue.value.trim().toLowerCase() === 'done') {
    //                 return true
    //             }
    //             if (!todo.isDone && filterValue.value.trim().toLowerCase() === 'new') {
    //                 return true
    //             }
    //             return false
    //         })
    //         todoListCurrent.value = list
    //     } else if (!isFilter.value && !filterValue.value) {
    //         todoListCurrent.value = todosList
    //     }
    // })

    // watchEffect(() => {
    //     //Search
    //     searchValue.value = route.query.searchValue || ''
    //     isSearch.value = !!route.query.search

    //     if (isSearch.value && searchValue.value) { 
    //         const list = todosList.filter(todo => {
    //             return todo.name.toLowerCase().includes(searchValue.value.trim().toLowerCase())
    //         })
    //         todoListCurrent.value = list
    //     } else if (!isSearch.value && !searchValue.value) {
    //         todoListCurrent.value = todosList
    //     }
    // })

    // function deleteTodoItem(id) {
    //     if (todoStore.todosList.length === 1) {
    //         return
    //     }
    //     deleteOneTodo(id)
    // }
</script>

<style lang="scss" scoped>
    .list-todo-item {
        @apply max-h-[70vh] w-[100%] overflow-auto;

        &::-webkit-scrollbar {
            @apply hidden w-0;
        }
    }
    .page {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 1rem;

        &-button {
            width: 150px;
            padding: 5px 10px;
            margin-left: 1rem;
            margin-top: 1rem;
            border: 1px solid transparent;
            border-radius: 10px;
            background-color: rgba(0,145,168);
            color: #ffffff;

            &:hover {
                opacity: 0.7;
            }
        }
    }
</style>