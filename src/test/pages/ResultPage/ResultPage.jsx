import {useEffect} from "react";
import Counter from "../../components/Counter/Counter.jsx";
import ErrTest from '../../components/ErrTest/ErrTest.jsx'
import './result-page.scss'
import crystal from '../../../assets/ crystall.svg'
import cat from '../../../assets/Gumball.svg'
import {useNavigate} from "react-router-dom";


const ResultPage = () => {
    const local = JSON.parse(localStorage.getItem('questions'))
    const id = localStorage.getItem('id')
    const navigate = useNavigate()
    function replayTest() {
        navigate(`/test/${id}`)
        localStorage.clear()
    }

    if (!local || !local.questions[0].hasOwnProperty('result')) {
        return <ErrTest/>
    }


    function countCorrectAnswer() {
        let count = 0
        local.questions.forEach(item => {
            if (item.type === 'multi') {
                item.result.map(it => it.isValid).includes(false) ? null : count += 1
                return
            }
            if (item.type === 'solo') if (item.result[0].isValid) count += 1
        })
        return count
    }


    return (
        <div className='result_container'>
            <div className='result_content'>
                <div className='render_success'>
                    {countCorrectAnswer() >= local.questions.length - 1 ?
                        <div className="wr-title-success">
                            <h2>Урааа!</h2>
                            <img src={crystal} alt='img'/>
                            <h2 className="title_success">Ты молодец! <br/> Тест недели номер  {id.slice(5)}  пройден успешно!</h2>
                            <h2>Можешь отправлять скриншот этой странички коту.</h2>
                        </div>
                        :
                        <div>
                            <h2>Чуть-чуть не хватило,<br/>не унывай!</h2>
                            <h2>Разбери ошибки и попробуй еще раз!</h2>
                            {/*<img className='cat' src={cat} alt='cat'/>*/}
                        </div>
                    }

                </div>
                <div className="test-result__counter">
                    <Counter questionsLength={local.questions.length} countCorrectAnswer={countCorrectAnswer()}
                             test={true}/>
                </div>
                <div className='wr_button-result'>
                    {countCorrectAnswer() !== local.questions.length && <button onClick={() => {
                        navigate('/analysis')
                    }} className="btn_see-results">Разобрать ошибки</button>}
                    {countCorrectAnswer() >= local.questions.length - 1 ?
                        null : <button onClick={replayTest}>Пройти еще раз</button>}
                </div>
            </div>
        </div>
    )

}
export default ResultPage
