import React from 'react'

export default (props) => {
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
