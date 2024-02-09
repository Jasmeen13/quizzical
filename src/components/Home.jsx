import React from "react";
import "./Home.css"
function Home(){
    return(
        <div className="home-main">
            <div className="top-right-blob"></div>
            <div className="left-bottom-blob"></div>
            <div className="main-container">
                <div className="heading">Quizzical</div>
                <div className="sub-heading">Let's check your general knowledge</div>
                <button className="start-btn">Start Quiz</button>
            </div>
        </div>
    )
}
export default Home;