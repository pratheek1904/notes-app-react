import React, { useState } from 'react'
import './App.css'
 import Form from './Form'
import NoteList from './NoteList';

const App = () => {
  const [item,setItem]=useState([]);

   
  const handleAdd=(note)=>{
    // alert('i am click')
    setItem((prevData)=>{
      return[...prevData,note]
    })
    console.log(note)
   }
   
   const onDelete=(id)=>{
  
    setItem((oldData)=>
      oldData.filter((currdata,indx)=>{
   return indx!==id;
      })
    );
   };

  // const onEdit=(id)=>{
  //  setItem(" ")
  // }

  return (
    <div>
<Form passNote={handleAdd}/>
{/* {
   editItem={onEdit}
} */}

{
item.map((val,index)=>{
  return (<NoteList
  key={index}
  id={index}
  title={val.title}
  text={val.text}
  deleteItem={onDelete}
 
  />)

})}

    </div>
  )
}

export default App
