import Hello from './Hello'
import React, { Component} from 'react';

class App extends Component
{
    state={
      hello : [
        {name:'adi', age:19 , about:'Nothing',id:1},
        {name:'axi', age:29 , about:'something',id:2},
        {name:'azi', age:39 , about:'Everything',id:3}
      ]
    }
    render()
    {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {/* <Hello name ="adi" age="19" about="nothing" /> */}
        <Hello hello={this.state.hello}/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        
      </header>
    </div>
  );
}
}

export default App;
