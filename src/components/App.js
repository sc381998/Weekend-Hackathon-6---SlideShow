import React, { Component, useState } from "react";
import "../styles/App.css";

const App = ({ slides }) => {
  const [index, setIndex] = useState(0);
  const { title, text } = slides[index];

  const CheckNumber = (num) => {
    if (num > slides.length - 1) return 0;
    else if (num < 0) return slides.length - 1;
    else return num;
  };

  const handlePrevButton = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return CheckNumber(newIndex);
    });
  };

  const handleRestartButton = () => {
    let newIndex = 0;
    setIndex(CheckNumber(newIndex));
  };

  const handleNextButton = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return CheckNumber(newIndex);
    });
  };
  return (
    <>
      <h1 data-testid="title">{title}</h1>
      <p data-testid="text">{text}</p>
      <button
        data-testid="button-prev"
        onClick={handlePrevButton}
        disabled={index === 0 && "true"}
      >
        Prev
      </button>
      <button
        data-testid="button-restart"
        onClick={handleRestartButton}
        disabled={index === 0 && "true"}
      >
        Restart
      </button>
      <button
        data-testid="button-next"
        onClick={handleNextButton}
        disabled={index === slides.length - 1 && "true"}
      >
        Next
      </button>
    </>
  );
};

export default App;
