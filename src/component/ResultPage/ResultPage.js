import "./ResultPage.css";
import { useSelector } from "react-redux";
import { selectScore } from "../../features/scoreSlice";
import { selectQuestion } from "../../features/questionSlice";

import { useHistory } from "react-router-dom";

export default function ResultPage() {
  const history = useHistory();
  const score = useSelector(selectScore);
  const numberOfQuestion = useSelector(selectQuestion);

  function replay() {
    history.push("/");
  }
  return (
    <div className="container">
      <div className="result-page">
        <h1>Result Page</h1>
        <h2>
          Bạn đã trả lời đúng {score}/{numberOfQuestion} câu hỏi!
        </h2>
        <button className="start-btn" onClick={replay}>
          Play Again
        </button>
      </div>
    </div>
  );
}
