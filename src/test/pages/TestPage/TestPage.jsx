import Header from "../../components/Header/Header";
import TestBody from "../../components/TestBody/TestBody";
import TestHearts from "../../components/TestHearts/TestHearts";
import {useEffect, useState} from "react";
import "./TestPage.scss";
import {useParams} from "react-router-dom";

const TestPage = () => {
    const {id:testId} = useParams();
    const [context, setContext] = useState(JSON.parse(localStorage.getItem('questions')) || []);
    const [currentIndex, setCurrentIndex] = useState(+localStorage.getItem('index') || 0);
    const [error, setError] = useState(false);

    const getQuestions = async (testId) => {
        if(localStorage.getItem('questions')) {
            return;
        }
        try{
             import(`/src/tests/${testId}.json`)
                .then((module) => {
                    for (const key in module.questions) {
                        if( Number(key) === 0) {
                            module.questions[key].focus = true;
                        }else {
                            module.questions[key].focus = false;
                        }
                    }
                    setContext({
                        ...module.default,
                        weekId: testId,
                        questions: module.questions,
                    });
                    localStorage.setItem('questions', JSON.stringify({ questions: module.questions }));
                    localStorage.setItem('index', '0');
                    localStorage.setItem('id', testId);
                })
        }catch (error) {
            console.log(`Error: ${error}`);
            setError(true);
        }
    }

    useEffect(() => {
        (async () =>  getQuestions(testId))()
    }, [testId])

    if(!context) {
        return null;
    }
    if(error) {
        return <p>При загрузке произошла ошибка, перезагрузите страницу.</p>
    }
    return (
        <div className='container'>
            <Header questions={context.questions} currentIndex={currentIndex}/>
            {/*<TestHearts/>*/}
            <TestBody
                testQuestions={context.questions}
                setCurrentIndex={setCurrentIndex}
                currentIndex={currentIndex}
            />
        </div>
    )
}
export default TestPage;