import todosListDummy from '~~/assets/data/todos.json';

export const useTodos = () => {

    const todosList = reactive(todosListDummy)

    function deleteOneTodo(id) {
        const idx = todosList.findIndex(todo => todo.id === id)
        if (idx > -1) {
            todosList.splice(idx, 1)
        }
    }

    function addTodo(name, description) {
        const newTodo = {
            id: Math.random().toString(),
            name,
            description,
            isDone: false,
            createdAt: new Date()
        }
        todosList.unshift(newTodo)
    }

    function editTodo(id, name, description) {
        const idx = todosList.findIndex(todo => todo.id === id)
        if (idx > -1) {
            todosList[idx].name = name
            todosList[idx].description = description
        }
    }
    function changeStatus(id) {
        const idx = todosList.findIndex(todo => todo.id === id)
        if (idx > -1) {
            todosList[idx].isDone = !todosList[idx].isDone
        }
    }

    function findOneById(id) {
        const findTodo = todosList.find(todo => todo.id === id)
        console.log('todosList', todosList)
        console.log('id', id)
        console.log('findTodo', findTodo)
        return findTodo
    }

    return { todosList: shallowReadonly(todosList), addTodo, deleteOneTodo, editTodo, changeStatus, findOneById }
}