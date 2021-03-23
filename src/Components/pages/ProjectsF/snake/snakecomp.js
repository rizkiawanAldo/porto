import React from 'react'

const snakecomp=(props) => {
    return(
    <div>
        {props.snakePot.map((dot,i)=>{
            const style={
                left:`${dot[0]}%`,
                top:`${dot[1]}%`
            }
          return(  
            <div className='snake_comp' key={i} style={style}></div>
          )
        })}
    </div>
    )

}

export default snakecomp;
