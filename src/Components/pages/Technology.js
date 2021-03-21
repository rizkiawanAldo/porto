import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import csharp from '../../img/c.svg';
import net from '../../img/net.svg';
import reactL from '../../img/reactL.svg';


const Technology = () => {
    return (
        <div className="pages">
            <Container>
                <Row>
                    <Col>
                        <h1>Technologies</h1>
                    </Col>
                </Row>
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
            </Container>
        </div>
    )
}

export default Technology
