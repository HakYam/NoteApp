import React, { useEffect, useReducer, useRef, useState } from "react";

export const TodoForm = (props) => {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus();
  })


  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({

      id: Math.floor(Math.random() * 100000),
      text: input,
    });

    // Clear the input field after submission
    setInput("");
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <>
      <form className="todo-form" onSubmit={handleSubmit}>
        {props.edit ? (
          <>
            <input
              type="text"
              placeholder="Update todo"
              value={input}
              name="text"
              className="todo-input edit"
              onChange={handleChange}
              ref={inputRef}
            />
            <button className="todo-button edit">Update</button>
          </>
        ) : (
          <>
            <input
              type="text"
              placeholder="Something to do"
              value={input}
              name="text"
              className="todo-input"
              onChange={handleChange}
              ref={inputRef}
            />
            <button className="todo-button">Add</button>
          </>
        )}
      </form>
    </>
  );
};
