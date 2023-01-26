

import React, { useState } from 'react'
 import { Routes,Route } from 'react-router-dom'
 import ContactUs from './ContactUs'
 import Home from './Home'
 import Context from './Context'
 import StudentTable from './StudentTable'
 import ADDNEWSTUDENT from './ADDNEWSTUDENT'
 import Edit from './Edit'
 
 const RendorRouting = () => {
    const [data,setData]=useState([{id:'1',name:'Shubham'},{id:'2',name:'Monu'}])
    return (
      <Routes>
         <Route path='/' element={<Home/>}/>
          <Route path='/StudentTable' element={<StudentTable/> }/>
          <Route path='/Contact' element={<ContactUs/>}/>
          <Route path='/Edit' element={<Edit/> }/>
          <Route path='/Addnewstuden' element={<ADDNEWSTUDENT/>}/>
      </Routes>
    )
 }
 
 export default RendorRouting

/*
import React, { useState } from 'react'
 import { Routes,Route } from 'react-router-dom'
 import ContactUs from './ContactUs'
 import Home from './Home'
 import Context from './Context'
 import StudentTable from './StudentTable'
 import ADDNEWSTUDENT from './ADDNEWSTUDENT'
 import Edit from './Edit'
const Routes = () => {
  const [data,setData]=useState([{id:'1',name:'Shubham'},{id:'2',name:'Monu'}])
  return (
    <Routes>
       <Route path='/' element={<Home/>}/>
        <Route path='/StudentTable' element={<StudentTable/> }/>
        <Route path='/Edit' element={
              <Context.Provider value={{entries : data, updateFunction : setData}}>
        <Edit/>
         </Context.Provider>
       }/>
        <Route path='/Addnewstuden' element={<ADDNEWSTUDENT/>}/>
    </Routes>
  )
}
*/
