import React from 'react'
// import Context from './Context'
const Edit = () => {

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

export default Edit
/*
import React, { useContext, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
// import DataContext from './DataContext';
import Context from './Context';



function Edit() {
   const context = useContext(Context);
   const location = useLocation(); // returns the location object 
   console.log(location) // the id present with the state property of the l;ocation object
   const navigate = useNavigate();
   const index = (location.state.data);

   useEffect(() => {
     return () => {
        context.updateFunction(
            (prevObj)=>{
                prevObj[index-1] = newObj;
                return (prevObj)
            }
           );
     }
   }, [context])
   
    // array of objects : context.entries
    // function         : context.updateFunction


    // the object in which the changes will be done 
    const newObj = {
        name : context.entries[index-1].name,
        id : context.entries[index-1].id
    }

    const handleChange = (event) =>
    {
        newObj[event.target.name] = event.target.value;
       // console.log(newObj);     
    }

   const handleUpdate = (event) =>{
       console.log(context.entries[index-1])
       context.updateFunction(
        (prevObj)=>{
            prevObj[index-1] = newObj;
            return (prevObj)
        }
       );
       navigate('/');
    }


   return (
    <>
        <input onChange={handleChange} name='name' placeholder= {context.entries[index-1].name}></input>
        <input onChange={handleChange} name='id'   placeholder= {context.entries[index-1].id}></input>
        <br/>
        <button onClick={handleUpdate}>Update</button>
    </>
  )
}

export default Edit;
*/