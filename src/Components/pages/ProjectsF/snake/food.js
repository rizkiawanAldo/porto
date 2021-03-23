import React from 'react'

const food = (props) => {
    const style={
        left:`${props.loc[0]}%`,
        top:`${props.loc[1]}%`,
        visibility:props.started? "visible" :"hidden"
    }
    return (
        <div className='snakefood' style={style}>            
        </div>
    )
}

export default food
