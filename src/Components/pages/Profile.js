import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../App.css';

export const Profile = () => {
    const name = 'aldo';
    return (
        <div className="pages">
            <Container>
                <Row>
                    <Col>
                     <h1>Profile</h1>
                    </Col>                
                </Row>
                <Row>
                    <Col lg="3" md="3" xs="12">
                        <p> Name: {name} <br />
                            Other name : Electric prick<br />
                            Other name : Electric prick<br />

                             Other name : Electric prick<br />
                             Other name : Electric prick<br />
                             Other name : Electric prick<br />
                             Other name : Electric prick<br />
                             Other name : Electric prick<br />
                             Other name : Electric prick<br />
                             Other name : Electric prick<br />
                             Other name : Electric prick<br /> Other name : Electric prick<br />
                        </p>
                    </Col>

                </Row>
            </Container>
        </div>
    )
}

export default Profile



