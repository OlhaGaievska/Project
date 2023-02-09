import GetSale from "../GetSale/GetSale"

function Catalog(){
    return(
        <div className='margin_width'>            
            <h1 className='main_text'>Catalog</h1>            
            <GetSale number ={30}/>
        </div>
    )
}
export default Catalog