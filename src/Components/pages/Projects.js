import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import snake from '../../img/snake.png';

import { useHistory } from 'react-router-dom'


const Projects = () => {

    const changePage = new useHistory();
    return (
        <div className="pages">
            <Container>
                <Row>
                    <Col>
                        
                        <h1>Projects</h1>
                    </Col>
                </Row>
                <Row>
                    <div onClick={() => changePage.push("/project/snake")} className="proj_card">
                    <div>Snake</div>
                        <img src={snake} alt="snake img"></img>
                    </div>
                    <div className="proj_card"></div>
                    <div className="proj_card"></div>
                    <div className="proj_card"></div>


                </Row>
            </Container>
        </div>
    )
}

export default Projects
