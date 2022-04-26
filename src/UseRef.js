
import React, { useEffect, useRef, useState } from 'react'

const UseRef = () => {

     const [name, setName] = useState('')
     const inputRef = useRef()

     const renderCount = useRef(1)

     useEffect(() => {
          renderCount.current = renderCount.current + 1
     })

    

  return (
    <div>
         <input ref={inputRef} type="text" value={name} onChange={e => setName(e.target.value)} />
         <div>The name is {name}</div>
         <div>I rendered {renderCount.current} times </div>
    </div>
  )
}

export default UseRef