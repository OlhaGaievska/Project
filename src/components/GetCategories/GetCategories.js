import Fertilizers from './Fertilizers.png';
import Means_of_protection_and_septic_tanks from './Means of protection and septic tanks.png';
import Planting_material from './Planting material.png';
import Tools_and_Inventory from './Tools and Inventory.png';
import Household_products from './Household products.png';
import Pots_and_planters from './Pots and planters.png';
import For_indoor_plants from './For indoor plants.png';
import Garden_figures from './Garden figures.png';

import './GetCategories.css'

function GetCategories(props){ 
    const {number} = props   
      
    const title_url = [
        {title:'Fertilizers', url:Fertilizers},
        {title:'Means of protection and septic tanks', url:Means_of_protection_and_septic_tanks},
        {title:'Planting material', url: Planting_material},
        {title:'Tools and Inventory', url: Tools_and_Inventory},
        {title:'Household products', url:Household_products},
        {title:'Pots and planters', url:Pots_and_planters},
        {title:'For indoor plants', url:For_indoor_plants},
        {title:'Garden figures', url:Garden_figures}
    ]
    
    let data = title_url.filter((e, index)=> index < number)


return(
    <div className='getcategories_categories margin_width'>
        {data.map((elem) =>

        <div className='getcategories_categories_foto'>   
            <img
            src={elem.url}
            alt="categories_photo"
            className="categories_photo"    
            />
            <h2 className="getcategories_categories_text">{elem.title}</h2>            
        </div>
        
        
    )}        
    
    </div>
)
}



export default GetCategories