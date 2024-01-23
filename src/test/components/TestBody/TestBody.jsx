import {useEffect, useState} from "react";
import oval from "../../../assets/oval.svg";
import vector from "../../../assets/Vector.svg";
import MultiQuestion from "./MultiQuestion.jsx";
import SoloQuestion from "./SoloQuestion.jsx";
import {Button} from "antd";
import {Link ,useParams} from "react-router-dom";
import "./TestBody.scss";
import getImgTest from "../../common/imagesTest.js";

const TestBody = ({testQuestions, setCurrentIndex, currentIndex}) => {
    const [questions, setQuestions] = useState([]);
    const [answer, setAnswer] = useState([]);
    const [isAnswer, setIsAnswer] = useState(null);
    const  {id} = useParams()



    useEffect(() => {
        if (!testQuestions) return;
        setQuestions(testQuestions);
    }, [testQuestions])

    const seeRightAnswerOrNot = () => {
        setIsAnswer(true);
    }

    const sendAnswer = () => {
        const result = questions.map((item, index) => {
            if (index === currentIndex) {
                return {...item, focus: false, result: answer};
            }
            if (index === currentIndex + 1) {
                return {...item, focus: true}
            }
            return item;
        })
        localStorage.removeItem('questions');
        localStorage.setItem('questions', JSON.stringify({questions: result}));

        const newIndex = currentIndex + 1;
        localStorage.removeItem('index');
        localStorage.setItem('index', JSON.stringify(newIndex));

        setCurrentIndex(newIndex);
        setQuestions(result);
        setAnswer([]);
        setIsAnswer(null);
    }

    if (!questions.length) {
        return null;
    }

    const currentQuestion = questions.find((item) => item.focus);
    const testProps = {
        title: currentQuestion.title,
        imgSrc: currentQuestion.image || null,
        options: currentQuestion.options,
        answer,
        setAnswer,
        isAnswer,
    }

    function  renderImg(){
        if(testProps.imgSrc === null) return
        const resultIdWeek = id.replace(/-/g, "_");
        return getImgTest(resultIdWeek,testProps.imgSrc)
    }

    return (
        <div className='test-body-container'>
            <div className='test-body-wrapper'>
                {currentQuestion?.type === 'multi'
                    ? <MultiQuestion {...testProps} renderImg={renderImg} />
                    : <SoloQuestion {...testProps} renderImg={renderImg} />
                }
                {currentIndex === questions.length - 1 && isAnswer
                    ? (
                        <Link to='/result' className='test-body-link-wrapper'>
                            <Button
                                className='test-body-link'
                                onClick={sendAnswer}
                                disabled={!answer.length}
                            >
                                <img src={vector} alt='vector'/>
                                Узнать результат
                                <img src={oval} alt='oval'/>
                            </Button>
                        </Link>
                    )
                    : (
                        <Button
                            className='test-body-button'
                            onClick={!isAnswer ? seeRightAnswerOrNot : sendAnswer}
                            disabled={!answer.length}
                        >
                            <img src={vector} alt='vector'/>
                            {!isAnswer ? 'Ответить' : 'Далее'}
                            <img src={oval} alt='oval'/>
                        </Button>
                    )
                }
            </div>
        </div>
    )
}
export default TestBody;
