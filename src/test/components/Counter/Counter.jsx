import React from "react";
import { CircularProgressbarWithChildren,buildStyles } from 'react-circular-progressbar';
import RadialSeparators from "./RadialSeparator.jsx";
import 'react-circular-progressbar/dist/styles.css';
import "./Counter.scss";

export default function Counter({questionsLength,countCorrectAnswer}) {
    return (
        <div className="counter">
            <CircularProgressbarWithChildren
                value={(countCorrectAnswer/questionsLength)*100}
                text={`${countCorrectAnswer}/${questionsLength}`}
                strokeWidth={10}
                styles={buildStyles({
                    strokeLinecap: "butt",
                    pathColor: "rgb(234, 93, 128)",
                    textColor:'black'
                })}
            >
                <RadialSeparators
                    count={questionsLength}
                    style={{
                        background: "#fff",
                        width: "5px",
                        height: `${10}%`
                    }}
                />
            </CircularProgressbarWithChildren>
        </div>
    );
}