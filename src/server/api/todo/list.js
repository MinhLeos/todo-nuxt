import todosListDummy from "~/assets/data/todos.json";

export default defineEventHandler((event) => {
  console.log('event', event);

  let todosList = todosListDummy;
  
  const { search, searchValue='', filter, filterValue='' } = getQuery(event);
  console.log('search', search)
  console.log('searchValue', searchValue)
  console.log('filter', filter)
  console.log('filterValue', filterValue)
  if (!!search && searchValue) {
    const list = todosList.filter((todo) => {
      return todo.name.toLowerCase().includes(searchValue.trim().toLowerCase());
    });
    todosList = list;
  }
  console.log('todosList 1', todosList)
  if (!!filter && filterValue) {
    const list = todosList.filter((todo) => {
      if (todo.isDone && filterValue.trim().toLowerCase() === "done") {
        return true;
      }
      if (!todo.isDone && filterValue.trim().toLowerCase() === "new") {
        return true;
      }
      return false;
    });
    todosList = list;
  }
  console.log('todosList', todosList)
  const length = todosList.length;
  return {
    todosList,
    length,
  };
});
