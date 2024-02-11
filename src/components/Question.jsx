import React, { useState ,useEffect} from "react";

function Question({question, options, correct_answer, submit, newQuestion}){
    
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
    const [{optionsState, selected, randomisedOptions}, setOptionsState] = useState(
        {
            optionsState: [],
            selected:"",
            randomisedOptions:[]
        });

    useEffect(()=>{
        (async()=>{
            await shuffleArray(options)
            const optionComp =  await options.map((option)=>{
                return <span className="option" onClick={handleOptionClick}>{option}</span>
            })
            await setOptionsState({
                optionsState: optionComp,
                selected:"",
                randomisedOptions:options
            })
        })()}   
    ,[newQuestion])


    useEffect(()=>{
        if(submit){
            console.log(correct_answer, selected)
            const newOptionsState = randomisedOptions.map((option)=>{
                console.log(option)
                if(selected !== option && option === correct_answer)
                    return <span className="option correct">{option}</span>
                else if(selected === option ){
                    if(option === correct_answer)
                        return <span className="option correct" >{option}</span>
                    else
                        return <span className="option incorrect" >{option}</span>
                }
                else{
                    return <span className="option">{option}</span>
                }
            })
            setOptionsState(prev=>({...prev, optionsState: newOptionsState}));
        }
    },[submit]);

    function handleOptionClick(e){
        const newOptionsState = options.map((option)=>{
            if(option == e.target.innerText){
                return <span className="option selected" onClick={handleOptionClick}>{option}</span>
            }
            else {
                return <span className="option" onClick={handleOptionClick}>{option}</span>
            }
        })
        setOptionsState(prev=>({...prev, optionsState: newOptionsState, selected: e.target.innerText}));
    }

    return(
        <div className="question-wrapper">
            <div className="question-container">
                <div className="question">{question}</div>
                <div className="options" >
                    {optionsState}
                </div>
            </div>
        </div>
    )
}
export default Question;