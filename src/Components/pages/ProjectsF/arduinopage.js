import React from 'react'
import { useHistory } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import CardColumn from 'react-bootstrap/CardColumns';
import CardGroup from 'react-bootstrap/CardGroup';


const arduinopage = () => {
    const changePage = new useHistory();
    return (
        <div className="contents">

            <div credit="https://wallhaven.cc/w/3zk25y" className="title-backgroundimg"></div>

            <div className="pages">
                <div className="backbutton" data-tip="Back" onClick={() => changePage.goBack()}>
                    <span><i className="fa fa-caret-left"></i></span> Back
                </div>

                <div className="grid">
                    <div className="box">1</div>
                    <div className="box">1</div>
                    <div className="box">1</div>
                    <div className="box">1</div>
                    <div className="box">1</div>
                </div>



            </div>

            {/* <Card.Img height="400px" as="iframe" src="https://drive.google.com/file/d/1IU-Yaa4v1J1w6jkpmTkZI7VO1ILxKRPD/preview" ></Card.Img>
            <Card.Img height="400px" as="iframe" src="https://drive.google.com/file/d/1Q18FuLceHQBlEAogV_h98MgXP11qMY7K/preview" ></Card.Img>
                                                        */}

        </div>
    )
}

export default arduinopage
