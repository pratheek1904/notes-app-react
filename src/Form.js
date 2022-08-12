import React, { useState } from "react";


const Form = (props) => {
  const [note, setNote] = useState({
    title: "",
    text: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setNote((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
    console.log(note);
  };

  const handleAdd = (event) => {
    event.preventDefault();
    props.passNote(note);
    setNote({
        title: "",
        text: "",
    })
  };

  return (
    <div className="main-note">
      <form>
        <div>
        <label>Enter the Title</label>
          <br></br>
          <input
            type="text"
            placeholder="Enter Title"
            name="title"
            value={note.title}
            onChange={handleInput}
          />
          <br />
        </div>

        <div>
          <label>Enter the text</label>
          <br />
          <textarea
            type="text "
            rows="5"
            column={15}
            placeholder="Enter Text"
            name="text"
            value={note.text}
            onChange={handleInput}
          />
        </div>

        <div>
          <button onClick={handleAdd}>Add Notes</button>
        </div>
        </form>
    
 
    </div>
  );
};

export default Form;
