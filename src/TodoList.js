import React from 'react'
import Delete from './Delete'

function TodoList({Todos,setTodos}) {
    const handleToggle = (todo)=>{
        let updatedTask = Todos.map((t)=>
            t.id===todo.id?
            {
                ...t,
                done:!t.done
            }
            :t
        )
        setTodos(updatedTask)
    }

    if(!Todos.length)
    return <p>Empty List</p>
  return (
    <div className='list'>
        <ul>
            {Todos&&Todos.map((todo)=>(<li
                onDoubleClick={()=> handleToggle(todo)}
                key={todo.id}
                style={{textDecoration:todo.done?'line-through':''
                       ,backgroundColor:todo.done?'green':'yellow',border:'3px solid black',borderRadius:'15px' }}>
                    {todo.task}
                 <Delete todo={todo} setTodos={setTodos}/>
            </li>))

            }

        </ul>
    </div>
  )
}

export default TodoList