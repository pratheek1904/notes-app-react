import React from 'react'

const NoteList = (props) => {

  

  const deleteNote=()=>{
    if(deleteNote){
      alert(`Would you like to delete? title: ${props.title} and text: ${props.text}`)
    }
    props.deleteItem(props.id);

  }
  const editNote=()=>{
    // if(editNote){
    //   alert(`Would you like to Edit? title: ${props.title} and text: ${props.text}`)
    // }
    props.editItem(props.id)
  }
  
  
  return (
    <div className='note-List'>
      <h1>Your note </h1>
      <h3>{props.title}</h3>
      <p>{props.text}</p>
      <button onClick={editNote}>Edit</button>
      <button onClick={deleteNote}>Remove</button>
      
    </div>
  )
}

export default NoteList
