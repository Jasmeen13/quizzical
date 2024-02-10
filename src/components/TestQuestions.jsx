import React, { useEffect, useState } from "react";
import Question from "./Question";
function TestQuestions(props){
    const [{quesAnsArr, page, submit, error}, setQuesArr] = useState({quesAnsArr:[], page:0, submit:false, error:""});

    useEffect(()=>{
        (async ()=>{
            console.log("fetching data")
            const response = await fetch("https://opentdb.com/api.php?amount=5&category=18&difficulty=medium&type=multiple")
            const jsonObject = await response.json();
            (jsonObject.response_code === 0 )
            ? setQuesArr((prev)=>({...prev,quesAnsArr:jsonObject.results}))
            : setQuesArr((prev)=>({...prev,error:jsonObject}))
            
        })()
    },[page])

    const arr = quesAnsArr.map((quesAns, i)=>{
        console.log(quesAns)
            const element = <Question key= {i} question ={quesAns.question} correct_answer={quesAns.correct_answer} submit={submit} options={[quesAns.correct_answer,...quesAns.incorrect_answers]} newQuestion={page}/> 
            return element;
    })

    return(
        <div className="test-questions-wrapper">
            {console.log("Rendering TestQues")}
            {console.log(error)}
            {error != "" &&  <div className="error-msg">Couldn't load the questions, Please try reloading. </div>}
            {arr}
            <div className="submit-div">
                {error == "" && ((arr.length == 0)? <div>loading....</div>: (!submit &&<button className="submit" onClick={()=>{setQuesArr(prev=>({...prev, submit: true}))}}>Check Answers</button>))}
                {submit &&
                    <button className="more-ques-btn" onClick={()=>{setQuesArr(prev=>({...prev,quesAnsArr:[], submit: false, page: prev.page+1}))}}>More Questions</button>
                }
                {submit && <button className="play-again-btn" onClick={()=>{props.setStartTest(false)}}>Start New Quiz</button>}

            </div>
        </div>
    )
}
export default TestQuestions;