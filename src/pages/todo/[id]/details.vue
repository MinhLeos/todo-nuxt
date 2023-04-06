<template>
    <div>
        <h2 class="text-center text-3xl text-[cadetblue] my-8">Todo Details</h2>
        <!-- <Wrapper>
        <div v-if="todo" class="todo-details">
            <div class="todo-details-header">
                <h4 class="">{{ todo.name }}</h4>
                <p :class="status.class" class="">{{ status.title }}</p>
            </div>
            <div class="todo-details-des">
                <ul class="text-start">
                    <li class="" v-for="des in listDes" :key="des">{{ des }}</li>
                </ul>
            </div>
            <p class="text-center">id: {{ todo.id }}</p>
            <p class="text-center mb-4">Created at: <i>{{ new Date(todo.createdAt).toISOString() }}</i></p>
        </div>
    </Wrapper> -->

        <!-- use Custom layout -->
        <NuxtLayout name="wrapper">
            <div v-if="todo" class="todo-details">
                <div class="todo-details-header">
                    <h4 class="">{{ todo.name }}</h4>
                    <p :class="status.class" class="">{{ status.title }}</p>
                </div>
                <div class="todo-details-des">
                    <ul class="text-start">
                        <li class="" v-for="des in listDes" :key="des">{{ des }}</li>
                    </ul>
                </div>
                <p class="text-center">id: {{ todo.id }}</p>
                <p class="text-center mb-4">Created at: <i>{{ new Date(todo.createdAt).toISOString() }}</i></p>
                <!-- <div class="flex items-center justify-center mb-4">
                <button class="w-[100px] block mr-4 bg-[blue] text-white">Edit</button>
                <button class="w-[100px] block mr-4 bg-[red] text-white">Delete</button>
            </div> -->
            </div>
        </NuxtLayout>
    </div>
</template>

<script setup>
// definePageMeta({
//     layout: "custom"
// })
const route = useRoute()
const todoId = route.params.id
const { findOneById } = useTodos()
const todo = findOneById(todoId)

if (!todo) {
    navigateTo('/error')
    // throw createError({
    //     statusCode: 404,
    //     message: `Car with id of ${todoId} does not exist`
    // })
    // throw new Error('error')
}

const status = computed(() => {
    if (todo.isDone) {
        return {
            class: "done",
            title: "Done",
        };
    }
    return {
        class: "active",
        title: "New",
    };
});
const listDes = computed(() => {
    if (todo?.description) {
        const list = todo.description.split("\n");
        return list;
    }
    return ['']
});
</script>

<style lang="scss" scoped>
@import '../../../assets/scss/todo-details.scss'
</style>