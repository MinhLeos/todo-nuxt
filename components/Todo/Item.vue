<template>
  <!-- Todo Item -->
  <div class="shadow border w-[80%] mx-auto overflow-hidden mb-5">
    <div class="flex items-center justify-center my-6">
      <h4
        @click="showDetails"
        class="text-center text-xl text-[#b3b3b3] mr-10 cursor-pointer active:opacity-50 active:text-white"
      >
        {{ props.todo.name }}
      </h4>
      <p
        :class="status.class"
        class="bg-[blue] text-white rounded-full px-4 cursor-pointer active:opacity-50"
      >
        {{ status.title }}
      </p>
    </div>
    <div class="mx-8 mb-4 h-[30px] px-10 overflow-hidden">
      <ul>
          <li class="truncate" v-for="des in listDes" :key="des">{{ des }}</li>
      </ul>
    </div>
    <p class="text-center">id: {{ props.todo.id }}</p>
    <p class="text-center mb-4">
      Created at: <i>{{ new Date(props.todo.createdAt).toISOString() }}</i>
    </p>
    <div class="flex items-center justify-center mb-4">
      <button
        class="w-[100px] block mr-4 bg-[blue] text-white active:opacity-50"
      >
        Edit
      </button>
      <button
        class="w-[100px] block mr-4 bg-[red] text-white active:opacity-50"
      >
        Delete
      </button>
    </div>
  </div>
  <!-- Todo Item -->
</template>

<script setup>
const props = defineProps(["todo"]);
const isShowDialog = reactive({
    todoIsDone: false,
    isDelete: false
})

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

function showDetails() {
  if (props.isDone) {
    isShowDialog.todoIsDone = true;
    return;
  }
  router.push("/todo/" + props.todo.id + "/details");
}
</script>
