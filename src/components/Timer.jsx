import React, { useEffect } from "react";
import { useState } from "react";

const Timer = ({
  stop,
  setStop,
  questionNumber,
  setQuestionNumber,
  setSkippedQuestions,
  skippedQuestions,
  setSelectedAnswer,
  selectedAnswer,
}) => {
  const [timer, setTimer] = useState(30);

  const btns = document.querySelectorAll(".answer");
  useEffect(() => {
    if (timer === 0) {
      setStop(true);
      setSkippedQuestions((prev) => prev + 1);
      btns.forEach((btn) => (btn.className = "answer"));
    }

    const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
    return () => clearInterval(interval);
  }, [timer]);

  useEffect(() => {
    setTimer(30);
  }, [questionNumber]);

  return (
    <header>
      <div class="title">Awesome quiz application</div>
      <div class="timer">
        <div class="time_left_txt">Time Left</div>
        <div class="timer_sec">{timer}</div>
      </div>
      <div class="time_line"></div>
    </header>
  );
};

export default Timer;
