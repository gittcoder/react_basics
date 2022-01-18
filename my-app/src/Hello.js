import React, { Component} from 'react';

class Hello extends Component
{
    
    render()
    {
        const { hello } =this.props;
        const hello_list=hello.map(hell => {
            //console.log(this.props);
            return(
            <div className="hello">
                
                <h2>
                    <p>Name: {hell.name}</p>
                    <p>Age: {hell.age}</p>
                    <p>About: {hell.about}</p>
                </h2>
            </div>
            );
        })
        return(
            <div className="hello-list">
            {hello_list}
            </div>
            );
    }
}

export default Hello;