<template>
    <div>
        <Dialog @close="confirmError" title="Invalid Input" :open="inputIsInvalid">
            <template #default>
                <p>Unfortunately, at least one input value is invalid.</p>
                <p>Please check all inputs and make sure you enter at least a few characters into each input field.</p>
            </template>
            <template #actions>
                <Button @click="confirmError">Okay</Button>
            </template>
        </Dialog>
        <h2 class="edit-todo-header text-4xl text-center text-[#8797a5]">Edit Todo</h2>
        <!-- <Wrapper>
        <form class="edit-todo-form">
            <Input :input-value="name" input-name="edit-todo-name" @change-input="changeName"></Input>
            <div class="edit-todo-form-div">
                <label for="description">Description</label>
                <textarea id="description" name="description" @input="changeDescription">{{ description }}</textarea>
            </div>
        </form>
        <Button @click="handleSubmitEdit" title="Save"></Button>
    </Wrapper> -->

        <!-- use Custom layout -->
        <NuxtLayout name="wrapper">
            <form class="edit-todo-form">

                <!-- <div class="edit-todo-form-div">
                <label for="name">Name</label>
                <input id="name" name="name" :value="name" @input="changeName"/>
            </div> -->
                <Input :input-value="name" input-name="edit-todo-name" @change-input="changeName"></Input>
                <div class="edit-todo-form-div">
                    <label for="description">Description</label>
                    <textarea id="description" name="description" @input="changeDescription">{{ description }}</textarea>
                </div>
            </form>
            <Button @click="handleSubmitEdit" title="Save"></Button>
        </NuxtLayout>
    </div>
</template>

<script setup>
//Route Validate
// definePageMeta({
//   validate: async (route) => {
//     // Check if the id is made up of digits
//     return /^\d+$/.test(route.params.id)
//   }
// })
const route = useRoute()
const router = useRouter()
const { todosList, editTodo, findOneById } = useTodos()
const todoId = route.params.id

const inputIsInvalid = ref(false)
const todo = findOneById(todoId)
if (!todo) {
    throw createError({
        statusCode: 404,
        message: `Car with id of ${todoId} does not exist`
    })
}

const { name, description } = toRefs(todo)

function changeName(inputValue) {
    name.value = inputValue
    // name.value = event.target.value
}
function changeDescription(event) {
    description.value = event.target.value
}
function handleSubmitEdit() {
    if (name.value.trim() === '' || description.value.trim() === '') {
        inputIsInvalid.value = true
        return
    }
    editTodo(todoId, name.value, description.value)
    router.push('/todos-list')
}
function confirmError() {
    inputIsInvalid.value = false
}
</script>

<style lang="scss" scoped>
@import '../../../assets/scss/edit-todo.scss';
</style>