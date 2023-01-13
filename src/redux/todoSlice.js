import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name:"todo",
    initialState:[],
    reducers:{
        addTodo:(state,action)=>{
            const newTodo = {
                id:action.payload.id,
                name:action.payload.name
            }
            state.push(newTodo)
        },
        deleteTodo:(state,action)=>{
            return state.filter((todo)=>todo.id !== action.payload.id)
        }
    }
})

export const {addTodo,deleteTodo} = todoSlice.actions;

export default todoSlice.reducer; 