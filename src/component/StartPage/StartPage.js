import "./StartPage.css";
import { useHistory } from "react-router-dom";

export default function StartPage() {
  const history = useHistory();
  function changeToQuestionPage() {
    history.push("/questions");
  }

  return (
    <div className="container">
      <div className="start-page">
        <img src="quiz-img.png" alt="startpage-img" />
        <h1>Have Fun :) </h1>
        <button className="start-btn" onClick={changeToQuestionPage}>
          Start Quiz
        </button>
      </div>
    </div>
  );
}
