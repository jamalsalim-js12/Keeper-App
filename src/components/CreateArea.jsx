import React, { useState } from "react";
import PropTypes from "prop-types";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

const CreateArea = (props) => {
  const [noteValue, setNoteValue] = useState({
    title: "",
    content: "",
  });

  const [isExpanded, setExpanded] = useState(false);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setNoteValue((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    props?.onAdd(noteValue);
    setNoteValue({
      title: "",
      content: "",
    });
  };

  const expand = () => {
    setExpanded(true);
  };
  return (
    <div>
      <form id="form">
        {isExpanded && (
          <input
            type="text"
            placeholder="Title"
            name="title"
            onChange={handleChange}
            value={noteValue.title}
          />
        )}
        <textarea
          name="content"
          placeholder="Take a note"
          rows={isExpanded ? 3 : 1}
          onChange={handleChange}
          value={noteValue.content}
          onClick={expand}
        />
        <Zoom in={isExpanded}>
          <Fab className="button" onClick={handleClick}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
};

CreateArea.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

export default CreateArea;
