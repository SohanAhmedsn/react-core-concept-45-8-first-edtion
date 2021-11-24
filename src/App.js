import './App.css';
import { useEffect, useState } from 'react/cjs/react.development';

function App() {
  return (
    <div className="App">
      <h2>This is react App()</h2>
    <Commentload></Commentload>
    </div>
  );
}


function Commentload(){
  const [comments, setComments] = useState([]);


  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/comments")
    .then(res => res.json())
    .then(data => setComments(data))
  },[])
  return (
    <div className="comment-post">
      {/* <h1>This is Commenload section</h1>
      <h2>User: {comments.length}</h2>
      <h3>PostId:{comments.postId}</h3>
      <h3>ID: {comments.id}</h3>
      <h3>Name: {comments.name}</h3>
      <h3>Email: {comments.email}</h3> */}

      <ul>
        {
          comments.map(comment => 
          <Commentpost 
            postId={comment.postId} 
            id={comment.id} 
            name ={comment.name}
            email ={comment.email}
            body ={comment.body}
          ></Commentpost>)
        }
      </ul>
    </div>
  )
}

function Commentpost(props) {
  return (
    <div className="comment-post">
        <h2> PostId: {props.postId}</h2>
        <h2> ID: {props.id}</h2>
        <h2> Name: {props.name}</h2>
        <h2> Email: {props.email}</h2>
        <h2> Body: {props.body}</h2>
    </div>
  )
}

export default App;



/*
 {
    "postId": 1,
    "id": 1,
    "name": "id labore ex et quam laborum",
    "email": "Eliseo@gardner.biz",
    "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
  }
*/ 