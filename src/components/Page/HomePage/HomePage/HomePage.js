
import CategoriesList from "../../CategoriesPage/CategoriesList/CategoriesList";
import Coupon from "../Coupon/Coupon";
import NewSeasonSale from "../NewSeasonSale/NewSeasonSale";
import SaleList from "../Sale/SaleList";


function HomePage(){
    return(
        <div>
            <NewSeasonSale/>
            <CategoriesList number = {4}/>
            <Coupon/>        
            <SaleList number = {4}/>             
        </div>
    )
}

export default HomePage