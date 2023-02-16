import notFound from './notFound.jpg';
import './NotFound.css'

function NotFound(){
    return(
        <div className="not_Found">
        
            <img width={1440} height={1000}
                src={notFound}
                alt="flovers_photo"
                className="flovers_photo"
            />
        
        </div>
    )
}

export default NotFound