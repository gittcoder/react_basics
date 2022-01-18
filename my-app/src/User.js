import React, { Component} from 'react';

const User = ({deleteUser,user}) =>
{
        const hello_list=user.map(usr => {
            if(usr.age>20)
            {
            return(
            <div className="user">
                
                <h2>
                    <p>Name: {usr.name}</p>
                    <p>Age: {usr.age}</p>
                    <p>About: {usr.about}</p>
                </h2>
                <button onClick={()=>{deleteUser(usr.id)}}>Delete User</button>
            </div>
            );
            }
            else
            {
                return null
            }
        })
        /*const hello_list =  user.map(usr =>{
                return usr.age > 20? (
                    <div className="user">
                
                <h2>
                    <p>Name: {usr.name}</p>
                    <p>Age: {usr.age}</p>
                    <p>About: {usr.about}</p>
                </h2>
                <button onClick={()=>{deleteUser(usr.id)}}>Delete User</button>
            </div>
                ) : null;
        })*/
        return(
            <div className="user-list">
            {hello_list}
            </div>
            );
}

export default User;