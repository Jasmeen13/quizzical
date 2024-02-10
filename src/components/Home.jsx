import React, { useRef } from "react";
import "./Home.css"
import {categories, difficulty} from"../courses"
function Home(props){
    const categoryRef = useRef();
    const difficultyRef = useRef(null);
    const categoriesJSX = Object.entries(categories).map(([key,val])=>{
        if(key == "any")
            return <option className="category-option"  selected value={key}>{val}</option>
        else
            return <option className="category-option" value={key}>{val}</option>
    })
    const difficultyJSX = Object.entries(difficulty).map(([key,value])=>{
        if(key == "any")
            return <option className="difficulty-level" selected value={key}>{value}</option>
        else
            return <option className="difficulty-level" value={key}>{value}</option>
    })

    function handleStart(){
        const categoryEle = (document.getElementsByClassName("category"))
        const difficultyEle = document.getElementsByClassName("difficulty-level")
        
        props.setStartTest((prev)=>
            ({...prev,
                startTest: true, 
                category: `${categoryEle[0].value}`,
                level: `${difficultyEle[0].value}`
            })
        )
    }
    return(
        <div className="home-main">
            <div className="main-container">
                <div className="heading">Quizzical</div>
                <div className="sub-heading">Let's take a test</div>
                <div className="choice-wrapper">
                    <select className="category" ref={categoryRef}>
                        {categoriesJSX}
                    </select>
                    <select className="difficulty-level" ref={difficultyRef}>
                        {difficultyJSX}
                    </select>
                </div>
                <button className="start-btn" onClick={handleStart}>Start Quiz</button>
            </div>
        </div>
    )
}
export default Home;