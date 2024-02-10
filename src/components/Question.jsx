import React from "react";

function Question({question, options}){
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
    shuffleArray(options)
    const optionComp =  options.map((option)=>{
        return (<span className="option" onClick={handleClick}>{option}</span>)
    })
    function handleClick(e){
        const userAns = e.target.innerText;
        
    }
    return(
        <div className="question-wrapper">
            <div className="question-container">
                {console.log(":rendering Question")}
                {console.log(question)}
                <div className="question">{question}</div>
                <div className="options" >
                    {optionComp}
                </div>
            </div>
        </div>
    )
}
export default Question;