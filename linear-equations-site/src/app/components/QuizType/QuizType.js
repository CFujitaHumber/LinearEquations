"use client";
import PropTypes from "prop-types";
import { useState } from "react";


function QuizType(props){
    const [words, setWords] = useState("");
    const [correctMsg, setCorrectMsg] = useState("");

    console.log(words);
    
    return <>
        <h4>{props.question}</h4>
        <div style={{flexFlow: "column wrap"}}>
            <input
                type={"text"}
                placeholder={"Type here"}
                value={words}
                onChange={(e) => {
                    setWords(e.target.value);
                }  }
            />
            <input
                type={"button"}
                value={"submit"}
                onClick={() => {
                    for(var answer of props.answers){
                        answer = answer.toLowerCase().replaceAll(" ","");                        
                        if(answer == words.toLowerCase().replaceAll(" ","")){
                            setCorrectMsg("Correct!");
                            break;
                        } else {
                            setCorrectMsg("Wrong!");
                        }
                    }
                }}
            />
        </div>
        <p>{correctMsg}</p>
    </>

}

QuizType.propTypes = {
    question: PropTypes.string.isRequired,
    answers: PropTypes.arrayOf(PropTypes.number).isRequired
}

export default QuizType;