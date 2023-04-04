<template>
    <header class="sticky text-white top-0 z-50 border-b bg-[cadetblue] p-4">
        <div class="w-[90%] mx-auto flex items-center justify-between">
            <NuxtLink class="text-3xl header-link" to="/">Todo</NuxtLink>
            <div class="">
                <ul class="flex">
                    <li class="header-li"><NuxtLink class="header-link" to="/todos-list">List Todos</NuxtLink></li>
                    <li class="header-li"><NuxtLink class="header-link" to="/todo/add">Add Todo</NuxtLink></li>
                </ul>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
    .router-link-active.router-link-exact-active {
        color: red;
    }
    .header {
        &-li {
        @apply cursor-pointer mx-3 px-3;
    }
        &-link {
            &:hover {
                opacity: 0.8;
                color: rgb(214, 221, 112);
            }

            &:active {
                opacity: 0.2;
            }
        }
    }
</style>
