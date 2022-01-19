import{ Link } from 'react-router-dom'
import axios from 'axios'
import React,{ Component } from 'react'
import Rocket_League_logo from '../Rocket_League_logo.png'
class Home extends Component
{
  state={
    posts:[]
  }
  componentDidMount()
  {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res=>{
      // console.log(1);
      // console.log(res);
      // console.log(2);
      this.setState({
        posts:res.data.slice(0,10)
      })
    });
  }
  render()
  {
    const { posts } = this.state;
    const postList=posts.length?(
      posts.map(post => {
        return(
          <div className="post card" key ={post.id}>
          <img src={Rocket_League_logo}/>
          <div className="card-content">
            <Link to={'/posts/'+post.id}>
            <span className="card-title">{post.title}</span>
            </Link>
            <p>{post.body}</p>
            </div>
          </div>
        )
      })
    ):(
      <div className="center">NO posts yet</div>
    );
      return (
    <div>
      <div className="container home">
        <h4 className="center">Home</h4>
        {postList}
      </div>
    </div>
  )
  }
}

export default Home