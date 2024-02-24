import React, { useState } from "react";

const CreateArea = (props) => {
  const [noteValue, setNoteValue] = useState({
    title: "",
    content: "",
  });

  const handleChange = (e) => {
    const { value, name } = e.target;
    setNoteValue((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    props.onAdd(noteValue);
    setNoteValue({
      title: "",
      content: "",
    });
  };
  return (
    <div>
      <form id="form">
        <input
          type="text"
          placeholder="Title"
          name="title"
          onChange={handleChange}
          value={noteValue.title}
        />
        <textarea
          name="content"
          placeholder="Take a note"
          rows="3"
          onChange={handleChange}
          value={noteValue.content}
        />
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
};

export default CreateArea;
