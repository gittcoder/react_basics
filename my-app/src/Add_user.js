import React, { Component} from 'react';

class Add_user extends Component 
{
    state={
        name: null,
        age: null,
        about: null
    }
    handleChange=(e) =>
    {
        this.setState({
            //[e.target.id]
            [e.target.id] : e.target.value
        })
    }
    handleSubmit = (e) =>
    {
        e.preventDefault();
        console.log(this.state);
        this.props.addUser(this.state);
    }
    render()
    {
        return(
        <div>
            <form onSubmit={this.handleSubmit}>
                <p>
                    <label htmlFor="name">Name : </label>
                    <input type="text" id="name" onChange={this.handleChange}/>
                </p>
                <p>
                    <label htmlFor="name">Age  : </label>
                    <input type="text" id="age" onChange={this.handleChange}/>
                </p>
                <p>
                    <label htmlFor="name">About : </label>
                    <input type="text" id="about" onChange={this.handleChange}/>
                </p>
                <button>Submit</button>
            </form>
        </div>
        );
    }

}

export default Add_user