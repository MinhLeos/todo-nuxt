
import { NuxtLink } from '~~/.nuxt/components';

<template>
    <header class="sticky top-0 z-50 space-x-1 border-b bg-white p-4 shadow-md">
        <div class="w-[90%] mx-auto flex items-center justify-between">
            <NuxtLink class="text-3xl" to="/">Todo</NuxtLink>
            <div class="">
                <ul class="flex">
                    <li class="cursor-pointer mx-3 px-3"><NuxtLink to="/todos-list">List Todos</NuxtLink></li>
                    <li class="cursor-pointer mx-3 px-3"><NuxtLink to="/todo/add">Add Todo</NuxtLink></li>
                </ul>
            </div>
        </div>
    </header>
</template>
