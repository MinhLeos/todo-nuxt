export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.hook('page:start', (pageComponent) => {
        /* your code goes here */
        console.log('app hooks')
        console.log('app hooks', pageComponent)

     })
})