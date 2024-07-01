import React, {useState} from 'react'
import { useAppDispatch } from '../store/hooks/hooks';
import { addTodo } from '../store/slice/todos';

const AddTodo = () => {
    const [inputValue, setInputValue] = useState('');
    const dispatch = useAppDispatch()

    function addNewTodo (e){
        e.preventDefault();
        dispatch(addTodo(inputValue))
        setInputValue("")
    }
    
   
  return (
    <>
        <div className='w-full'>
          <form className=' w-1/3 my-4 mx-auto flex items-center justify-center' onSubmit={addNewTodo}>
              <input type="text" name='title' value={inputValue} onChange={(e)=> setInputValue(e.target.value)} id="" className='border border-black mr-2 p-2'/>
              <button className='bg-blue-400 px-6 py-2'>Add Todo</button>
          </form>
        </div>
    </>
  )
}
export default AddTodo
