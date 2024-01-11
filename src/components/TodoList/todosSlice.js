// const initState = [
//   { id: 1, name: "Learn Yoga", completed: false, priority: "Medium" },
//   { id: 2, name: "Learn Redux", completed: true, priority: "High" },
//   { id: 3, name: "Learn JavaScript", completed: false, priority: "Low" },
// ];

// const todoListReducer = (state = initState, action) => {
//   /*
//     {
//         type:'todoList/addTodo',
//         payload: { id: 1, name: 'Learn Yoga', completed: false, priority: 'Medium' }
//     }
//     */
//   switch (action.type) {
//     case "todoList/addTodo":
//       return [...state, action.payload];
//     case "todoList/toggleTodoStatus":
//       return state.map((todo) =>
//         todo.id === action.payload
//           ? { ...todo, completed: !todo.completed }
//           : todo
//       );
//     default:
//       return state;
//   }
// };

// export default todoListReducer;

import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "todoList",
  initialState: [
    { id: 1, name: "Learn Yoga", completed: false, priority: "Medium" },
    { id: 2, name: "Learn Redux", completed: true, priority: "High" },
    { id: 3, name: "Learn JavaScript", completed: false, priority: "Low" },
  ],
  reducers: { //IMMER
    addTodo: (state, action) => {
      state.push(action.payload);
    }, // action creators // library đã cung cấp immer nên dùng mutation trực tiếp giống immutation gián tiếp
    toggleTodoStatus: (state, action) => { // đã tự động tạo 1 actions creators
      const currentTodo = state.find((todo) => todo.id === action.payload); //[{abc}]
      if (currentTodo) { // dùng filter trả về 1 array. cần trả về object dùng find
        currentTodo.completed = !currentTodo.completed;
      }
    },
  },
});
