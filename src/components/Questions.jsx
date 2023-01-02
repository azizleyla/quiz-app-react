import React, { useState, useEffect, useRef } from "react";
import Results from "./Results";
import Timer from "./Timer";
const Questions = ({
  questions,
  questionNumber,
  setQuestionNumber,
  setStop,
  stop,
  loading,
  setLoading,
}) => {
  const [question, setQuestion] = useState("");
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState("answer");
  const [correctQuestions, setCorrectQuestions] = useState(0);
  const [wrongQuestions, setWrongQuestions] = useState(0);
  const [skippedQuestions, setSkippedQuestions] = useState(0);

  useEffect(() => {
    setQuestion(questions[questionNumber - 1]);
  }, [questionNumber, questions]);

  const handleClick = (answer) => {
    const btns = document.querySelectorAll(".answer");

    setSelectedAnswer(answer);
    if (answer.correct) {
      setClassName("answer correct");
      setCorrectQuestions((prev) => prev + 1);
    } else {
      setClassName("answer wrong");
      setWrongQuestions((prev) => prev + 1);

      const correct = questions[questionNumber - 1].answers.filter(
        (a) => a.correct,
      );
      const text = correct[0].text;
      btns.forEach((btn) => {
        if (btn.textContent === text) {
          btn.className = "answer correct";
        }
      });
    }
  };
  const nextQuestion = () => {
    setSelectedAnswer(null);
    const btns = document.querySelectorAll(".answer");
    btns.forEach((btn) => (btn.className = "answer"));

    if (!selectedAnswer) {
      setSkippedQuestions((prev) => prev + 1);
    }
    setQuestionNumber((prev) => prev + 1);
  };
  useEffect(() => {
    if (questionNumber > questions.length) {
      setStop(true);
    }
  }, [questionNumber, questions]);

  return (
    <section>
      {!stop ? (
        <div>
          <Timer
            setSelectedAnswer={setSelectedAnswer}
            selectedAnswer={selectedAnswer}
            setQuestionNumber={setQuestionNumber}
            skippedQuestions={skippedQuestions}
            setSkippedQuestions={setSkippedQuestions}
            setStop={setStop}
            questionNumber={questionNumber}
          />
          <div className="questions">
            <span>{question?.question}</span>
          </div>
          <div className="answers">
            {question?.answers?.map((answer) => (
              <button
                disabled={selectedAnswer}
                className={
                  answer === selectedAnswer ? className : "answer"
                }
                onClick={() => handleClick(answer)}
              >
                {answer.text}
              </button>
            ))}
            <footer>
              <div className="total_question">
                <span>
                  <p>
                    {questionNumber} of {questions.length} questions
                  </p>
                </span>
              </div>
              <button className="next_btn" onClick={() => nextQuestion()}>
                Next
              </button>
            </footer>
          </div>
        </div>
      ) : (
        <Results
          correctQuestions={correctQuestions}
          wrongQuestions={wrongQuestions}
          skippedQuestions={skippedQuestions}
          questions={questions}
          questionNumber={questionNumber}
          setQuestionNumber={setQuestionNumber}
        />
      )}
    </section>
  );
};

export default Questions;
