import {Route, Routes} from "react-router-dom";
import {HomePage, Error, TestPage, ResultPage} from './test/pages'
import './App.scss';
import Analysis from './test/pages/Analysis/Analysis.jsx'
import {useContext} from "react";
import {TestContext} from "./context/TestContext.jsx";


function App() {
        return (
        <div className="App">
            <Routes>
                <Route path="/test/:id" element={<TestPage/>}/>
                <Route path='/result' element={<ResultPage/>}/>
                <Route path='/:id' element={<HomePage/>}/>
                <Route path='/analysis' element={<Analysis/>}/>
                <Route path='*' element={<Error/>}/>
            </Routes>
        </div>
    );
}

export default App;
