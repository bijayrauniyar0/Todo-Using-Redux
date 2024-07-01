import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./slice/todos";

export default configureStore({
    reducer:{
        todos: todosReducer,
    }
})