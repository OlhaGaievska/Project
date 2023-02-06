import GetCategories from "../GetCategories/GetCategories"

function Categories(){
    return(
        <div>
            <div>
                <div className='margin_width'>
                    <h1 className='main_text'>Categories</h1>
                </div>
                <GetCategories number = {5}/>
            </div>
        </div>
    )
}

export default Categories