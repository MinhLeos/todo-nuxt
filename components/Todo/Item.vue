<template>
    <!-- Todo Item -->
    <div class="shadow border w-[80%] mx-auto overflow-hidden mb-5">
        <div class="flex items-center justify-center my-6">
            <h4 class="text-center text-xl text-[#b3b3b3] mr-10 cursor-pointer active:opacity-50 active:text-white">Todo Title</h4>
            <p class="bg-[blue] text-white rounded-full px-4 cursor-pointer active:opacity-50">Todo status</p>
        </div>
        <div class="mx-8 mb-4 h-[30px] px-10 overflow-hidden">
            <ul>
                <ul>
                    <li class="truncate">Vue is a JavaScript framework for building user interfaces. It builds on top of standard
                HTML, CSS, and JavaScript and provides a declarative and component-based programming model that helps you
                efficiently develop user interfaces, be they simple or complex. Vue is a JavaScript framework for building user interfaces. It builds on top of standard
                HTML, CSS, and JavaScript and provides a declarative and component-based programming model that helps you
                efficiently develop user interfaces, be they simple or complex</li>
                    <li class="truncate">Vue is a JavaScript framework for building user interfaces. It builds on top of standard
                HTML, CSS, and JavaScript and provides a declarative and component-based programming model that helps you
                efficiently develop user interfaces, be they simple or complex.</li>
                    <li class="truncate">Description 3</li>
                    <li class="truncate">Vue is a JavaScript framework for building user interfaces. It builds on top of standard
                HTML, CSS, and JavaScript and provides a declarative and component-based programming model that helps you
                efficiently develop user interfaces, be they simple or complex. Vue is a JavaScript framework for building user interfaces. It builds on top of standard
                HTML, CSS, and JavaScript and provides a declarative and component-based programming model that helps you
                efficiently develop user interfaces, be they simple or complex.</li>
                </ul>
            </ul>
        </div>
        <p class="text-center">id: 123456789</p>
        <p class="text-center mb-4">Created at: <i>2011-11-11</i></p>
        <div class="flex items-center justify-center mb-4">
            <button class="w-[100px] block mr-4 bg-[blue] text-white active:opacity-50">Edit</button>
            <button class="w-[100px] block mr-4 bg-[red] text-white active:opacity-50">Delete</button>
        </div>
    </div>
    <!-- Todo Item -->
</template>