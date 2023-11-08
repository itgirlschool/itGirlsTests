import {Route, Routes} from "react-router-dom";
import {HomePage, Error, TestPage, ResultPage} from './test/pages'
import './App.scss';
import Analysis from './test/pages/Analysis/Analysis.jsx'
import logo from './test/assets/images/logo.png'
import globus from './test/assets/images/iconsite.svg'
import tg from './test/assets/images/icons/iconmonstr-telegram-1.svg'
import facebook from './test/assets/images/icons/iconmonstr-facebook-1.svg'
import inst from './test/assets/images/icons/iconmonstr-instagram-11.svg'
import youtube from './test/assets/images/icons/iconmonstr-youtube-6.svg'
import {useContext} from "react";
import {TestContext} from "./context/TestContext.jsx";


function App() {
    return (
        <div className="App">
            <header className='header'>
                <div className="logo">
                    <img src={logo} alt='logo'/>
                </div>
                <div className='nav'>
                    <a href='https://itgirlschool.com/'>
                        <img src={globus} alt='site'/>
                    </a>
                    <a href='https://itgirlschool.com/' className='site'>Cайт нашей школы</a>
                    <a href="https://itgirlschool.com/webreg" className='to-form'>Нас уже 600+ учениц</a>
                </div>
            </header>
            <main className='main'>
                <Routes>
                    <Route path="/test/:id" element={<TestPage/>}/>
                    <Route path='/result' element={<ResultPage/>}/>
                    <Route path='/:id' element={<HomePage/>}/>
                    <Route path='/analysis' element={<Analysis/>}/>
                    <Route path='*' element={<Error/>}/>
                </Routes>
            </main>

            <footer className='footer'>
                <div className='container' >
                    <div className='adress'>
                        <p> &#169; 2023 <br/>
                            ITGIRLSCHOOL <br/>
                            Школа IT-проффесий <br/> для девушек</p>
                    </div>
                    <div className='contacts'>
                        <div className='images'>
                            <img src={tg} alt='telegramm'/>
                            <img src={facebook} alt='facebook'/>
                            <img src={inst} alt='instagramm'/>
                            <img src={youtube} alt='youtube'/>
                        </div>
                        <p>https://t.me/itgirlschool</p>
                        <p>itgirlchool.com</p>
                    </div>
                    <div className='ide'>
                        <p>
                            Образовательная лицензия<br/>
                            №Л035-01224-40/00646358
                        </p>
                        <p>
                            ОГРНИП 312774604000333<br/>
                            ИНН 772155768427
                        </p>
                    </div>
                </div>

            </footer>
        </div>
    );
}

export default App;
