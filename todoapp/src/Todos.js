import React from 'react'

const Todos=({todos,deleteTodo})=>
{
    const todo_list = todos.length?(
        todos.map((todo) => {
            return(
                <div className="collection-item" key={todo.id}>
                    <span onClick={() => {deleteTodo(todo.id)}}>{todo.content}</span>
                </div>
                )
        })
    ):(
        <p className="center">You have no todos left !!</p>
    )
    return(
        <div className="todos collection">
            {todo_list}
        </div>
    )
}


export default Todos;