import { defineStore } from "pinia";
import todosListDummy from "~/assets/data/todos.json";

export const useTodoStore = defineStore("todo", () => {
  const todosList = reactive(todosListDummy);

  function deleteOneTodo(id) {
    const idx = todosList.findIndex((todo) => todo.id === id);
    if (idx > -1) {
      todosList.splice(idx, 1);
    }
  }

  function addTodo(name, description) {
    const newTodo = {
      id: Math.random().toString(),
      name,
      description,
      isDone: false,
      createdAt: new Date(),
    };
    todosList.unshift(newTodo);
  }

  function editTodo(id, name, description) {
    const idx = todosList.findIndex((todo) => todo.id === id);
    if (idx > -1) {
      todosList[idx].name = name;
      todosList[idx].description = description;
    }
  }
  function changeStatus(id) {
    const idx = todosList.findIndex((todo) => todo.id === id);
    if (idx > -1) {
      todosList[idx].isDone = !todosList[idx].isDone;
    }
  }

  function findOneById(id) {
    const findTodo = todosList.find((todo) => todo.id == id);
    return findTodo;
  }

  function getTodosLength() {
    const length = todosList.length;
    const doneLength = todosList.filter((todo) => todo.isDone === true).length;
    return { length, doneLength };
  }

  return {
    // todosList: shallowReadonly(todosList),
    todosList,
    getTodosLength,
    addTodo,
    deleteOneTodo,
    editTodo,
    changeStatus,
    findOneById,
  };
});
