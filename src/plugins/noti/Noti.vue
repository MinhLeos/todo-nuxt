<template>
    <div class="flex justify-between text-[#fff] p-3 min-w-[300px] max-w-[700px] items-start" :class="customClass">
        <div>
            <h4>{{props.title}}</h4>
            <p>{{props.content}}</p>
        </div>
        <div class="rotate-45 p-3 text-2xl leading-6 cursor-pointer" @click="handleClose">+</div>
    </div>
</template>
<script setup>
    const props = defineProps({
        status: String,
        title: String,
        content: String,
    })
    const customClass = computed(() => {
        let classes = ``
        props.status === 'error' ? classes += ' bg-[#f0080896]' : classes += ' bg-[#84c44b]'
        return classes
    })
    function handleClose() {
        console.log('close')
        document.querySelector(".notification")?.remove();
    }
</script>