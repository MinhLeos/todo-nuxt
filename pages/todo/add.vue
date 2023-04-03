<template>
    <Dialog :open="inputIsInvalid" @close="confirmError" title="Invalid Input">
        <template #default>
            <p>Unfortunately, at least one input value is invalid.</p>
            <p>Please check all inputs and make sure you enter at least a few characters into each input field.</p>
        </template>
        <template #actions>
            <Button @click="confirmError">Okay</Button>
        </template>
    </Dialog>
    <h2 class="edit-todo-header text-center text-2xl mt-4" :class="classAdd">Add Todo</h2>
    <Wrapper>
        <form class="edit-todo-form">

            <!-- <div class="edit-todo-form-div">
                <label for="name">Name</label>
                <input id="name" name="name" v-model="todoName" v-focus/>
            </div> -->
            <Input input-name="add-todo-name" :input-value="todoName" @change-input="handleChangeInput"></Input>
            <div class="edit-todo-form-div">
                <label for="description">Description</label>
                <textarea id="description" name="description" v-model="todoDescription"></textarea>
            </div>
        </form>
        <Button @click="handleSubmitEdit" title="Save"></Button>
    </Wrapper>
</template>

<script setup>
    const router = useRouter()
    const todoName = ref('')
    const todoDescription = ref('')
    const inputIsInvalid = ref(false)
    const classAdd = ref('')
    const { addTodo } = useTodos()

    async function handleSubmitEdit() {
        if (todoName.value.trim() === '' || todoDescription.value.trim() === '') {
            inputIsInvalid.value = true
            return
        }
        addTodo(todoName.value, todoDescription.value)
        router.push('/todos-list')
    }
    function confirmError() {
        inputIsInvalid.value = false
    }

    function handleChangeInput(inputValue) {
        todoName.value = inputValue
    }

    // demo use lifecycle hooks : onMounted và onUnmounted
    let timer
    onMounted(() => {
        timer = setInterval(() => {
            if (classAdd.value) {
                classAdd.value = ''
            } else {
                classAdd.value = 'change-color'
            }
        }, 1000)
    })
    onUnmounted(() => {
        if (timer) {
            clearInterval(timer)
        }
    })
</script>

<style lang="scss" scoped>
@import '../../assets/scss/edit-todo.scss';
</style>