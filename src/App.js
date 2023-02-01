import './App.css';
import {BrowserRouter as Router, Switch, Route, HashRouter} from "react-router-dom"
import HomePage from "./HomePage";
import NavigationBar from "./NavigationBar";
import SkillsPage from "./SkillsPage";
import CertificationsPage from "./CertificationsPage";
import ProjectsPage from "./ProjectsPage";
import VolunteerPage from "./VolunteerPage";
import HobbiesPage from "./HobbiesPage";
import TravelsPage from "./TravelsPage";
import ContactPage from "./ContactPage";
import ArtPage from "./ArtPage";
import ResumePage from "./ResumePage";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useEffect} from "react";

function App() {
  return (
      <>
        <HashRouter basename="/mysite">
            <NavigationBar/>
            <Switch>
                <Route exact path="/" component={HomePage}/>
                {/*<Route exact path="/about" component={HomePage}/>*/}
                <Route exact path="/resume" component={ResumePage}/>
                <Route exact path="/skills" component={SkillsPage}/>
                <Route exact path="/training" component={CertificationsPage}/>
                <Route exact path="/projects" component={ProjectsPage}/>
                <Route exact path="/volunteer" component={VolunteerPage}/>
                <Route exact path="/hobbies" component={HobbiesPage}/>
                <Route exact path="/travels" component={TravelsPage}/>
                <Route exact path="/contact" component={ContactPage}/>
                <Route exact path="/art" component={ArtPage}/>
            </Switch>
            <p style={{paddingBottom: "4rem"}}></p>
            <div className='bottomElement' style={{paddingTop: "0.5rem", paddingBottom: "0.5rem", paddingLeft: "1rem", color: "black", backgroundColor: "white"}}>
                Website built by Ben Hardin, using React + GitHub Pages
                <a style={{float: "right", paddingRight: "1rem", textDecoration: "none", color: "white" }} href="https://www.linkedin.com/in/benjamin-hardin">My LinkedIn</a>
            </div>
        </HashRouter>
      </>
  );
}

export default App;
