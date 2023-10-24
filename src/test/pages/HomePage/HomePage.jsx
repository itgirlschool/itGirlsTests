import {useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import cat from '../../../assets/sientificCat.svg'
import crystal from '../../../assets/ crystall.svg'
import smCat from '../../../assets/Gumball.svg'
import WeeksTest from '../../../tests/allWeeks.json';
import "./HomePage.scss";


const HomePage = () => {
    const {id: testId} = useParams();
    const week = WeeksTest.filter(item => item.week === testId)[0]

    if (localStorage.getItem('questions')) {
        localStorage.removeItem("questions");
        localStorage.removeItem("index");
        localStorage.removeItem('id');
    }


    return (
        <div className='global-container'>
            <main className='home-container'>
                <div className='wr-img_cat'>
                    <img src={cat} alt='cat'/>
                </div>
                <div className='wr-home_container'>
                    <div className='greeting_container'>
                        <div className='wr_text-greeting'>
                            <h2>Приветствую тебя, милая леди, на тесте<br/>
                                <span>{week.title}</span></h2>
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