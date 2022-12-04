import React from "react";

function Note(props) {
  const date = new Date();
  const today = date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear(); 
  
  function deleteButton() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <p>{today}</p>
      <button onClick={deleteButton}>DELETE</button>
    </div>
 
    );
  }

export default Note;
