import User from './User'
import React, { Component} from 'react';
import Add_user from './Add_user'

class App extends Component
{
    state={
      user : [
        {name:'adi', age:19 , about:'Nothing',id:1},
        {name:'axi', age:29 , about:'something',id:2},
        {name:'azi', age:39 , about:'Everything',id:3}
      ]
    }

    addUser=(usr) =>
    {
      usr.id = Math.random();
      let h=[...this.state.user,usr]
      this.setState({
        user: h
      })
    }
    deleteUser = (id) =>
    {
        let user = this.state.user.filter(ninja =>{
          return ninja.id !== id
        });
        this.setState({
          user:user
        })
    }
    render()
    {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {/* <User name ="adi" age="19" about="nothing" /> */}
        <User deleteUser={this.deleteUser} user={this.state.user}/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Add_user addUser={this.addUser} />
      </header>
    </div>
  );
}
}

export default App;
