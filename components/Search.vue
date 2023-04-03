<template>
    <div
        class="font-serif w-[1000px] max-w-[100%] text-2xl rounded-full bg-white flex jusify-between overflow-hidden drop-shadow-2xl mx-auto">
        <!-- use custom derective v-focus -->
        <input v-focus @keyup="handleEnterSearch" ref="searchValue" type="text" placeholder="Search by name..."
            class="py-3 px-5 w-full text-2xl rounded-full focus:outline-none" />
        <button class="bg-sky-500 px-10 text-white active:opacity-30" @click="handleSearch">Search</button>
    </div>
</template>

<script setup>
    const searchValue = ref()
    function handleSearch() {
        if(searchValue.value.value.trim() === ''){
            alert('Please entered todo title')
            return
        }
        navigateTo(`/todos-list?search=search&searchValue=${searchValue.value.value.trim()}`)
    }
    function handleEnterSearch(e){
        if (e.keyCode == 13) {
            handleSearch()
        }
    }
</script>