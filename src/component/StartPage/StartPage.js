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
        <h1>Quiz</h1>
        <button onClick={changeToQuestionPage}>Start Quiz</button>
      </div>
    </div>
  );
}
