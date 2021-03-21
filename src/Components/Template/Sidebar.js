import React from 'react'
import * as constants from '../../Libraries/constant'
import {useHistory} from 'react-router-dom'

const Sidebar = () => {
    const changePage=new useHistory();

    let menulist = constants.menu_list.map((item, index) => {
        return <li key={item.Name} onClick={()=>changePage.push(item.url)}>
                    {item.Name}
               </li>
    })
    return (
        <div className="sidebar">
            <ul>
                {menulist}
            </ul>
        </div>
    )
}

export default Sidebar
