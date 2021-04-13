import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import QuestionPage from "./component/QuestionPage/QuestionPage";
import ResultPage from "./component/ResultPage/ResultPage";
import StartPage from "./component/StartPage/StartPage";
import './App.css';

function App() {
  return (
    <Router>
    <div>
      <Switch>
        <Route path="/questions">
          <QuestionPage />
        </Route>
        <Route path="/result">
          <ResultPage />
        </Route>
        <Route path="/">
          <StartPage />
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
