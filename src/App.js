import { useState } from 'react';
import './App.css';
import Home from "./components/Home"
import TestQuestions from "./components/TestQuestions"
function App() {
  const [{startTest, category, level }, setStartTest] = useState({startTest: false, category:"", level:""})
  return (
    <div className="App">
      <div className="top-right-blob"></div>
      <div className="left-bottom-blob"></div>
      {startTest ? <TestQuestions category={category} level={level} setStartTest={setStartTest}/>:<Home setStartTest={setStartTest}/>}

    </div>
  );
}

export default App;
