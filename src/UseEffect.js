import React, { useState, useEffect } from 'react'

const UseEffect = () => {

     const [resourceType, setResourceType] = useState('posts');

     console.log("render");

     useEffect(() => {
          console.log("resource type changed");
     }, [resourceType])

  return (

     <>
          <div className="App">
               <button onClick={() => setResourceType('posts')}>Posts</button>
               <button onClick={() => setResourceType('users')}>Users</button>
               <button onClick={() => setResourceType('comments')}>Comments</button>
          </div>
          <h1> {resourceType} </h1> 

     </>
    
  )
}

export default UseEffect