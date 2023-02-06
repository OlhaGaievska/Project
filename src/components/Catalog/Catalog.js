import GetSale from "../GetSale/GetSale"

function Catalog(){
    return(
        <div>
            <div>
                <div className='margin_width'>
                    <h1 className='main_text'>Catalog</h1>
                </div>
                <GetSale number = {30}/>
            </div>
        </div>
    )
}
export default Catalog