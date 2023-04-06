export const useCounter = () => useState<number>('counter', () => {
    console.log('server')
    return 0
})
