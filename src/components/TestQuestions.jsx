import React, { useEffect, useState } from "react";
import Question from "./Question";
function TestQuestions(){
    const [quesAnsArr, setQuesArr] = useState([]);
    const [answerArr, setAnswerArr] = useState([]);
    // const [questionArr, setQuestionArr] = useState([]);
    useEffect(()=>{
        (async ()=>{
            const response = await fetch("https://opentdb.com/api.php?amount=5&category=18&difficulty=medium&type=multiple")
            const jsonObject = await response.json();
            (jsonObject.response_code === 0 )
            ? setQuesArr(()=>jsonObject.results)
            : console.log(jsonObject.response_code)
            
        })()
    },[])
    
    useEffect(()=>{
        const arr = quesAnsArr.map((quesAns)=>{
            return quesAns.correct_answer
        })
        setAnswerArr(arr)
        console.log(arr);
    },[quesAnsArr])
    const arr = quesAnsArr.map((quesAns, i)=>{
            const element = <Question key= {i} question ={quesAns.question} options={[quesAns.correct_answer,...quesAns.incorrect_answers]}/> 
            return element;
    })


    return(
        <div className="test-questions-wrapper">
            {console.log("Rendering TestQues")}
            {arr}
            <div className="submit-div">
                <button className="submit">Check Answers</button>
            </div>
        </div>
    )
}
export default TestQuestions;