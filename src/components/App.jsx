import { useState } from 'react';


import './App.css';
import Header from "./Header";
import Note from './Note';
import CreateArea from './CreateArea';
import Footer from './Footer';

const  App = () =>  {

  const [newNote, setNewNote] = useState([]);

  // function handleButtonEvent(oldNote) {
  //   setNewNote((prevValue) => {
  //     return [...prevValue, oldNote];
  //   });
  // }

  const handleNote = () => {
setNewNote(newNote);
  }

  // function HandleDelete(id) {
  //   setNewNote((prevNote) => {
  //     return prevNote.filter((noteItems, index) => {
  //       return index !== id;
  //     });
  //   });
  // }

  return (
    <div>
      <Header />
      <CreateArea 
      // button={handleButtonEvent} 
      handleNote = {handleNote}
      />
      {handleNote?.map((noteItems) => {
        console.log(handleNote);
        return (
          <Note
            key={noteItems.id}
            // id={index}
            title={noteItems.title}
            content={noteItems.content}
            // onDelete={HandleDelete}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
