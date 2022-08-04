import React from 'react'

function Delete({todo,setTodos}) {
    const handleDelete = () =>{

        const confirmation=window.confirm("are you sure?");
        if(confirmation)
        {
            setTodos((prev)=>{
                return prev.filter((t)=>t.id !== todo.id)
            })
        }

    
    }
  return (
    <span onClick={handleDelete}>
        X
    </span>
  )
}

export default Delete