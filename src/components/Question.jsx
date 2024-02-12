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
                return <span className="option" onClick={handleOptionClick} dangerouslySetInnerHTML={{__html: option}}></span>
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
            const newOptionsState = randomisedOptions.map((option)=>{
                var htmlOption = document.createElement('div');
                htmlOption.innerHTML = option;
                if(selected != htmlOption.innerHTML && option === correct_answer)
                    return <span className="option correct">{htmlOption.innerHTML}</span>
                else if(selected == htmlOption.innerHTML ){
                    if(option === correct_answer)
                        return <span className="option correct">{htmlOption.innerHTML}</span>
                    else
                        return <span className="option incorrect">{htmlOption.innerHTML}</span>
                }
                else{
                    return <span className="option">{htmlOption.innerHTML}</span>
                }
            })
            setOptionsState(prev=>({...prev, optionsState: newOptionsState}));
        }
    },[submit]);

    function handleOptionClick(e){
        const newOptionsState = options.map((option)=>{
            var htmlOption = document.createElement('div');
            htmlOption.innerHTML = option;
            if(htmlOption.innerHTML == e.target.innerHTML){
                return <span className="option selected" onClick={handleOptionClick} >{htmlOption.innerHTML}</span>
            }
            else {
                return <span className="option" onClick={handleOptionClick}>{htmlOption.innerHTML}</span>
            }
        })
        setOptionsState(prev=>({...prev, optionsState: newOptionsState, selected: e.target.innerText}));
    }

    return(
        <div className="question-wrapper">
            <div className="question-container">
                <div className="question" dangerouslySetInnerHTML={{__html: question}}></div>
                <div className="options" >
                    {optionsState}
                </div>
            </div>
        </div>
    )
}
export default Question;