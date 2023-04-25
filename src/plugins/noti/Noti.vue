<template>
    <div @mouseenter.stop="handleMouseEnter" @mouseleave.stop="handleMouseLeave" ref="el" class="flex justify-between text-[#fff] p-3 min-w-[300px] max-w-[700px] items-start" :class="customClass">
        <div>
            <h4>{{props.title}}</h4>
            <p>{{props.content}} - {{props.count}}</p>
        </div>
        <div class="rotate-45 p-3 text-2xl leading-6 cursor-pointer" @click="handleClose">+</div>
    </div>
</template>
<script setup>
    const props = defineProps({
        status: String,
        title: String,
        content: String,
        count: Number,
        timeout: Number
    })
    const el = ref()
    const customClass = computed(() => {
        let classes = ``
        props.status === 'error' ? classes += ' bg-[#f0080896]' : classes += ' bg-[#84c44b]'
        return classes
    })
    function handleClose(e) {
        e.target?.parentNode?.parentNode?.remove()
        const divContainer = document.querySelector('.noti-container')
        const divNoti = document.querySelector('.notification')
        if (!divNoti && divContainer) {
            divContainer.remove()
        }
        // document.querySelector(".notification")?.remove();
    }
    let timer

    function handleMouseEnter() {
        if(timer) {
            clearTimeout(timer)
        }
    }
    function handleMouseLeave() {
        if(props.timeout){
            timer = setTimeout(() => {
                el.value?.parentNode?.remove();
            }, props.timeout);
        }
    }

    onMounted(() => {
      if (props.timeout) {
        timer = setTimeout(() => {
            el.value?.parentNode?.remove();
        }, props.timeout);
      }
    });
    onUnmounted(() => {
        if(timer) {
            console.log('clear timeout')
            clearTimeout(timer)
        }
    })
</script>