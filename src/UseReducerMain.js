import React, { useReducer, useState } from 'react'

function reducer(state, action){
     switch(action.type){
          case 'increment':
               return { count: state.count + 1 }
          case 'decrement':
               return { count: state.count - 1 }
          default:
               return state
     }
}

const UseReducer = () => {

     const [state, dispatch] = useReducer(reducer, {count: 0, yoyo: "hoyya"})

     
     function increment() {
          dispatch({ type: 'increment' })
     }
     
     function decrement(){
          dispatch({ type: 'decrement' })
     }
     
     console.log(state);
  return (
    <div>
         <button onClick={increment}>Increment</button>
         <button onClick={decrement}>Decrement</button>
         <div> {state.count} </div>

    </div>
  )
}

export default UseReducer