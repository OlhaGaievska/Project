import {useForm} from 'react-hook-form'
import { Link } from 'react-router-dom'
import Button from '../../../UI/Button/Button'
import Input from '../../../UI/Input/Input'

function Registration(props){
    const {
        register,
        handleSubmit,
        
    } = useForm()

    const {title, link, button } = props

    const emailElem = register('email', {required: 'Necessarily'})
    const passwordElem = register('password', {required: 'Necessarily'})
    
    return(       
        <div>
            <p>{title}</p>
            <Input placeholder="Your email" size='small_input small_long' {...emailElem}/>
            <Input placeholder="Your password" size='small_input small_long' {...passwordElem}/>            

            <Button color='green' size='small margin margin-bottom' title={button.submit}/>

            <Link to={link}>
                <Button color='silver' size='small' title={button.redirect}/>
            </Link>
        </div>
    )
}



export default Registration