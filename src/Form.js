import React, { useState } from 'react'
// import NoteList from './NoteList';

const Form = () => {
    const [Title,setTitle]=useState("");
    const [Text,setText]=useState("");
    const [Notes,setNotes]=useState([])

    const handleTitle=e=>{
        setTitle(e.target.value)
    }

    const handleText=e=>{
         setText(e.target.value)
     }
      const handleAdd=event=>{
         event.preventDefault();
        //  setNotes((Notes)=>{
        //     return(
        //         [...Notes,{
        //             Title:Title,
        //            Text:Text,
        //            id:new Date().getTime()
        //         }]
        //     )
        //  })
      }
    
  return (
    <div>
        <form>
            <div>
                <label>Enter the Title</label><br></br>
                <input type="text"placeholder='Enter Title' value={Title} onChange={handleTitle} /><br/>
            </div>

            <div>
                <label>Enter the text</label><br/>
                <textarea type="text " 
                placeholder='Enter Text'
                value={Text} onChange={handleText}/>
            </div>

            <div>
                <button value={handleAdd} >Add Notes</button>
            </div>

            <div >
                <h1>Your Notes</h1><hr/>
                <p>No notes were added, please add a note</p>
            </div>
            {/* <NoteList/> */}

      </form>
    </div>
  )
}

export default Form
