import PropTypes from 'prop-types'
import Button from './Button'

const header = ({ title}) => {

    const onClick= () =>{
        console.log('hellow')
    }
    return (
        <header className="header">
            <h1>{title}</h1>
            <Button color ='green' text ='Add' onClick={onClick}/>
   
            
        </header>
    )
}

header.defaultProps={
    title: "Task Tracker"
}

header.propTypes ={
    title: PropTypes.string,
}

export default header
