import React from 'react'
import { deleteTodo, completeTodo } from '../store/slice/todos';
import { useAppSelector, useAppDispatch } from '../store/hooks/hooks';

const Todos = () => {
    const todos = useAppSelector(state => state.todos)
    const dispatch = useAppDispatch()
    
    return (
        <>
            <div className="flex flex-wrap gap-3 items-center content-center px-5 justify-center my-5">
                {
                    todos.map((todo) => {
                        return (
                            <div key={todo.id} className='w-1/3 bg-blue-300 rounded-lg flex flex-col gap-3 p-4'>
                                <div className=' flex gap-3'>
                                    <span className='w-11/12'>{todo.title}</span>
                                    <span className={`w-1/5 text-center rounded-md text-white ${todo.completed ? "bg-green-800" : "bg-red-800"}`}>{todo.completed ? "COMPLETED" : "PENDING"}</span>

                                </div>                    
                                    <div className='flex gap-3'>
                                        <button 
                                            className='bg-green-800 text-white w-1/5 text-center rounded-md' 
                                            onClick={() => dispatch(completeTodo(todo.id))}
                                        >
                                            Complete
                                        </button>
                                        <button 
                                            className='bg-red-800 text-white w-1/5 text-center rounded-md'
                                            onClick={() => dispatch(deleteTodo(todo.id))}
                                        >
                                            Delete
                                        </button>
                                    </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Todos
