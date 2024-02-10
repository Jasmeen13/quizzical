import { useState } from 'react';
import './App.css';
import Home from "./components/Home"
import TestQuestions from "./components/TestQuestions"
function App() {
  const [startTest, setStartTest] = useState(false)
  return (
    <div className="App">
      <div className="top-right-blob"></div>
      <div className="left-bottom-blob"></div>
      {console.log("rendering App component")}
      {startTest ? <TestQuestions setStartTest={setStartTest}/>:<Home setStartTest={setStartTest}/>}

    </div>
  );
}

export default App;
