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
      console.log('el.offsetHeight', el.offsetHeight)
      console.log('el.offsetWidth', el.offsetWidth)
      console.log('binding', binding)
      console.log('binding.value', binding.value)
      const div = document.createElement('div');
      const parent = el.parentElement
      div.innerText = binding.value.title + binding.value.title + binding.value.title;
      div.style.color = binding.value?.color ? binding.value.color : 'red'
      div.style.zIndex = '99999';
      div.style.width = '100%';
      console.log('div.offsetHeight', div.offsetHeight)
      if (binding.value?.position) {
        switch (binding.value.position) {
          case 'top':
            {
              if(binding.value?.isFirst) {
                div.style.top = `${el.offsetHeight}px`;
                break
              }
              div.style.bottom = `${el.offsetHeight}px`;
              break;
            }
          case 'bottom':
            {
              div.style.top =  `${el.offsetHeight}px`;
              div.style.left = '0px'
              break;
            }
          case 'left':
            {
              div.style.top = '0rem';
              div.style.left = '-7rem';
              div.style.zIndex = '99999';
              break;
            }
          case 'right':
            {
              div.style.top = '0rem';
              div.style.left = `${el.offsetWidth}px`;
              div.style.zIndex = '99999';
              break;
            }
          default:
            break;
        }
      }
      div.classList.add('tooltip-custom')
      // const parent = div.parentElement
      // if (parent) {
      //   parent.style.position = 'relative'
      // }
      el.classList.add('tooltip-custom-parent')
      parent.style.position = 'relative'
      parent.appendChild(div);
    },
    getSSRProps(binding, vnode) {
      // you can provide SSR-specific props here
      return {}
    }
  })
})