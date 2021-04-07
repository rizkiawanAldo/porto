import React from 'react'
import Row from 'react-bootstrap/Row';
import snake from '../../img/snake.png';
import arduino from'../../img/arduino.png';

import { useHistory } from 'react-router-dom'


const Projects = () => {

    const changePage = new useHistory();
    return (
        <div>
            <div credit="https://wallhaven.cc/w/3zk25y" className="title-backgroundimg"></div>
            <div className="pages">
                <h1>Projects</h1>
                <Row>
                    <div onClick={() => changePage.push("/project/snake")} className="proj_card">
                        <div>Snake</div>
                        <img src={snake} alt="snake img"></img>
                    </div>
                    <div  onClick={() => changePage.push("/project/diy")} className="proj_card">
                        <div>DIY Projects</div>
                        <img src={arduino} alt="arduino logo"></img>
                    </div>
                    <div className="proj_card"></div>
                    <div className="proj_card"></div>


                </Row>
                </div>
        </div>
    )
}

export default Projects
