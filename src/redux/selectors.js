import { createSelector } from "@reduxjs/toolkit";
// createSelector từ toolkit khi k có dữ liệu thay đổi thì k gọi lại
export const searchTextSelector = (state) => state.filters.search;
export const filterStatusSelector = (state) => state.filters.status;
export const filterPrioritiesSelector = (state) => state.filters.priorities;
export const todoListSelector = (state) => state.todoList;

// export const todoListSelector = (state) => {
//     const searchText = searchTextSelector(state);

//     const todosRemaining = state.todoList.filter((todo) => {
//         return todo.name.includes(state.filters.search);
//     });

//     return todosRemaining;
// }

// reselect

export const todosRemaininingSelector = createSelector(
  todoListSelector,
  filterStatusSelector,
  searchTextSelector,
  filterPrioritiesSelector,
  (todoList, status, searchText, priorities = []) => {
    return todoList.filter((todo) => {
      if (status === "All") {
        return priorities.length // why not priorities.length // use [] to set default 
          ? todo.name.includes(searchText) && priorities.includes(todo.priority)
          : todo.name.includes(searchText);
      }

      return (
        todo.name.includes(searchText) &&
        (status === "Completed" ? todo.completed : !todo.completed) &&
        (priorities.length ? priorities.includes(todo.priority) : true) // why not priorities.length
      );
    });
  }
);
