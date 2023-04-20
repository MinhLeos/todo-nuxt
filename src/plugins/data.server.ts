import todosListDummy from '~/assets/data/todos.json';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.hook('app:created', () => {
      /* your code goes here */
      nuxtApp.provide('todosList', () => todosListDummy)
    })
  })