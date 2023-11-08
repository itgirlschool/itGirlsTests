import {Link, useParams} from "react-router-dom";
import {useEffect} from 'react'
import cat from '../../../assets/sientificCat.svg'
import crystal from '../../../assets/ crystall.svg'
import smCat from '../../../assets/Gumball.svg'
import testsData from '../../../data.js';
import "./HomePage.scss";


const HomePage = () => {
    const {id: testId} = useParams();
    const week = testsData.filter(item => item.id === testId)[0]

    if (localStorage.getItem('questions')) {
        localStorage.removeItem("questions");
        localStorage.removeItem("index");
        localStorage.removeItem('id');
    }


    const getQuestions = async (testId) => {
        if(localStorage.getItem('questions')) {
            return;
        }
            const test = testsData.find(test => test.id === testId)
            for (const key in test.questions) {
                if( Number(key) === 0) {
                    test.questions[key].focus = true;
                }else {
                    test.questions[key].focus = false;
                }
            }
            localStorage.setItem('questions', JSON.stringify({ questions: test.questions }));
            localStorage.setItem('index', '0');
            localStorage.setItem('id', testId);
    }

    useEffect(()=>{
   getQuestions(testId)
    },[])


    return (
        <div className='global-container'>
            <main className='home-container'>
                <div className='wr-home_container'>
                    <div className='greeting_container'>
                        <div className='wr_text-greeting'>
                            <h2>{week.title}</h2>
                        </div>
                    </div>
                    <div className='instuctions'>
                        <p className='first'>В данном тесте у нас c тобой {week.questions.length} вопросов.</p>
                        <p>Читай каждый вопрос и ответ очень внимательно, так как у тебя должно быть
                            из {week.questions.length} вопросов {week.questions.length - 1} правильных, что бы пройти тест и заработать кристалл. </p>
                        <p> Но если что-то пойдет не так не переживай, тест можно будет пройти заново, но перед второй попыткой загляни в
                            результаты теста и посмотри какие ответы были не верными и почему.
                        </p>
                        <p>Твои ответы на страничке результатов будут помечены таким значком <img src={smCat}
                                                                                                  alt='smCat'/>, что бы
                            тебе было проще разобраться какой ответ ты выбрала.</p>
                        <p className='finish-text'>Желаю тебе успехов и побольше кристаллов!</p>
                        <div className='wr_crystall-instr'>
                            <img src={crystal} alt='crystall'/>
                        </div>
                    </div>

                </div>
            </main>
            <Link to={`/test/${testId}`} className='home-footer'>
                <button className='home-footer-button'>
                    Пройти тест
                </button>
            </Link>
        </div>)

}
export default HomePage;