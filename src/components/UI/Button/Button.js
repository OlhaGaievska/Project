import './Button.css'

function Button(props){
    let {title, color, size, ...childrens} = props

    return(
        <button {...childrens} className={`button_elem ${color} ${size}`}>
            {title}
        </button>
    )
}

export default Button