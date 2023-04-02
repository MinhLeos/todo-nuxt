<template>
    <!-- Todo Item -->
    <div class="w-[70%] lg:w-[50%] mx-auto my-24 ">
        <div v-if="todo" class="shadow border w-full overflow-hidden mb-5 cursor-pointer">
            <div class="flex items-center justify-center my-6">
                <h4 class="text-center text-2xl mr-10">{{ todo.name }}</h4>
                <p :class="status.class" class="bg-[blue] text-white rounded-full px-4">{{ status.title }}</p>
            </div>
            <div class="mx-10 mb-4">
                <ul>
                    <li class="" v-for="des in listDes" :key="des">{{ des }}</li>
                </ul>
            </div>
            <p class="text-center">id: {{ todo.id }}</p>
            <p class="text-center mb-4">Created at: <i>{{ new Date(todo.createdAt).toISOString() }}</i></p>
            <div class="flex items-center justify-center mb-4">
                <button class="w-[100px] block mr-4 bg-[blue] text-white">Edit</button>
                <button class="w-[100px] block mr-4 bg-[red] text-white">Delete</button>
            </div>
        </div>
    </div>
    <!-- Todo Item -->
</template>

<script setup>
    const route = useRoute()
    const todoId = route.params.id
    const { findOneById } = useTodos() 
    const todo = findOneById(+todoId)

    if(!todo){
        throw createError({
            statusCode: 404,
            message: `Car with id of ${todoId} does not exist`
        })
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
        if(todo?.description) {
            const list = todo.description.split("\n");
        return list;
        }
        return ['']
    });
</script>