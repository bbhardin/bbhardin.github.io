
import icon from "./images/Icon.png"
import dn from "./images/doctorsnote.png"
import hcr from "./images/HCR.png"
import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import information from "./images/wwdc/information.png";
import tree from "./images/wwdc/treewouldittake.png";
import report from "./images/wwdc/your report.png";
import info from "./images/wwdc/info.png";
import light from "./images/smart_light_switch.jpeg";
import timingchain from "./images/projects/timingchain.JPG";
import timingchain2 from "./images/projects/timingchain_close.JPG";

export default function ProjectsPage() {
    return (
        <div className="leftAndRightContentInsets">

            <div className="pageTitle">Projects</div>

            <div className="leftContentInsets" >

                <div ><div className="projectSubtitle" >DCnet Research Project</div>
                    <div className="pageSubSubtitle">Undergraduate Research with Professor Douglas Comer</div>
                    <ul>
                        <li>Worked with Professor Douglas Comer to implement a new data center architecture based on unique static MAC addresses to provide reliable and quick VM migration.</li>
                        <li>Designed tests utilizing Mininet and ONOS to simulate our architecture and test network performance.</li>
                    </ul></div>



            <div className="projectSubtitle"> <a href="https://apps.apple.com/us/app/purdue-hcr/id1416403036">Purdue Honors College & Residences App </a></div>
            <img className='avatar' style={{maxWidth: 100, borderRadius: '15%', float: 'right', marginRight: 50, borderColor: 'black', borderWidth: 2, marginLeft: 50}} src={hcr} />
            <div className="pageSubSubtitle">President of Purdue Honors College Development Committee</div>
            <div className="leftContentInsets">Led the iOS team to develop an app to support the Purdue Honors College and Residences in their house
                competition system. The system incentives residents to participate in the college and earn more points
                than other dorm floors. The app is used by over 900 students and faculty and also includes features such
                as events happening around Honors and laundry machine status updates.
            </div>

            <div className="projectSubtitle"><a href="https://github.com/bbhardin/A-Guide-to-MacOS-Scaled-Resolutions">A Guide to MacOS Scaled Resolutions</a></div>
            <div className="pageSubSubtitle leftContentInsets">(Slightly popular) GitHub guide I wrote on enabling scaled resolution support in MacOS.</div>

            <div className="projectSubtitle"><a href="https://github.com/bbhardin/DriversFootprint">Driver's Footprint</a></div>
            <div className="leftContentInsets"> App I developed for Apple's 2021 WWDC Student Developer Challenge to predict a user's carbon footprint
                based on how much they drive to work. It compares the number of trees you would have to plant each year
                to offset your driving as well as how many hamburgers you would have to avoid eating to offset your
                environmental impact.
            </div>
                <Container style={{paddingTop: "1rem", marginLeft: "0rem", marginRight: "0rem"}}>
                    <Row>
                        <Col>
                            <img className='gridImage' style={{maxHeight: "350px"}} src={info} />
                        </Col>
                        <Col>
                            <img className='gridImage' style={{maxHeight: "350px"}} src={information} />
                        </Col>
                        <Col>
                            <img className='gridImage' style={{maxHeight: "350px"}} src={report} />
                        </Col>
                        <Col>
                            <img className='gridImage' style={{maxHeight: "350px"}} src={tree} />
                        </Col>
                    </Row>
                </Container>

            <img className='avatar' style={{maxWidth: 100, borderRadius: '15%', float: 'right', marginRight: 50}} src={icon} />
            <div className="projectSubtitle"><a href="https://apps.apple.com/us/app/skill-zone-play-to-the-top/id1576326199">SkillZone</a></div>
            <div className="leftContentInsets">
            <div className="pageSubSubtitle">Minigame iOS App</div>
            <ul><li>Helped develop components of a mini game app with over 62,000 users.</li></ul>
            </div>

            <div className="projectSubtitle"><a href="https://github.com/bbhardin/smart-light-control">Smart Light Control from a Mercedes Window Switch Panel</a></div>
            <div className="leftContentInsets">A simple smart light control panel using IFTTT hooks built on a window switch control panel from a 2001
                Mercedes ML320. Each switch corresponds to a different ceiling light, and the inputs are digital on/off based
                on if the user pulls up on each switch. I would like to get an analogue to digital convertor so
                I can monitor the switch resistance to determine if user is pulling up or down and adjust the lights accordingly.
                I would also like to add the ability to hold the switch up or down to slowly dim/brighten.</div>
                <Container><Row><Col><img className='gridImage' style={{maxHeight: "300px"}} src={light} /></Col></Row></Container>

            <div className="projectSubtitle"><a href="https://github.com/PallavAg/Appetyte">Appetyte</a></div>
                <div className="leftContentInsets">
            <div className="pageSubSubtitle">CS407 Semester Project, Fall 2022</div>
            <ul><li>Developing an app to help users reduce food waste by making recipes for their ingredients that expire soon.</li></ul>
                </div>

            <div className="projectSubtitle"><a href="https://github.com/NMerz/DoctorsNote">DoctorsNote</a></div>
            <img className='avatar' style={{maxWidth: 100, borderRadius: '15%', float: 'right', marginRight: 50}} src={dn} />
                <div className="leftContentInsets">
            <div className="pageSubSubtitle">CS307 Semester Project, Sprint 2020</div>
            <li>Communicated between project coordinator and team, ensuring communication and adherence to course goals.</li>
            <li>Guided iOS team, writing front-end and API algorithms, to ensure app fulﬁlled requirements of an encrypted patient-doctor messaging platform.</li>
            <li>Organized and led team meetings to promote communication even when working in several timezones during the COVID-19 pandemic.</li>
                </div>
            </div>




        </div>
    );
}