import { defineStore } from 'pinia';
import todosListDummy from '~/assets/data/todos.json';

export const useTodoStore = defineStore('todo', {
    state: () => {
      return { todosList: todosListDummy}
    },
    actions: {
        deleteOneTodo(id) {
            const idx = this.todosList.findIndex(todo => todo.id === id)
            if (idx > -1) {
                this.todosList.splice(idx, 1)
            }
        },
        addTodo(name, description) {
            const newTodo = {
                id: Math.random().toString(),
                name,
                description,
                isDone: false,
                createdAt: new Date()
            }
            this.todosList.unshift(newTodo)
        },
        editTodo(id, name, description) {
            const idx = this.todosList.findIndex(todo => todo.id === id)
            if (idx > -1) {
                this.todosList[idx].name = name
                this.todosList[idx].description = description
            }
        },
        changeStatus(id) {
            const idx = this.todosList.findIndex(todo => todo.id === id)
            if (idx > -1) {
                this.todosList[idx].isDone = !this.todosList[idx].isDone
            }
        }
    },
    getters: {
        findOneById: (state) => {
            return (id) => {
                const findTodo = state.todosList.find(todo => todo.id == id)
                return findTodo
            }
        },
        getTodosLength: (state) => {
            const length = state.todosList.length
            const doneLength = state.todosList.filter(todo => todo.isDone === true).length
            return { length, doneLength }
        }
    }
  })