// import React from "react";
import { useState } from 'react';
import './App.css';
import { PostCreator } from './components/postCreater';

const App = () => {
  const [user, setUser] = useState();
  const [list, setList] = useState([]);
  const [postContent, setPostContent] = useState();

  const submitHandler = (e) => {
    e.preventDefault();
    if (postContent) {
        // spread content with ...
      setList([...list, postContent])
    }
  }

  return (
    <div className="App">
      {user ? <h1> Welcone {user} </h1> : <h1>Please log in</h1>}
        {/* e is event, we need anonymous function to not to update constantly */}
      <input onChange={(e) => setUser(e.target.value)} />
      <PostCreator setPostContent={setPostContent} 
      list={list} 
      submitHandler={submitHandler} />
      <div>
          {/* takes individual item puts in array  */}
          {/* key makes it specific  */}
        {list.map((item, index) => 
          <h2 key={index}>{item}</h2>)}
      </div>
      <p> I'm a react app </p>
    </div>
  );
}

export default App;
