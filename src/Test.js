import React from 'react'

const Test = () => {

     let obj = [{
          "nam/e": "sh//ibu",
          age: 25,
     }]
     

console.log("initial", obj);

    let yoyo = obj.map(el => {
     let resultobj = {};
     Object.entries(el).map(([key, val]) => {      
          // let aaa = val.toString().replace('/','')
          // console.log(aaa);
          
       resultobj[key] = val.toString().replaceAll('/', '');
       return resultobj;
     } )
   return resultobj;
 })


     console.log(yoyo);

  return (
    <>
          yoyo
    </>
  )
}

export default Test