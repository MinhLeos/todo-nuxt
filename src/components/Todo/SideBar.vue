<template>
    <!-- todo side bar -->
    <div class="side-bar">
        <div @click="handleClick('')" class="side-bar-div">
            <h4 :class="props.filter==='' ? 'text-[red]' : ''">All</h4>
        </div>
        <div @click="handleClick('new')" class="side-bar-div">
            <h4 :class="props.filter==='new' ? 'text-[red]' : ''">New</h4>
        </div>
        <div @click="handleClick('done')" class="side-bar-div">
            <h4 :class="props.filter==='done' ? 'text-[red]' : ''">Done</h4>
        </div>
        <div @click="handleCancelSearch" class="side-bar-div">
            <h4>Cancel Search</h4>
        </div>
    </div>
    <!-- todo side bar -->
</template>

<script setup>
    const props = defineProps(['filter'])

    const filter = useState('filter', () => '')
    const isFilter = useState('is-filter', () => false)
    const search = useState('search')
    const isSearch = useState('is-search')
    // function handleClick(value) {
    //     if(!value) {
    //         navigateTo(`/todos-list`)
    //         return
    //     }
    //     navigateTo(`/todos-list?filter=filter&filterValue=${value}`)
    // }
    function handleClick(value) {
        filter.value = value
        if (value) {
            isFilter.value = true
        } else {
            isFilter.value = false
        }
        // navigateTo(`/todos-list`)
    }
    function handleCancelSearch() {
        search.value = ''
        isSearch.value = false
    }
</script>

<style lang="scss" scoped>
@import '../../assets/scss/side-bar.scss'
</style>