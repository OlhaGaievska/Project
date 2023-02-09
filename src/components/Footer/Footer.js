import instagram from './instagram.png';
import whatsapp from './whatsapp.png';
import './Footer.css'

function Footer(){
    return(
        <header className='footer margin_width'>        
           <address className="footer_address">
           <div className="footer_address_tel">
                <h4 className="footer_contacts">Contacts</h4>
                <a className="footer_contacts_tel" href="tel:04912345678">0491 234 56 78</a>
                <div className="footer_address_inst_what">
                    <div className="footer_address_inst">
                        <a href="https://www.instagram.com/">
                            <img width={44} height={44}
                                src={instagram}
                                alt="instagram_photo"
                                className="instagram_photo"
                            />
                            <p>instagram</p>
                        </a>
                    </div>
                    <div className="footer_address_what">                        
                        <a href="https://www.whatsapp.com/">
                            <img width={46} height={46}
                            src={whatsapp}
                            alt="whatsapp_photo"
                            className="whatsapp_photo"
                            />
                            <p>WhatsApp</p>
                        </a>
                    </div>
                </div>                
           </div>           
           <div className="footer_address_inst_address_time">
                <p>Address</p>
                <a href="http://maps.google.com/?q=Klosterstrasse 47, 10179 Berlin">Klosterstrasse 47, 10179 Berlin</a>
                <p>Opening hours</p>
                <p>Round-the-clock</p>
            </div>
            </address>       
        </header>
    )
}

export default Footer