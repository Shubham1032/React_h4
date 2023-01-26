import React from 'react'
import '../App.css'
const ADDNEWSTUDENT = () => {
  return (
    <div id='AddNewCompo'>
      <input className='AddInput' placeholder='Name'></input>
      <input placeholder='Age' className='AddInput'></input><br></br>
      <input placeholder='course' className='AddInput'></input>
      <input placeholder='Batch' className='AddInput'></input>
         <div>
          <button className='AddButton AddButtonCancle'>Cancel</button>
          <button  className='AddButton'>Update</button>
         </div>
    </div>
  )
}

export default ADDNEWSTUDENT