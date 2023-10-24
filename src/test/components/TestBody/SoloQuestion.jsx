import React from "react";
import { Typography} from "antd";
import emptyCircle from "../../../assets/empty-circle.svg";
import "./TestBody.scss";

export default function SoloQuestion({
     title,
     options,
     imgSrc,
     answer,
     setAnswer,
     isAnswer,
 }) {
    return (
        <React.Fragment>
            <div className="question">
                <Typography.Title level={5} className="test-body-title">
                    {title}
                </Typography.Title>
                {imgSrc && (
                    <div className="test-body-imagesBlock">
                        <img
                            src={imgSrc}
                            alt="Картинка к тесту"
                            className="question-image"
                        />
                    </div>
                )}
                <div className='test-body-questions-container'>
                    {options.map((option, index) =>
                        <div
                            className={ isAnswer !== null
                                ? answer.includes(option)
                                    ? option.isValid
                                        ? 'test-body-question green'
                                        : 'test-body-question red'
                                    : 'test-body-question'
                                : 'test-body-question'
                            }
                            key={option.title}
                        >
                            <input
                                id={`radio-${index}`}
                                type="radio"
                                name="radio"
                                value={index}
                                className={ isAnswer !== null
                                    ? answer.includes(option)
                                        ? option.isValid
                                            ? 'test-body-question-img green-img'
                                            : 'test-body-question-img red-img'
                                        : 'test-body-question-img'
                                    : 'test-body-question-img'
                                }
                                src={emptyCircle} alt='circle'
                                onClick={() => {
                                    if (answer.length){
                                        answer = []
                                    }
                                    setAnswer([...answer, option])
                                }}
                                disabled={isAnswer}
                            />
                            <p className='test-body-question-text'>{option.title}</p>
                        </div>
                    )}
                </div>
            </div>
        </React.Fragment>
    );
}
