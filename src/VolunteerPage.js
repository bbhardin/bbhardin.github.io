import {Container, Row, Col} from "react-bootstrap";
import cutting_trees from "./images/volunteer/cutting_tree.jpg";
import benches from "./images/volunteer/benches.jpg";
import drill from "./images/volunteer/drill.jpg";
import northside from "./images/volunteer/northside.jpeg";
import southside from "./images/volunteer/southside.jpeg";
import front from "./images/volunteer/front.jpeg";
import planting from "./images/volunteer/planting.jpeg";
import React from "react";

export default function VolunteerPage() {
    return (
        <div className="leftContentInsets">
            <div className="pageTitle">Volunteer Experience</div>
            <div className="pageSubtitle">Historic Eleutherian College, Inc.</div>
            <div className="pageSubSubtitle" style={{fontWeight: "bold"}}>Outdoor Classroom</div>
            <div className="pageSubSubtitle" style={{fontWeight: "bold"}}>Summer 2021</div>
            <div>
                <ul>
                    <li>Designed, built, and installed an outdoor classroom for 24 students to learn surrounded by the rolling hills of Southern Indiana to facilitate STEM training for minority student teachers.</li>
                    <li>Handcrafted 9 benches, 9 tables, and 1 podium and drilled 37 holes with a 2-man auger.</li>
                    <li style={{fontWeight: "bold"}}>Over 155 man-hours in total.</li>
                    <li>Cleared space in the woods for the classroom and spread landscape fabric and local mulch to create a sustainable space.</li>
                    <li>Trimmed trees and added more gravel to the lane in order to improve the appearance of the property from the road.</li>
                </ul>
                <Container style={{paddingTop: "1rem", marginLeft: "0rem", marginRight: "0rem"}}>
                    <Row>
                        <Col sm={"auto"}>
                            <img className='gridImage' style={{maxHeight: "350px"}} src={benches} />
                        </Col>
                        <Col sm={"auto"}>
                            <img className='gridImage' style={{maxHeight: "350px"}} src={cutting_trees} />
                        </Col>
                        <Col sm={"auto"}>
                            <img className='gridImage' style={{maxHeight: "350px"}} src={drill} />
                        </Col>
                    </Row>
                </Container>

            </div>
            <div className="pageSubtitle">Eagle Scout Project</div>
            <div className="pageSubSubtitle" style={{fontWeight: "bold"}}>Landscaping for North Madison Church of Christ</div>
            <div className="pageSubSubtitle" style={{fontWeight: "bold"}}>Summer 2016</div>
            <div>
                <ul>
                    <li>Landscaped North Madison Church of Christ in Madison, IN.</li>
                    <li>Raised funds, drafted and revised plans, selected plants, and organized labor to accomplish the project.</li>
                    <li style={{fontWeight: "bold"}}>Over 200 man-hours in total.</li>
                </ul>
            </div>
            <Container style={{paddingTop: "1rem", marginLeft: "0rem", marginRight: "0rem"}}>
                <Row>
                    <Col>
                        <img className='gridImage' style={{maxHeight: "350px"}} src={front} />
                    </Col>
                    <Col>
                        <img className='gridImage' style={{maxHeight: "350px"}} src={northside} />
                    </Col>
                    <Col>
                        <img className='gridImage' style={{maxHeight: "350px"}} src={southside} />
                    </Col>
                    <Col>
                        <img className='gridImage' style={{maxHeight: "350px"}} src={planting} />
                    </Col>
                </Row>
            </Container>

        </div>
    );
}