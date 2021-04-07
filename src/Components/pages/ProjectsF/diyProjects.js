import React from 'react'
import { useHistory } from 'react-router-dom'


const diyProjects = () => {
    const changePage = new useHistory();
    return (
        <div className="contents">

            <div credit="https://wallhaven.cc/w/3zk25y" className="title-backgroundimg"></div>

            <div className="pages">
                <div className="backbutton" data-tip="Back" onClick={() => changePage.goBack()}>
                    <span><i className="fa fa-caret-left"></i></span> Back
                </div>

                <div className="grid">
                    <div className="box">
                        <div className="boxtitle">
                            <h2>Joystick</h2>
                        </div>
                        <div className="boxmedia">
                            <iframe src="https://drive.google.com/file/d/1IU-Yaa4v1J1w6jkpmTkZI7VO1ILxKRPD/preview" ></iframe>
                            <iframe src="https://drive.google.com/file/d/1Q18FuLceHQBlEAogV_h98MgXP11qMY7K/preview" ></iframe>                        </div>
                        <div className="boxcontent">
                            <p>DIY Joystick yang di control oleh arduino untuk membaca sensor dan mengirimkannya ke USB input pada komputer. Di test pada game Arma 3</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="boxtitle">
                            <h2>Head tracker</h2>
                        </div>
                        <div className="boxmedia">
                            <iframe src="https://drive.google.com/file/d/1UvBF5s35Z6oTsDNeDv3oWyJrPF7zevIM/preview" ></iframe>
                            <iframe src="https://drive.google.com/file/d/1fqVOKoF9hpzy1QmLl_GCc1jLfPjP2SoX/preview" ></iframe>                        </div>
                        <div className="boxcontent">
                            <p>Head tracker yang kontrol oleh arduino untuk menentukan posisi kepala, yang dapat digunakan untuk mengubah arah kamera in-game sesuai dengan arah kepala</p>
                        </div>
                    </div>
                    <div className="box">1</div>
                    <div className="box">1</div>
                    <div className="box">1</div>
                </div>



            </div>



        </div>
    )
}

export default diyProjects
