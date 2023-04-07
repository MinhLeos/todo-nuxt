export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.directive('focus', {
        mounted(el) {
            // console.log('el', el.classList.contains('input'))
            // el.classList.add('title')
            el.focus()
        },
        getSSRProps(binding, vnode) {
            // you can provide SSR-specific props here
            return {}
        }
    })

    nuxtApp.vueApp.directive('keypress', {
        updated(el, binding) {
            // console.log('binding', binding)
            // console.log('el', el.innerHTML)
            // console.log('el.dataset', el.dataset.id)
            
            if(el.dataset.key === el.dataset.value){
                !el.classList.contains('input') && el.classList.add('active')
            } else {
                el.classList.remove('active')
            }
        }
    })
})