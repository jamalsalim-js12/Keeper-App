import React from "react";
import PropTypes from "prop-types";
import DeleteIcon from "@mui/icons-material/Delete";

const Note = (props) => {
  const handleClick = () => {
    props?.onDelete(props?.id);
  };
  return (
    <div className="note">
      <h1>{props?.title}</h1>
      <p>{props?.content}</p>
      <button onClick={handleClick}>
        <DeleteIcon />
      </button>
    </div>
  );
};

Note.propTypes = {
  onDelete: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Note;
