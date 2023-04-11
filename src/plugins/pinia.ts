
// import { PiniaPluginContext } from 'pinia'

// function MyPiniaPlugin({ store }: PiniaPluginContext) {
//   store.$subscribe((mutation) => {
//     // react to store changes
//     console.log(`[🍍 ${mutation.storeId}]: ${mutation.type}.`)
//   })

//   // Note this has to be typed if you are using TS
//   return { creationTime: new Date() }
// }

// export default defineNuxtPlugin(({ $pinia }) => {
//   $pinia.use(MyPiniaPlugin)
// })
import { PiniaPluginContext } from 'pinia'

// add a property named `secret` to every store that is created
    // after this plugin is installed this could be in a different file
    function SecretPiniaPlugin({ store }: PiniaPluginContext) {
        return { secret: 'the cake is a lie' }
    }

export default defineNuxtPlugin(({ $pinia }) => {
  $pinia.use(SecretPiniaPlugin)
})