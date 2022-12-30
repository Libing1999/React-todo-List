import React from "react";
import { useState } from "react";
import  "./App.css";

const NewQuestions = (props) => {
  const [enteredText, setEnteredText] = useState("");

  const addQuestions = (event) => {
    event.preventDefault();

    const newData = {
      id: Math.random().toString(),
      text: enteredText,
    };
    setEnteredText("");
    props.onAddGoal(newData);
  };
  const updateText = (event) => {
    setEnteredText(event.target.value);
  };
  return (
    <form className="form-class" onSubmit={addQuestions}>
      <input type="text" value={enteredText} onChange={updateText} />
      <button type="submit">Add Questions</button>
    </form>
  );
};

export default NewQuestions;
