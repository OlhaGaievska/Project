import './Input.css'

function Input (props){
    let {type, placeholder, color, size, ...otherProps} = props
    return(
        <input placeholder={placeholder} type={type} {...otherProps} className={`input_elem ${type} ${color} ${size}`}/>        
    )
}

export default Input