import React, { useState} from "react";
import { db } from "./Dexie";
import { useLiveQuery } from "dexie-react-hooks";

function CreateArea() {
  // const [note, setNote] = useState({
  //   title: "",
  //   content: ""
  // });

  const infoDetails = useLiveQuery(()=> db.note.toArray(),[])
 handleNote(infoDetails);

  const [isCondition, setIsCondition] = useState(false)
  function expand (){
    setIsCondition(true);
  }

  const updateNote = async (event) => {
    event.preventDefault();
    const infoData = {
      title: event.target.title.value,
      content: event.target.content.value
  
    };
  
   await db.note.put(infoData, "id");
  }
  // function handleAdd(event) {
  //   props.button(note)
  //   setNote({
  //     title: "",
  //   content: ""
  //   });
  //   event.preventDefault();
   
    
  // }

  return (
    <div>
      <form onSubmit={(e) => updateNote (e)} >
        {isCondition && <input
          name="title"
          placeholder="Title"
          // value={note.title}
        />}
        <textarea
        onClick={expand}
          name="content"
          placeholder="Take a note..."
          rows={isCondition? "3": "1"}
          // value={note.content}
        />
        <button type = "submit"> Add</button>

      </form>
    </div>
  );
}

export default CreateArea;
