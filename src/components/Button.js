
const Button = ({color, text, onClick}) => {

    
    return(
            <button onClick={onClick} 
             style={{background:color}} 
             className='btn'>{text}
             </button>
        
    )
}
Button.defaultProps={
    color: 'crimson',
}

export default Button
