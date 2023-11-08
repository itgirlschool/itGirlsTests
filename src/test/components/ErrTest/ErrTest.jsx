import cat from "../../../assets/Gumball.svg";
import React from "react";
import './ErrTest.scss'
import {useNavigate} from "react-router-dom";

const ErrTest = () => {
    const navigate = useNavigate()
    const numberLess = localStorage.getItem('id')
    return (
        <div className='container-err'>
            <div className ="container_error"><img src={cat} alt={cat}/></div>
            <h1>Нам очень жаль но произошли технические неполадки <br/> Закрой эту страничку и перейди по
                ссылке,<br/> что у тебя указана в уроке <span className='crystall'>
            </span></h1>
        </div>
    )
}
export default ErrTest
