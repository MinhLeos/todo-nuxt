<template>
    <!-- Todo Item -->
    <div class="w-[70%] lg:w-[50%] mx-auto my-24 ">
        <div class="shadow border w-full overflow-hidden mb-5 cursor-pointer">
            <div class="flex items-center justify-center my-6">
                <h4 class="text-center text-2xl mr-10">Todo Title</h4>
                <p class="bg-[blue] text-white rounded-full px-4">Todo status</p>
            </div>
            <div class="mx-10 mb-4">
                <ul>
                    <li class="">Vue is a JavaScript framework for building user interfaces. It builds on top of standard
                HTML, CSS, and JavaScript and provides a declarative and component-based programming model that helps you
                efficiently develop user interfaces, be they simple or complex. Vue is a JavaScript framework for building user interfaces. It builds on top of standard
                HTML, CSS, and JavaScript and provides a declarative and component-based programming model that helps you
                efficiently develop user interfaces, be they simple or complex</li>
                    <li class="">Vue is a JavaScript framework for building user interfaces. It builds on top of standard
                HTML, CSS, and JavaScript and provides a declarative and component-based programming model that helps you
                efficiently develop user interfaces, be they simple or complex.</li>
                    <li class="">Description 3</li>
                    <li class="">Vue is a JavaScript framework for building user interfaces. It builds on top of standard
                HTML, CSS, and JavaScript and provides a declarative and component-based programming model that helps you
                efficiently develop user interfaces, be they simple or complex. Vue is a JavaScript framework for building user interfaces. It builds on top of standard
                HTML, CSS, and JavaScript and provides a declarative and component-based programming model that helps you
                efficiently develop user interfaces, be they simple or complex.</li>
                </ul>
            </div>
            <p class="text-center">id: 123456789</p>
            <p class="text-center mb-4">Created at: <i>2011-11-11</i></p>
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
console.log('detail', route.params)
</script>