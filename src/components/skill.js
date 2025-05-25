import React from 'react'
import './skill.css'

const Skill = () => {
  return (
    <section id="skills">
        <span className="skillTitle">What i do</span>
        <span className="skillDesc">Build and Deploy AI and Preditive model. Eager to Apply technical expertise and project experience to Contribute to Innovative AI Solutions</span>
        <div className="skillBars">
            <div className="skillBar">
                <img src="/images/mlD.png" alt="ML" className="skillBarImg" />
                <div className="skillBarText"><h2>Machine Learning Dev</h2>
                    <p>Built Predicitve Models like Obesity Prediction that, <br />  uses health and lifestyle data to predict obesity risk.</p></div>
            </div>
            <div className="skillBar">
                <img src="/images/ai.png" alt="Ai" className="skillBarImg" />
                <div className="skillBarText"><h2> Artificial Intelligence</h2>
                    <p> Working on a Chatbot for University Students to help them, <br />using natural language processing and conversational AI. </p></div>
            </div>
            <div className="skillBar">
                <img src="/images/webD.png" alt="Web Design" className="skillBarImg" />
                <div className="skillBarText"><h2> Web Development </h2>
                    <p> Built an Employee Management System that help Organization to manage staff info & roles through an easy-to-use Website</p></div>
            </div>
        </div>
    </section>

  )
}

export default Skill
