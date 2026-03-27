import {Switch, Route, HashRouter} from "react-router-dom"
import React from "react";
import {Suspense} from "react";
import NavigationBar from "./NavigationBar";
import 'bootstrap/dist/css/bootstrap.min.css';

const HomePage = React.lazy(() => import('./HomePage'));
const ResumePage = React.lazy(() => import('./ResumePage'));
const SkillsPage = React.lazy(() => import('./SkillsPage'));
const CertificationsPage = React.lazy(() => import('./CertificationsPage'));
const ProjectsPage = React.lazy(() => import('./ProjectsPage'));
const PublicationsPage = React.lazy(() => import('./PublicationsPage'));
const VolunteerPage = React.lazy(() => import('./VolunteerPage'));
const HobbiesPage = React.lazy(() => import('./HobbiesPage'));
const ContactPage = React.lazy(() => import('./ContactPage'));

function App() {
  return (
      <>
        <HashRouter basename="/mysite">

            <NavigationBar/>

            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    {/*<Route exact path="/about" component={HomePage}/>*/}
                    <Route exact path="/resume" component={ResumePage}/>
                    <Route exact path="/skills" component={SkillsPage}/>
                    <Route exact path="/training" component={CertificationsPage}/>
                    <Route exact path="/projects" component={ProjectsPage}/>
                    <Route exact path="/publications" component={PublicationsPage}/>
                    <Route exact path="/volunteer" component={VolunteerPage}/>
                    <Route exact path="/hobbies" component={HobbiesPage}/>
                    <Route exact path="/contact" component={ContactPage}/>
                    <Route component={() => <div style={{textAlign:"center"}}>Page not found.</div>} />
                </Switch>
            </Suspense>
            <p style={{paddingBottom: "4rem"}}></p>
            <div className='bottomElement' style={{paddingTop: "0.5rem", paddingBottom: "0.5rem", paddingLeft: "1rem", color: "black", backgroundColor: "white", fontWeight: "lighter"}}>
                Website built by Ben Hardin, using React + GitHub Pages
                <a style={{float: "right", paddingRight: "1rem", textDecoration: "none", color: "white" }} href="https://www.linkedin.com/in/benjamin-hardin">My LinkedIn</a>
            </div>
        </HashRouter>
      </>
  );
}

export default App;
