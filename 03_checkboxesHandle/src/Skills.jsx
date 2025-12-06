import { useState } from "react";
import "./Skills.css";

function Skills(){
    const [skills, setSkills] = useState([])
    const handleSkills = (e)=>{
        if(e.target.checked){
            setSkills([...skills, e.target.value])
        }else{
            setSkills([...skills.filter((item) => item != e.target.value)])
        }
    }

    return(
        <div className="main-container">
            <h1>Handle Checkbox in React js</h1>
            <div className="infos">
                <p>Select Your Skills</p>
                <p>Selected: {skills.length}</p>
            </div>

            <div className="card-container">
                <div className="inputs-container">
                    <div className="oneSkill">
                        <input onChange={handleSkills} type="checkBox" id="php" value="php" className="inputs"/>
                        <label htmlFor="php" className="labels">PHP</label>
                    </div>
                    <div className="oneSkill">
                        <input onChange={handleSkills} type="checkBox" id="javaScript" value="javaScript" className="inputs"/>
                        <label htmlFor="javaScript" className="labels">JavaScript</label>
                    </div>
                    <div className="oneSkill">
                        <input onChange={handleSkills} type="checkBox" id="python" value="python" className="inputs"/>
                        <label htmlFor="python" className="labels">Python</label>
                    </div>
                    <div className="oneSkill">
                        <input onChange={handleSkills} type="checkBox" id="java" value="java" className="inputs"/>
                        <label htmlFor="java" className="labels">JAVA</label>
                    </div>
                    <div className="oneSkill">
                        <input onChange={handleSkills} type="checkBox" id="html" value="html" className="inputs"/>
                        <label htmlFor="html" className="labels">HTML</label>
                    </div>
                    <div className="oneSkill">
                        <input onChange={handleSkills} type="checkBox" id="html1" value="htmldscd" className="inputs"/>
                        <label htmlFor="html1" className="labels">htmldscd</label>
                    </div>
                    <div className="oneSkill">
                        <input onChange={handleSkills} type="checkBox" id="html2" value="htmlscdgewf" className="inputs"/>
                        <label htmlFor="html2" className="labels">htmlscdgewf</label>
                    </div>
                    <div className="oneSkill">
                        <input onChange={handleSkills} type="checkBox" id="html3" value="htmlsddfdf" className="inputs"/>
                        <label htmlFor="html3" className="labels">htmlsddfdf</label>
                    </div>
                    <div className="oneSkill">
                        <input onChange={handleSkills} type="checkBox" id="html4" value="htmlssa" className="inputs"/>
                        <label htmlFor="html4" className="labels">htmlssa</label>
                    </div>
                </div>
                <div className="display-container">
                    {/* <p className="display-p">{skills.join(" ")}</p> */}
                    {skills.map(skill => (
                        <p key={skill} className="display-p">
                        {skill}
                        </p>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Skills;