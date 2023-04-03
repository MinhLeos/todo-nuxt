import todosListDummy from '~~/assets/data/todos.json';

export const useTodos = () => {

    // use useState
    const todosList = useState('init-todos', () => todosListDummy)
    // const todosList = reactive(todosListDummy)

    function deleteOneTodo(id) {
        const idx = todosList.value.findIndex(todo => todo.id === id)
        if (idx > -1) {
            todosList.value.splice(idx, 1)
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
        todosList.value.unshift(newTodo)
    }

    function editTodo(id, name, description) {
        const idx = todosList.value.findIndex(todo => todo.id === id)
        if (idx > -1) {
            todosList.value[idx].name = name
            todosList.value[idx].description = description
        }
    }
    function changeStatus(id) {
        const idx = todosList.value.findIndex(todo => todo.id === id)
        if (idx > -1) {
            todosList.value[idx].isDone = !todosList.value[idx].isDone
        }
    }

    function findOneById(id) {
        const findTodo = todosList.value.find(todo => todo.id == id)
        return findTodo
    }

    function getTodosLength() {
        const length = todosList.value.length
        const doneLength = todosList.value.filter(todo => todo.isDone === true).length
        return { length, doneLength }
    }

    return { todosList: shallowReadonly(todosList.value), getTodosLength, addTodo, deleteOneTodo, editTodo, changeStatus, findOneById }
}