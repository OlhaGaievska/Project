import GetCategories from "../GetCategories/GetCategories"


function Categories(){
    return(
    <div className='margin_width'>
        <h1 className='main_text'>Categories</h1>
        <GetCategories number = {5}/>
    </div>
    )
}

export default Categories