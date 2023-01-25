import React, { useState } from "react";
import './App.css'

const Form = () => {
  const [title, settitle] = useState("");
  const [text, settext] = useState("");
  const [note, setnote] = useState(false);
  const [val, setval] = useState("You dont have any note");

  const [myarray, setmyarray] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && text) {
      const newarr = { id: new Date().getTime().toString(), title, text };
      setmyarray([...myarray, newarr]);
      settext("");
      settitle("");
      setval("");
      setnote(true);
    } else {
      alert("enter the input first");
    }
  };

  const handleRemove = (id) => {
    const removed = myarray.filter((value) => {
      return value.id !== id;
    });
    setmyarray(removed);
    setnote(true)
  };
const handleEdit=(id)=>{
  const edit=myarray.filter((elem)=>{
    return elem.id===id
  })
  console.log(edit)
  settitle(edit[0].title)
  settext(edit[0].text)
  const removed = myarray.filter((value) => {
    return value.id !== id;
  });
  setmyarray(removed);
  setnote(true)
}
  return (
    <>
      <div className="container">
        <h1 className="title">Notes Application</h1> &nbsp;
        <form onSubmit={handleSubmit} className="value">
          <input
            className="text"
            type="text"
            value={title}
            onChange={(e) => settitle(e.target.value)}
            placeholder="Enter title"/><br /><br />
          <textarea
            className="text"
            type="text"
            value={text}
            onChange={(e) => settext(e.target.value)}
            placeholder="Enter Description"
            cols={20}
            rows={5}
          />
          <br />
          <input className="button" type="submit" />
        </form>
        <h1>{val}</h1>
      </div>
      <div className="destinations">
        {note ? (
          <div className="destination">
            {myarray.map((elem) => {
              return (
                <div key={elem.id}>
                  <h1> Notes</h1>
                  <div>
                    <h2>{elem.title}</h2>
                    <p>{elem.text} </p>
                    <button
                      className="button"
                      onClick={() => handleRemove(elem.id)}><i className="fa-solid fa-trash"></i></button>&nbsp;
                    <button 
                    className="button" 
                    onClick={()=>handleEdit(elem.id)}><i className="fa-solid fa-pen-to-square"></i></button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Form;
