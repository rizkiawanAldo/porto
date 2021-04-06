import React from 'react'
import Row from 'react-bootstrap/Row';
import csharp from '../../img/c.svg';
import net from '../../img/net.svg';
import reactL from '../../img/reactL.svg';


const Technology = () => {
    return (
        <div >
            <div credit="https://wallhaven.cc/w/3zk25y" className="title-backgroundimg"></div>

            <div className="pages">
                <h1>Technologies</h1>
                <Row>
                    <div className="tech_card">
                        <div>C#</div>
                        <img alt="c#" src={csharp}></img>
                    </div>
                    <div className="tech_card">
                        <div>.Net</div>
                        <img alt="net" src={net}></img>
                    </div>
                    <div className="tech_card">
                        <div>React</div>
                        <img alt="REact" src={reactL}></img>
                    </div>
                    <div className="tech_card"></div>
                </Row>
            </div>
        </div>
    )
}

export default Technology
