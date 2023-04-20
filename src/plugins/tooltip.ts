// import VTooltip from 'v-tooltip'

// export default defineNuxtPlugin(nuxtApp => {
//     nuxtApp.vueApp.directive('tooltip', VTooltip.VTooltip)
// })

// import VTooltip from 'v-tooltip'
// export default defineNuxtPlugin((nuxtApp) => {
//   nuxtApp.vueApp.use(VTooltip)
// })




export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('tooltip', {
      mounted(el, binding) {
        const div = document.createElement('div');
        div.innerText = binding.value;
        div.style.color = 'red'
        div.classList.add('tooltip-custom')
        // const parent = div.parentElement
        // if (parent) {
        //   parent.style.position = 'relative'
        // }
        el.classList.add('tooltip-custom-parent')
        el.style.position = 'relative'
        el.appendChild(div);  
      },
      getSSRProps(binding, vnode) {
          // you can provide SSR-specific props here
          return {}
      }
  })
})