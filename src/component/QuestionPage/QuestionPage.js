import "./QuestionPage.css";
import { useState, useEffect } from "react";
import { getQuestion } from "../api";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateScore } from "../../features/scoreSlice";

export default function QuestionPage() {
  const history = useHistory();
  const dispatch = useDispatch();

  const [questions, setQuestions] = useState([{}]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);


  useEffect(() => {
    async function fetchData() {
      const { questions } = await getQuestion();
      setQuestions(questions);
      localStorage.setItem("numberOfQuestions", questions.length);
    }
    fetchData();
  }, []);


  function checkAnswer(event) {
   
    if (event.target.outerText === questions[currentQuestion]?.answer) {
        console.log(questions[currentQuestion]?.answer);
        
        setScore(score+1);
        setCurrentQuestion(currentQuestion + 1);
        dispatch(updateScore(score));
    }
    if(currentQuestion < questions.length-1){
        setCurrentQuestion(currentQuestion + 1);
    }
    else{
        history.push("/result");
    }
  }



 
  
    
  
  
  return (
    <div className="container">
      <div className="question-page">
        <h1>
          Cau hoi {currentQuestion + 1} / {questions.length}
        </h1>
        <h2>{questions[currentQuestion]?.question}</h2>
        <ul className="list-button">
          <li>
            <button onClick={(event) => checkAnswer(event)}>
              {questions[currentQuestion]?.option1}
            </button>
          </li>
          <li>
            <button onClick={(event) => checkAnswer(event)}>
              {questions[currentQuestion]?.option2}
            </button>
          </li>
          <li>
            <button onClick={(event) => checkAnswer(event)}>
              {questions[currentQuestion]?.option3}
            </button>
          </li>
          <li>
            <button onClick={(event) => checkAnswer(event)}>
              {questions[currentQuestion]?.option4}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
