import map from './map.png';

function Contacts(){
    return(
        <address className='margin_width'>
        <h2 className='main_text'>We are here!</h2>
        <img
            src={map}
            alt="map_photo"
            className="map_photo"
            />
        </address>
    )
}

export default Contacts