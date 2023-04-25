export default defineNuxtPlugin(nuxtApp => {
    console.log('2.newOder.ts')
    const order = useState('order')
    console.log('2.newOder.ts: order >>>', order.value)
    const newOder = useState('new-oder', () => 'new order')
    console.log('2.newOder.ts: newOder >>>', newOder.value)
  })