import './Modal.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faXmark} from '@fortawesome/free-solid-svg-icons'
import { Route, Routes } from 'react-router-dom'
import Registration from '../Header/LogoCatalogRegistration/Registration/Registration'



function Modal(props){
    const {active, setActive} = props

    return(
        <div className={`modal ${active && 'active'}`}>
            <div className={`modal_content ${active && 'active'}`}>
                <FontAwesomeIcon onClick={() => setActive(false)} title={'close'} icon={faXmark} style={{position: 'absolute', right: '5%'}}/>              
                <Routes>                                
                    <Route path='/registrations' element={
                        <Registration
                            title={'Login'}
                            formType={'registrations'}
                            button={{redirect: 'Registrations', submit: 'Login'}}                            
                            link={'/login'}
                            placeholder_email={'email'}
                            placeholder_password={'password'}                                                     
                        />
                    }/>
                    <Route path='/login' element={
                        <Registration
                            title={'Registration'} 
                            formType={'login'}  
                            button={{redirect: 'Login',  submit: 'Registration'}}
                            link={'/registrations'}
                            placeholder_email={'email'}
                            placeholder_password={'password'}  
                        />
                    }/>
                </Routes>
            </div>
        </div>
    )
}

export default Modal