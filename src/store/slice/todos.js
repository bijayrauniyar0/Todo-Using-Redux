import { createSlice, nanoid } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
    name : "todos",
    initialState : 
        [{id:1, title: "Learn React", completed: false}],

    reducers:{
        addTodo : (state, action) => {
            const newTodo = {
                id: nanoid(),
                title: action.payload,
                completed: false
            }
            state.push(newTodo);
        },
        deleteTodo : (state, action) => {
            return state.filter(todo => todo.id !== action.payload)
        },
        completeTodo: (state, action) => {
            const index = state.findIndex(todo => todo.id === action.payload);
            state[index].completed = true

        }
    }
})

export const { addTodo, deleteTodo, completeTodo } = todosSlice.actions;
export default todosSlice.reducer;
