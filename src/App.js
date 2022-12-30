import React from "react";
import { useState } from "react";
import Questions from "./Questions";
import NewQuestions from "./NewQuestions";
const App = () => {
  const [myInterview, setMyInterview] = useState([
    { text: "What is React.js?" },
    { text: "What you mean by state?" },
    { text: "What is props?" },
    { text: "What is JSX?" },
    { text: "What you mean by spread operator?" },
    { text: "What is the difference between Framework and Libraries?" },
  ]);

  const addNewQuestions = (newData) => {
    // setMyInterview(myInterview.concat(newData));
    setMyInterview((prevQuestion) => {
      return prevQuestion.concat(newData);
    });
    //   return prevQuestions.concat(newData);
    // interQuestions.push(newData);
    // console.log(interQuestions);
  };

  return (
    <div className="app">
      <h1>Interview Questions</h1>
      <NewQuestions onAddGoal={addNewQuestions} />
      <Questions test={myInterview} />
    </div>
  );
};
export default App;
