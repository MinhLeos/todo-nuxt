export default defineNuxtPlugin(() => {
    const { getTodosLength } = useTodos()
    return {
      provide: {
        todoLength: () => getTodosLength()
      }
    }
  })