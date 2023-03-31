<template>
    <!-- todo side bar -->
    <div class="sticky top-[170px] shadow border w-64 mr-10 z-30 min-w-[200px] max-h-[260px]">
        <div @click="handleClick()" class="p-5 flex justify-between cursor-pointer active:opacity-50 active:bg-[#f2f2f2] border-b">
            <h4 :class="props.filter==='' ? 'text-[red]' : ''">All</h4>
        </div>
        <div @click="handleClick('new')" class="p-5 flex justify-between cursor-pointer active:opacity-50 active:bg-[#f2f2f2] border-b">
            <h4 :class="props.filter==='new' ? 'text-[red]' : ''">New</h4>
        </div>
        <div @click="handleClick('done')" class="p-5 flex justify-between cursor-pointer active:opacity-50 active:bg-[#f2f2f2] border-b">
            <h4 :class="props.filter==='done' ? 'text-[red]' : ''">Done</h4>
        </div>
        <div @click="handleClick('deleted')" class="p-5 flex justify-between cursor-pointer active:opacity-50 active:bg-[#f2f2f2] border-b">
            <h4 :class="props.filter==='deleted' ? 'text-[red]' : ''">Deleted</h4>
        </div>
    </div>
    <!-- todo side bar -->
</template>

<script setup>
    const props = defineProps(['filter'])
    console.log('props.filter', props.filter)
    function handleClick(value) {
        if(!value) {
            navigateTo(`/todos-list`)
            return
        }
        navigateTo(`/todos-list?filter=filter&filterValue=${value}`)
    }
</script>