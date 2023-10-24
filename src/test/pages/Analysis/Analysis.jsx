import {useNavigate} from "react-router-dom";
import  cat from '../../../assets/Gumball.svg';
import ErrTest from "../../components/ErrTest/ErrTest.jsx";
import {Typography} from "antd";
import './Analysis.scss'


const Analysis = () => {
    const local = JSON.parse(localStorage.getItem('questions'))
    const id = localStorage.getItem('id')
    const navigate = useNavigate()
    function replayTest() {
        navigate(`/test/${id}`)
        localStorage.clear()
    }

    if (!local|| !local.questions[0].hasOwnProperty('result')) {
        return <ErrTest/>
    }
    return (
        <div className='container_analisys'>
            <h1 className="analisys-title" >Давай разберемся что тут верно, а что нет!</h1>
            {local.questions.map(item => (
                <div className='container_questions'>
                    <Typography.Title level={5} className="title-qustions">
                        {item.title}
                    </Typography.Title>
                    <div className='box_responses'>
                        <ul>
                            {item.options.map(quest => {
                                const options = {
                                    renderCheck: false,
                                    renderSelect: false,
                                    clResult: null
                                }
                                if (item.type === 'multi') {
                                    item.result.map(resultItem => {
                                        if (resultItem.title === quest.title && resultItem.isValid) {
                                            options.renderSelect = true
                                            options.renderCheck = true
                                            options.clResult = 'correct'
                                            return resultItem
                                        } else if (resultItem.title === quest.title && !resultItem.isValid) {
                                            options.renderSelect = true
                                            options.renderCheck = true
                                            options.clResult = 'selection'
                                            return resultItem
                                        }
                                    })
                                }
                                if (item.type === "solo") {
                                    if (quest.title === item.result[0].title) {
                                        options.renderSelect = true
                                        options.renderCheck = true
                                        item.result[0].isValid ? options.clResult = 'correct' : options.clResult = 'selection'
                                    }
                                }

                                if (quest.isValid) {
                                    options.clResult = 'correct'
                                    options.renderCheck = true
                                }

                                return (
                                    <li className={`item_resp ${options.clResult}`}>
                                        {options.renderCheck && <span className="check"></span>}
                                        <div className='resp-user'>
                                            <h2>{quest.title}</h2>
                                            <p className="hint-text">{quest.comment ? quest.comment : null}</p>
                                        </div>
                                        {options.renderSelect && <div className="select-text">
                                            <img className='cat-selection' src={cat} alt='cat'  />
                                        </div>}
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            ))}
            <div className="wr-button">
                <button onClick={replayTest}>Пройти еще раз</button>
            </div>

        </div>
    )
}
export default Analysis