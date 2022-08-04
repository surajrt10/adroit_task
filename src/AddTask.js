import React, { useRef } from 'react'

function AddTask({setTodos}) {
    let iref=useRef();
    const handleAdd = (e) =>{
        const text=iref.current.value;
        console.log(iref.current.value)
        const task={
            id:Math.random(),
            task:text,
            done:false
        }
        setTodos((prev)=>{
            return prev.concat(task);
        })
        iref.current.value="";
    }
  return (
    <div className='add'>
        <input type="text" ref={iref} name='addTask' placeholder='add Task' />
        <button className='addButton' onClick={handleAdd}>ADD</button>
    </div>
  )
}

export default AddTask