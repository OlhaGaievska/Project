import logo from './logo.png';
import { Link } from 'react-router-dom';
import Button from '../../UI/Button/Button'
import './LogoCatalogRegistration.css'
import Modal from '../../Modal/Modal';
import { useState } from 'react';

function LogoCatalogRegistration(){
    const [active, setActive] = useState(false)
    return( 
        <div className='header_logo'>
            <div className='header_logo_img'>
                <Link to={'/'}>
                    <img
                        src={logo}
                        alt="logo_photo"
                        className="logo_photo"
                    />
                </Link>
            </div>
            <div className='header_logo_button'>
                <Link to={'/products/all'}>
                    <Button title='Catalog' color='green' size='small'/>
                </Link>
            </div>
            <Link to={'/registrations'}>
                <Button onClick={() => setActive(true)} title='Login / Registration' color='light_green' size='small'/>
            </Link>
            <Modal active={active} setActive={setActive}/>
        </div> 
    )
}
        
export default LogoCatalogRegistration