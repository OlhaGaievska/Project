
import CategoriesList from "../../Header/Categories/CategoriesList/CategoriesList";
import Coupon from "../Coupon/Coupon";
import NewSeasonSale from "../NewSeasonSale/NewSeasonSale";
import SaleList from "../Sale/SaleList";


function Home(){
    return(
        <div>
            <NewSeasonSale/>
            <CategoriesList number = {4}/>
            <Coupon/>        
            <SaleList number = {4}/>             
        </div>
    )
}

export default Home