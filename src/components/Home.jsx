import React from "react";
import "./Home.css"
function Home(props){
    return(
        <div className="home-main">
            {console.log("Rendering Home ")}
            <div className="main-container">
                <div className="heading">Quizzical</div>
                <div className="sub-heading">Let's check your general knowledge</div>
                <button className="start-btn" onClick={()=>{props.setStartTest(true)}}>Start Quiz</button>
            </div>
        </div>
    )
}
export default Home;