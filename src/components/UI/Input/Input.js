import './Input.css'

function Input (props){
    let {type, placeholder, color, size} = props
    return(
        <input type={type} placeholder={placeholder} className={`input_elem ${type} ${color} ${size}`}/>        
    )
}

export default Input