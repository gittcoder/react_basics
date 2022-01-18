import React,{ Component } from 'react'
import Todos from './Todos'
import Add_Todo from './Add_Todo'

class App extends Component 
{
  state={
    todos: [
      {id:1,content:'blah1'},
      {id:2,content:'blah2'},
      {id:3,content:'blah3'}
    ]
  }
  deleteTodo = (id) =>
    {
        const todos = this.state.todos.filter(todo =>{
          return todo.id !== id
        });
        this.setState({
          todos
        })
    }
  addTodo=(todo)=>
  {
    todo.id=Math.random();
    let todos=[...this.state.todos,todo]
    this.setState({
      todos
    })
  }
  render()
  {
    return (
      <div className="todo-app container">
      <h1 className="center blue-text">Todo's</h1>
      <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
      <Add_Todo addTodo={this.addTodo} />
      </div>
  );
  }
}

export default App;
