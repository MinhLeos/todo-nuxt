<template>
    <div>
        <Dialog :open="isShowDialog.todoIsDone" @close="confirmError" title="Edit">
            <template #default>
                <p>Unable to edit task done</p>
                <p>You cannot edit a task that has been completed before reopening the task.</p>
            </template>
            <template #actions>
                <Button @click="confirmError">Okay</Button>
            </template>
        </Dialog>
        <Dialog :open="isShowDialog.isDelete" @close="confirmDelete(false)" title="Delete">
            <template #default>
                <p id="next-tick" ref="nextTickDOM">You definitely want to delete this task?</p>
                <p>This will delete the data from memory and cannot be recovered. Are you sure you still want to continue?
                </p>
            </template>
            <template #actions>
                <Button @click="confirmDelete(false)">Cancel</Button>
                <Button @click="confirmDelete(true)">Delete</Button>
            </template>
        </Dialog>
        <!-- <Wrapper>
      <div class="todo-item-title">
          <h3 @click="showDetails" class="text-[#50d71e] cursor-pointer">{{ props.todo.name }}</h3>
          <p :class="status.class" @click="handleChangeStatus">{{ status.title }}</p>
      </div>
      <div @click="showDetails" class="todo-item-description cursor-pointer">
          <p class="truncate" v-for="des in listDes" :key="des">{{ des }}</p>
      </div>
      <p class="mt-4"><i>{{ new Date(props.todo.createdAt).toISOString() }}</i></p>
      <p><i>Id: {{ props.todo.id }}</i></p>
      <div class="mt-8">
          <Button title="Edit" action="edit" @click="handleClickEdit"></Button>
          <Button title="Delete" action="delete" :disable="isDisable" @click="deleteClick"></Button>
      </div>
  </Wrapper> -->

        <!-- use Custom layout -->
        <NuxtLayout name="wrapper">
            <div class="todo-item-title">
                <h3 @click="showDetails" class="text-[#50d71e] cursor-pointer">{{ props.todo.name }}</h3>
                <p :class="status.class" @click="handleChangeStatus">{{ status.title }}</p>
            </div>
            <div @click="showDetails" class="todo-item-description cursor-pointer">
                <p class="truncate" v-for="des in listDes" :key="des">{{ des }}</p>
            </div>
            <p class="mt-4"><i>{{ new Date(props.todo.createdAt).toISOString() }}</i></p>
            <p><i>Id: {{ props.todo.id }}</i></p>
            <div class="mt-8">
                <Button title="Edit" action="edit" @click="handleClickEdit"></Button>
                <Button title="Delete" action="delete" :disable="isDisable" @click="deleteClick"></Button>
            </div>
        </NuxtLayout>
    </div>
</template>

<script setup>
const props = defineProps(['todo', 'length']);
const emit = defineEmits(['delete'])

const isShowDialog = reactive({
    todoIsDone: false,
    isDelete: false
})

const isDisable = ref(false)
watch(() => props.length, (newValue) => {
    if (newValue === 1) {
        isDisable.value = true
    }
}, { immediate: true })

const { todosList, changeStatus } = useTodos()
function handleChangeStatus() {
    changeStatus(props.todo.id)
}

const listDes = computed(() => {
    const list = props.todo.description.split("\n");
    return list;
});
const status = computed(() => {
    if (props.todo.isDone) {
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

const router = useRouter();

function handleClickEdit() {
    if (props.todo.isDone) {
        isShowDialog.todoIsDone = true;
        return;
    }
    router.push("/todo/" + props.todo.id + "/edit");
}

function showDetails() {
    router.push("/todo/" + props.todo.id + "/details");
}
function confirmError() {
    isShowDialog.todoIsDone = false
}

function deleteClick() {
    if (todosList.length === 1) {
        return
    }
    isShowDialog.isDelete = true

    nextTick(() => {
        const element = document.querySelector('#next-tick')
        if (element && isShowDialog.isDelete === true) {
            element.style.color = 'red'
        }
    })
}
function confirmDelete(confirm) {
    isShowDialog.isDelete = false
    if (confirm) {
        emit('delete', props.todo.id)
    }
}
</script>


<style lang="scss" scoped>
@import '../../assets/scss/todo-item.scss';
</style>