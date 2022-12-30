import React from "react";
import "./App.css";
const Questions = (props) => {
  return (
    <ul className="questions">
      {props.test.map((exam) => {
        return <li>{exam.text}</li>;
      })}
    </ul>
  );
};

export default Questions;
