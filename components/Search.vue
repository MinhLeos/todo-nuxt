<template>
    <!-- Search bar -->
    <div
        class="font-serif w-[1000px] max-w-[100%] text-2xl rounded-full bg-white flex jusify-between overflow-hidden drop-shadow-2xl mx-auto">
        <input ref="searchValue" type="text" placeholder="Search by name..."
            class="py-3 px-5 w-full text-2xl rounded-full focus:outline-none" />
        <button class="bg-sky-500 px-10 text-white" @click="handleClickSearch">Search</button>
    </div>
    <!-- Search bar -->
</template>

<script setup>
    const searchValue = ref()
    function handleClickSearch() {
        if(searchValue.value.value.trim() === ''){
            alert('Please entered todo title')
            return
        }
        navigateTo(`/todos-list?search=search&value=${searchValue.value.value.trim()}`)
    }
</script>