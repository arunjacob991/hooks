import React, { useState } from 'react'

const UseReducer = () => {

     const [count, setCount] = useState(0)

     function increment() {
          setCount(prevCount => prevCount + 1)
     }

     function decrement(){
          setCount(prevCount => prevCount - 1 )
     }

  return (
    <div>
         <button onClick={increment}>Increment</button>
         <button onClick={decrement}>Decrement</button>
         <div> {count} </div>

    </div>
  )
}

export default UseReducer