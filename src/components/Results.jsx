import React from "react";

const Results = ({
  questions,
  wrongQuestions,
  correctQuestions,
  skippedQuestions,

}) => {
  let percentage = ((correctQuestions / questions.length) * 100).toFixed(2);

  const playAgain = () => {};
  return (
    <div className="results">
      <h1>Quiz Result</h1>
      <table>
        <tbody>
          <tr>
            <td>Total Questions</td>
            <td>
              <span className="total-questions">{questions.length}</span>
            </td>
          </tr>
          <tr>
            <td>Attempt</td>
            <td>
              <span className="total-attempt">{skippedQuestions}</span>
            </td>
          </tr>
          <tr>
            <td>Correct</td>
            <td>
              <span className="total-correct">{correctQuestions}</span>
            </td>
          </tr>
          <tr>
            <td>Wrong</td>
            <td>
              <span className="total-wrong">{wrongQuestions}</span>
            </td>
          </tr>
          <tr>
            <td>Percentage</td>
            <td>
              <span className="percentage">{percentage}%</span>
            </td>
          </tr>
          <tr>
            <td>Your Total Score</td>
            <td>
              <span className="total-score">
                {correctQuestions} / {questions.length}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
      <a href="/question" onClick={() => playAgain()} class="try-again btn">
        Try Again
      </a>
    </div>
  );
};

export default Results;
