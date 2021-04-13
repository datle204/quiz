import axios from "axios";

export async function getQuestion() {
  return axios
    .get("https://dat-quiz.herokuapp.com/questions")
    .then((res) => {
        let questions = res.data;
        return {questions};
    });
}

