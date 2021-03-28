import React from 'react'


const button = ({color, text}) => {
    return (
        <div>
            <button  style ={{backgroundColor:color}}className='btn'>
                {text}</button>
            
        </div>
    )
}

export default button
