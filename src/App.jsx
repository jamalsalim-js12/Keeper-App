import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";

const App = () => {
  const [notes, setNotes] = useState([]);

  const addItems = (noteValue) => {
    setNotes((prevValue) => [...prevValue, noteValue]);
  };

  const deleteItems = (id) => {
    setNotes((prevNotes) => prevNotes.filter((note, index) => index !== id));
  };
  return (
    <div>
      <Header />
      <CreateArea onAdd={addItems} />
      {notes.map((note, index) => (
        <Note
          title={note.title}
          content={note.content}
          id={index}
          key={index}
          onDelete={deleteItems}
        />
      ))}

      <Footer />
    </div>
  );
};

export default App;
