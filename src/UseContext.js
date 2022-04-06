import React, { useState } from 'react'

export default function UseContext() {

     const [useDetails, setUserDetails] = useState({
          name: "shibu",
          age: 25
     })

  return (
    <div>
         This is parent component
         <ChildComponent 
               details = {useDetails}
               
         />
    </div>
  )
}

function ChildComponent(props) {
     // console.log(props);
  return (
    <div>
         This is child component 
         <SubChildComponent 
               details = {props.details}
         />
     </div>
  )
}

function SubChildComponent(props) {
  return (
    <div>
         This is subchild --- {props.details.name} and {props.details.age}
    </div>
  )
}


 