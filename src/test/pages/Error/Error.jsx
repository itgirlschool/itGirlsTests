import  {useParams,useNavigate} from "react-router-dom";
import './err.scss'

const Error = ()=>{
    const navigate = useNavigate()
    const {id} = useParams()
    return(
        <div className='container_error'>
        <button onClick={()=>navigate(`/${id}`)} >Вернуться на главную</button>
        </div>
    )
}
export default Error