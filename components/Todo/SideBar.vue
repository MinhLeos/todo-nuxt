<template>
    <!-- todo side bar -->
    <div class="side-bar">
        <div @click="handleClick()" class="side-bar-div">
            <h4 :class="props.filter==='' ? 'text-[red]' : ''">All</h4>
        </div>
        <div @click="handleClick('new')" class="side-bar-div">
            <h4 :class="props.filter==='new' ? 'text-[red]' : ''">New</h4>
        </div>
        <div @click="handleClick('done')" class="side-bar-div">
            <h4 :class="props.filter==='done' ? 'text-[red]' : ''">Done</h4>
        </div>
        <!-- <div @click="handleClick('deleted')" class="side-bar-div">
            <h4 :class="props.filter==='deleted' ? 'text-[red]' : ''">Deleted</h4>
        </div> -->
    </div>
    <!-- todo side bar -->
</template>

<script setup>
    const props = defineProps(['filter'])

    function handleClick(value) {
        if(!value) {
            navigateTo(`/todos-list`)
            return
        }
        navigateTo(`/todos-list?filter=filter&filterValue=${value}`)
    }
</script>

<style lang="scss" scoped>
@import '../../assets/scss/side-bar.scss'
</style>