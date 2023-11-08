import ProgressBar from "../ProgressBar/ProgressBar";
import "./Header.scss";

const Header = ({questions, currentIndex}) => {

    if(!questions?.length) {
        return null;
    }
    return (
        <div className='test-header-container'>
            <ProgressBar
                item={currentIndex +1}
                amount={questions.length}
            ></ProgressBar>
            <div className="test-header-counter">
                {currentIndex + 1}/{questions.length}
            </div>
        </div>
    )
}
export default Header;