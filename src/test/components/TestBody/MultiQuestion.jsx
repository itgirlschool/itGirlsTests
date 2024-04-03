import React, {useState} from 'react';
import { Typography } from 'antd';
import emptyCircle from "../../../assets/empty-circle.svg";
import infoIcon from "../../../assets/info.svg";

import "./TestBody.scss";


function MultiQuestion({
  title,
  options,
  imgSrc,
  answer,
  setAnswer,
  isAnswer,renderImg
}) {
    const onChangeCheckbox = (e, option) => {
        const myAnswer = answer.find(elem => elem.title === option.title);
        if(!myAnswer && e.target.checked) {
            setAnswer([...answer, option])
        }
        if(myAnswer && !e.target.checked) {
            const newAnswer = answer.filter(elem => elem.title !== myAnswer.title)
            setAnswer([...newAnswer])
        }
    }
    return (
        <React.Fragment>
            <div className="question">
                <Typography.Title level={5} className="test-body-title">{title}</Typography.Title>
                {imgSrc !== null &&(
                    <div className="test-body-imagesBlock">
                        <img
                            src={renderImg()}
                            alt="Картинка к тесту"
                            className="question-image"
                        />
                    </div>
                )}
                <div className='test-body-questions-container'>
                    {options.map((option, index) =>
                        <div
                            key={option.title}
                            className={ isAnswer !== null
                                ? answer.includes(option)
                                    ? option.isValid
                                        ? 'test-body-question green'
                                        : 'test-body-question red'
                                    : 'test-body-question'
                                : 'test-body-question'
                            }
                        >
                            <input
                                id={`checkbox-${index}`}
                                type="checkbox"
                                name="checkbox"
                                value={index}
                                src={emptyCircle} alt='circle'
                                onChange={(e) => onChangeCheckbox(e, option)}
                                className={ isAnswer !== null
                                    ? answer.includes(option)
                                        ? option.isValid
                                            ? 'test-body-question-img green-img'
                                            : 'test-body-question-img red-img'
                                        : 'test-body-question-img'
                                    : 'test-body-question-img'
                                }
                                checked={answer.includes(option)}
                                disabled={isAnswer}
                            />
                            <p className='test-body-question-text'>{option.title}</p>
                        </div>
                    )}
                </div>
                <div className='test-notes-wrapper'>
                    <div className="test-notes">
                        <img className='test-notes__img' src={infoIcon} alt='icon'/>
                        <p className="test-notes__text">Данный вопрос имеет несколько правильных ответов</p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
export default MultiQuestion;
