import React,{ Component } from 'react'

class Add_Todo extends Component
{
    state={
        id:null,
        content: ''
    }
    handleChange=(e)=>
    {
        this.setState(
        {
            content: e.target.value
        })
    }
    handleSubmit=(e)=>
    {
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({
            content:''
        })
    }
    render()
    {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Add New Todo:</label>
                    <input type="text" onChange={this.handleChange} value ={this.state.content}></input>
                </form>
            </div>)
    }
}

export default Add_Todo