export default defineNuxtPlugin(nuxtApp => {
    console.log('1.oder.ts')
    const order = useState('order', () => 'order')
    console.log('1.oder.ts: order >>>', order.value)
    const newOder = useState('new-oder')
    console.log('1.oder.ts: newOder >>>', newOder.value)
  })