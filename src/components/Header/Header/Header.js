import Menu from '../Menu/Menu';
import LogoCatalogRegistration from '../LogoCatalogRegistration/LogoCatalogRegistration';
import './Header.css'


function Header(){
    return(        
        <header className='header margin_width'>       
            <LogoCatalogRegistration/>
            <Menu/>                                
        </header>         
   
    )
}

export default Header