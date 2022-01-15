import {Container, Row, Col} from "react-bootstrap";
import Collapsible from "react-collapsible";

import cutting_trees from "./images/volunteer/cutting_tree.jpg";
import benches from "./images/volunteer/benches.jpg";
import drill from "./images/volunteer/drill.jpg";
import northside from "./images/volunteer/northside.jpeg";
import southside from "./images/volunteer/southside.jpeg";
import front from "./images/volunteer/front.jpeg";
import planting from "./images/volunteer/planting.jpeg";
import report from "./images/projects/report.pdf";
import React from "react";

export default function VolunteerPage() {

    return (
        <div className="leftContentInsets">
            <div className="pageTitle">Volunteer Experience</div>
            <div className="secondaryPageTitle">Historic Eleutherian College, Inc.</div>
            <div className="pageSubSubtitle" style={{fontWeight: "bold"}}>Outdoor Classroom</div>
            <div className="pageSubSubtitle" style={{fontWeight: "bold"}}>Summer 2021</div>
            <div>
                <ul>
                    <li>Designed, built, and installed an outdoor classroom for 24 students to learn surrounded by the rolling hills of Southern Indiana to facilitate training for minority STEM teachers.</li>
                    <li>Handcrafted 9 benches, 9 tables, and 1 podium. Drilled 37 holes with a 2-man auger.</li>
                    <li style={{fontWeight: "bold"}}>Over 155 man-hours in total.</li>
                    <li>Cleared wooded space for the classroom and spread landscape fabric and local mulch to create a sustainable space.</li>
                    <li>Trimmed trees and added more gravel to the lane to improve property appearance from the road.</li>
                </ul>
                <Container style={{margin: "0.5rem", marginLeft: "0rem", marginRight: "0rem", padding: "0rem", maxHeight: "350px"}}>
                    <Row>
                        <Col sm={6}>
                            <img className='gridImage' style={{maxHeight: "350px"}} src={benches} />
                        </Col>
                        <Col>
                            <img className='gridImage' style={{maxHeight: "350px"}} src={cutting_trees} />
                        </Col>
                        <Col>
                            <img className='gridImage' style={{maxHeight: "350px"}} src={drill} />
                        </Col>
                    </Row>
                </Container>
            </div>
            <span style={{marginTop: "0.5rem", marginBottom: "2rem"}}><Collapsible trigger="Show/Hide Project Report (Draft)"
                   triggerStyle={{fontWeight: "bold", backgroundColor: "lightgray", padding: "5px", borderRadius: "5px"}}>
                   <iframe src={report} style={{width: "90%", height: "500px"}}/>
                </Collapsible></span>

            <div className="secondaryPageTitle topBorder" style={{marginTop: "4rem"}}>Eagle Scout Project</div>
            <div className="pageSubSubtitle" style={{fontWeight: "bold"}}>Landscaping for North Madison Church of Christ</div>
            <div className="pageSubSubtitle" style={{fontWeight: "bold"}}>Summer 2016</div>
            <div>
                <ul>
                    <li>Raised funds, drafted and revised plans, selected plants, and organized labor to accomplish the project.</li>
                    <li style={{fontWeight: "bold"}}>Over 200 man-hours in total.</li>
                </ul>
            </div>
            <Container style={{paddingTop: "1rem", marginLeft: "0rem", marginRight: "0rem"}}>
                <Row>
                    <Col>
                        <img className='gridImage enlarge' style={{maxHeight: "350px"}} src={front} />
                    </Col>
                    <Col>
                        <img className='gridImage enlarge' style={{maxHeight: "350px"}} src={northside} />
                    </Col>
                    <Col>
                        <img className='gridImage enlarge' style={{maxHeight: "350px"}} src={southside} />
                    </Col>
                    <Col>
                        <img className='gridImage enlarge' style={{maxHeight: "350px"}} src={planting} />
                    </Col>
                </Row>
            </Container>

        </div>
    );
}