import "./ResultPage.css";
import { useSelector } from "react-redux";
import { selectScore } from "../../features/scoreSlice";
import { useHistory } from "react-router-dom";

export default function ResultPage() {
  const history = useHistory();
  const score = useSelector(selectScore);

  function replay() {
    history.push("/");
  }
  return (
    <div className="container">
      <div className="result-page">
        <h1>Result Page</h1>
        <h2>
          Bạn đã trả lời đúng {score} /
          {localStorage.getItem("numberOfQuestions")} câu hỏi!
        </h2>
        <button onClick={replay}>Chơi Lại</button>
      </div>
    </div>
  );
}
