import React, { useState, useMemo } from 'react'

const UseMemo = () => {

     const [number, setNumber] = useState(0)

     const [dark, setDark] = useState(false)

     const doubleNumber = useMemo(() => {
         return slowFunction(number)
     }, [number])
     

     const themeStyles = {
          backgroundColor: dark ? 'black' : 'white',
          color: dark ? 'white' : 'black'
     }

  return (
    <div>
         <input 
               type="number" 
               value={number}
               onChange = {e => setNumber(parseInt(e.target.value))}
          />
          <button onClick={() => setDark(prevdark => !prevdark)} >Change Theme</button>
          <div style={themeStyles}> {doubleNumber} </div>
    </div>
  )
}

export default UseMemo

function slowFunction(num){
     console.log("calling slow function");
     for (let index = 0; index <= 1000000000; index++) { }
     return num * 2
}