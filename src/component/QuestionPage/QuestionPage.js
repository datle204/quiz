import "./QuestionPage.css";
import { useState, useEffect } from "react";
import { getQuestion } from "../api";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateScore } from "../../features/scoreSlice";
import { updateQuestion } from "../../features/questionSlice";
import CountDown from "./CountDown";

export default function QuestionPage() {
  const history = useHistory();
  const dispatch = useDispatch();

  const [questions, setQuestions] = useState([{}]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    async function getData() {
      const { questions } = await getQuestion();
      setQuestions(questions);
    }
    getData();
  }, []);

  questions[currentQuestion]?.choices?.sort(() => Math.random() - 0.5);

  dispatch(updateQuestion(questions.length));

  //   CHECK ANSWER
  function checkAnswer(event) {
    const answerText = event.target.outerText;
    if (answerText === questions[currentQuestion]?.answer.toUpperCase()) {
      dispatch(updateScore(score + 1));
      setCurrentQuestion(currentQuestion + 1);
      setScore(score + 1);
    }
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      history.push("/result");
    }
  }

  return (
    <div className="container">
      <div className="question-page">
        <h1>
          Câu hỏi {currentQuestion + 1} / {questions.length}
        </h1>
        <h2>{questions[currentQuestion]?.question}</h2>
        {questions[currentQuestion]? <CountDown></CountDown> : <div></div>}

        <ul className="list-button">
          <li>
            <button className="red" onClick={(event) => checkAnswer(event)}>
              {questions[currentQuestion]?.choices?.[0]}
            </button>
          </li>
          <li>
            <button className="blue" onClick={(event) => checkAnswer(event)}>
              {questions[currentQuestion]?.choices?.[1]}
            </button>
          </li>
          <li>
            <button className="green" onClick={(event) => checkAnswer(event)}>
              {questions[currentQuestion]?.choices?.[2]}
            </button>
          </li>
          <li>
            <button className="black" onClick={(event) => checkAnswer(event)}>
              {questions[currentQuestion]?.choices?.[3]}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
