import React from 'react'
import '../../App.css';

export const Profile = () => {
    const name = 'aldo';
    return (
        <div >

            <div credit="https://wallhaven.cc/w/3zk25y" className="title-backgroundimg"></div>

            <div className="pages">
                <header className="profileheader">
                    <div className="profilename">
                        <h1>Aldo Rizkiawan</h1>
                        <p>Muhammad Aldo Rizkiawan</p>
                    </div>

                    <div className="contact">
                        <h6>Contact</h6>
                        <p> <span><i className="fas fa-envelope-square"></i></span>      aldo.rizkiawan@outlook.com <br/>
                           <span><i className="fab fa-linkedin"></i></span>    <a href="https://www.linkedin.com/in/rizkiawanaldo/">linkedin.com/in/rizkiawanaldo/</a> <br/>
                           <span><i className="fas fa-phone-square-alt"></i></span>     081231566796 / 089502593125<br/>
                            <span><i className="fas fa-map-marked-alt"></i></span>    ********* Jakarta timur, DKI Jakarta, Indonesia
                        </p>
                    </div>
                </header>
                <br/>
                <h4>About me.</h4>
                <p> To be honest, I’m not very good at flaunting over my own strength or down to the <br />
                        ground with my weaknesses, but i can be certain a couple of traits that were in me are <br />
                        curiousity and problem-solver. Anything that could be usefull would probably pique my <br />
                        curiousity.<br />
                        Rather than blabbering all day about something subjective, here’s a link to my<br />
                        16personalities test that some of other recruiters find it usefull. I say it’s pretty accurate and<br />
                        precise from my prespective, it’s not perfect though.<br />
                    <a href="https://www.16personalities.com/profiles/5a076e239fb49 ">https://www.16personalities.com/profiles/5a076e239fb49 </a></p>
                <br />

                <div className="flex-cards">
                    <div className="profile-cards">
                        <h4>Work Experience *</h4>
                        <h5> Software Engineer </h5>
                        <h6>PT. Xsis Mitra Utama</h6>
                        <h6>11/2019 - present</h6>
                        <p>
                            -Building and develop a Web Apps from
                            back-end to front-end using following
                            technologies; .Net framework, .Net
                            Core, Angular JS, Laravel, PHP.</p>
                        <p> -Deploy and maintain the Apps on a
                        Server which using IIS to deploy the
                        back-end API, and using Nginx to
                        deploy the front-end.
                        </p>
                    </div>
                    <div className="profile-cards">
                        <h4>Certificate *</h4>
                        <h5>TOEFL ITP</h5>
                        <h6>SCORE =580</h6>
                        <h6>IDN20153:1303130727:942195</h6>
                        <h6>Issued by ETS, auspices by IIEF, June 21 2019</h6>
                        <h5>PYTHON DATA SCIENCE</h5>
                        <h6>No. 4821/BDG/P-SNBR/CODE/2020</h6>
                        <h6>Issued By SANBERCODE</h6>
                        <p>Description: Using statistical manner to analyze and cleaning
                        big data with python, then make a training Machine Learning
                        model by using various Algorithm to predict unknown sets of
                        data based on the training data</p>
                        <h5>CLOUD SERVER ADMINISTRATION</h5>
                        <h6>17/10/2018 – 7/12/2018</h6>
                        <h6>Issued by MICROSOFT & UI</h6>
                        <p>Description: Training about general server architecture,
                        creating and maintaining cloud-based server optimized
                        for micro services</p>
                    </div>
                    <div className="profile-cards">
                        <h4>Education</h4>
                        <h5>Geopyhsical Engineering</h5>
                        <h6>Institut Teknologi Sepuluh Nopember (ITS) Surabaya</h6>
                        <h6>2014-2018</h6>
                        <h6>Score IPK 3.41 from 4.00 scale</h6>
                    </div>

                </div>





            </div>

        </div>
    )
}

export default Profile



