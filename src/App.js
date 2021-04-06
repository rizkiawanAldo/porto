import React, { useState } from "react"
import Sidebar from './Components/Template/Sidebar'
import './Styles/custom.scss';
import HomePage from './Components/pages/Home'
import ProfilePage from './Components/pages/Profile'
import ProjectPage from './Components/pages/Projects'
import TechPage from './Components/pages/Technology'
import SnakePage from'./Components/pages/ProjectsF/snake/snakePage'
import ArduinoPage from './Components/pages/ProjectsF/arduinopage'


import Topbar from './Components/Template/Topbar'
// import Footerbar from './Components/Template/Footerbar'
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css'
import '../node_modules/@fortawesome/fontawesome-free/js/all.min.js'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  const [isHide, setHide] = useState(true);
  const [pages, setPage] = useState("")

  const showsidebar =()=>{
    setHide(false);
  }
  const hidesidebar=()=>{
    setHide(true);
  }
  const togglehide = () => {
    setHide(!isHide);
  }
  const changePage = (state) => {
    setPage(state);
    console.log(pages);
  }

  return (
    <Router>
      <div className="App">
       
        <div className="topcontent" >
          <Topbar onToggle={togglehide} isHide={isHide}/>
        </div>
        <div onMouseEnter={()=>showsidebar()} onMouseLeave={()=>hidesidebar()}  className={isHide ? "sidecontent sidecontent_closed" : "sidecontent"}>
          <Sidebar gantihal={changePage} />
        </div>
        <div onClick={() => setHide(true)} className={isHide ? "maincontent" : "maincontent maincontent_active"}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/profile" component={ProfilePage} />
            <Route exact path="/project" component={ProjectPage} />
            <Route exact path="/tech" component={TechPage} />
            <Route exact path="/project/snake" component={SnakePage} />
            <Route exact path="/project/arduinos" component={ArduinoPage}/>

          </Switch>


        </div>
        {/* <div className={isHide ? "footerbar" : "footerbar footerbar_active"}>
          <Footerbar />
        </div> */}
      </div>
    </Router>
  );
}

export default App;
