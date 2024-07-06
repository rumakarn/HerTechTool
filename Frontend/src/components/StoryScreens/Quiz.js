import React, { useState } from "react";
import "../../Css/Quiz.css";
import { data } from "../../assets/data";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Quiz = () => {
  const [index, setIndex] = useState(0);
  const [question, setQuestion] = useState(data[index]);
  const [lock, setLock] = useState(false);
  const [points, setPoints] = useState(0);
  const [result, setResult] = useState(false);
  const [error, setError] = useState(false); // State for error message

  // Function to handle checking answers
  const checkAns = (e, ans) => {
    if (!lock) {
      if (ans === 1) {
        e.target.classList.add("selected");
        setPoints(points + 1);
      } else if (ans === 3) {
        e.target.classList.add("selected");
        setPoints(points + 1);
      } else {
        e.target.classList.add("selected");
        setPoints(points + 0.5);
      }
      setLock(true);
      setError(false); // Reset error state when an option is selected
    }
  };

  // Function to handle moving to the next question
  const next = () => {
    if (lock) {
      if (index === data.length - 1) {
        setResult(true);
        return;
      }
      setIndex(index + 1);
      setQuestion(data[index + 1]);
      setLock(false);
      resetOptions(); // Reset selected options when moving to next question
    } else {
      setError(true); // Display error if no option is selected
    }
  };

  // Function to handle moving to the previous question
  const previous = () => {
    if (index > 0) {
      setIndex(index - 1);
      setQuestion(data[index - 1]);
      setLock(false);
      resetOptions(); // Reset selected options when moving to previous question
      setError(false); // Clear error message when navigating to previous question
    }
  };

  // Function to reset selected options (remove "selected" class)
  const resetOptions = () => {
    const options = document.querySelectorAll("li");
    options.forEach((option) => option.classList.remove("selected"));
  };

  // Calculate percentage and provide improvement message
  const percentage = (points / data.length) * 100;

  const getImprovementMessage = (percentage) => {
    if (percentage === 100) {
      return "Excellent! You are well-prepared for a MAANG company.";
    } else if (percentage >= 75) {
      return "Great job! Focus on areas where you missed points.";
    } else if (percentage >= 50) {
      return "Good effort! Review and practice more to improve.";
    } else {
      return "Keep learning and practicing to increase your tech skills.";
    }
  };

  return (
    <div className="container">
      <h1>Assess your techiness!</h1>
      <hr />
      {result ? (
        <div className="result">
          <div style={{ width: 200, height: 200, margin: "auto" }}>
            <CircularProgressbar
              value={percentage}
              text={`${Math.round(percentage)}%`}
              styles={buildStyles({
                textColor: "#000",
                pathColor: "#3b5998",
                trailColor: "#d6d6d6",
              })}
            />
          </div>
          <p>{getImprovementMessage(percentage)}</p>
        </div>
      ) : (
        <>
          <h2>
            {index + 1}. {question.question}
          </h2>
          <ul>
            <li onClick={(e) => checkAns(e, 1)}>{question.option1}</li>
            <li onClick={(e) => checkAns(e, 2)}>{question.option2}</li>
            <li onClick={(e) => checkAns(e, 3)}>{question.option3}</li>
          </ul>
          {error && <p className="error">Please select an option!</p>}
          <div className="button-container">
            <button onClick={previous} disabled={index === 0}>
              Previous
            </button>
            <button onClick={next}>Next</button>
          </div>
          <div className="index">
            {index + 1} of {data.length} questions
          </div>
        </>
      )}
    </div>
  );
};

export default Quiz;
