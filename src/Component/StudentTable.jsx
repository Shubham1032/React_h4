import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import Context from './Context'
// import ADDNEWSTUDENT from './ADDNEWSTUDENT'

export default function StudentTable() {
  const ArrObj=[
  {id:'1',name:'Shubham',age:'37', course:'MERN', batch:'EA-18'},
  {id:'2',name:'Monu',age:'37', course:'MERN', batch:'EA-18'},
  {id:'3',name:'Sonu',age:'37', course:'MERN', batch:'EA-18'},
  {id:'4',name:'Jony',age:'37', course:'MERN', batch:'EA-18'}]
 console.log(ArrObj.id,ArrObj.name)
  return (
    <div id='StudentMainContainer'>
      <div style={{marginTop:'40px'}}>
        <h1 id='HeadingStudent'>StudentTable</h1>
        <Link to='/Addnewstuden'>
        <button id='AddNew'>Add New Student</button>
        </Link>     
      </div>
     <div>  <table border={1}>
            {/* <tbody> */}
                <thead>
                    <tr>
                       <th>ID</th>   
                        <th>Name</th>
                        <th>Age</th>
                        <th>Course</th>
                        <th>Batch</th>
                        <th>Change </th>
                    </tr>
                    <tr style={{border:'1px'}}></tr>
                      {ArrObj.map((i)=>{
                        return(
                          <tr>
<td>{i.id}</td>
                        <td>{i.name}</td>
                        <td>{i.age}</td>
                        <td>{i.course}</td>
                        <td>{i.batch}</td>
                     <Link to='/Edit'>
                       <td>Edit</td>
                       </Link>
                    </tr>
                        )
                      })}
                        
                </thead>

            {/* </tbody> */}
        </table></div>
    </div>
  )
}
