import React, { useState, useContext, createContext } from 'react'

const UserDetailContext = createContext(null)

export default function UseContext() {

     const [userDetails, setUserDetails] = useState({
          name: "shibu",
          age: 25
     })

  return (

     <UserDetailContext.Provider value={userDetails} >

          This is context parent component
          <ChildComponent />

     </UserDetailContext.Provider>
     
   
  )
}

function ChildComponent() {
  return (
    <div>
         This is context child component 
         <SubChildComponent />
     </div>
  )
}

function SubChildComponent() {

     var contextData = useContext(UserDetailContext)

     console.log(contextData);

  return (
    <div>
         This is context subchild --- {contextData.name} and {contextData.age}
    </div>
  )
}


 