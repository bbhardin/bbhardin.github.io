import motorcycle from "./images/hobbies/motorcycle.jpg";
import hiking from "./images/hobbies/hiking.jpg";
import biking from "./images/hobbies/biking.jpg";
import skiing from "./images/hobbies/ski.jpg";
import sl_original from "./images/cardesigns/sl_original.JPG";
import sl_my_version from "./images/cardesigns/sl_my_version.jpg";
import two_series_original from "./images/cardesigns/2_series_original.jpeg";
import two_series_my_version from "./images/cardesigns/2_series_my_version.jpg";
import mini_my_version from "./images/cardesigns/mini_my_version.jpg";
import mini_original from "./images/cardesigns/mini_original.jpeg";
import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import timingchain from "./images/projects/timingchain.JPG";
import timingchain2 from "./images/projects/timingchain_close.JPG";
import {Link} from "react-router-dom";
import {Nav} from "react-bootstrap";

export default function HobbiesPage() {
    return (
        <div>
            <div className="pageTitle leftContentInsets">Hobbies</div>
            <div>
                <Container style={{padding: "0rem", margin: "1rem"}}>
                    <Row>
                        <Col sm={3}>
                            <ul style={{fontWeight: "bold"}}>
                                <li>Photography</li>
                                <div style={{fontWeight: "normal"}}>Check out <a href="https://flic.kr/ps/3woNzS">my Flickr</a>!</div>
                                <li>Riding my motorcycle <div style={{fontWeight: "normal"}}>(Royal Enfield Continental GT650)</div>
                                </li>
                                <li >Hiking</li>
                                <li>Reading <div style={{fontWeight: "normal"}}>
                                    <div>Check out my book blog, <a href="https://bbhardin1.wixsite.com/paintchipsociety">The Paint Chip Society!</a></div>
                                    (Favorite authors are Dickens, Vonnegut, and Hemingway)</div></li>
                                <li>Tennis</li>
                                <li>Bicycling</li>
                                <li>Running and Lifting</li>
                                <li>Cooking with friends</li>
                                <li>Visiting art museums
                                    <div style={{fontWeight: "normal"}}>
                                        <Nav.Link style={{paddingLeft: 0}}as={Link} to="/art">Some of my favorite pieces</Nav.Link>
                                    </div></li>
                            </ul>
                        </Col>
                        <Col>
                            <img className='gridImage' style={{maxHeight: "350px"}} src={motorcycle} />
                            <img className='gridImage' style={{maxHeight: "350px"}} src={hiking} />
                            <img className='gridImage' style={{maxHeight: "350px"}} src={skiing} />
                            <img className='gridImage' style={{maxHeight: "350px"}} src={biking} />
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className="leftContentInsets">
            <div className="pageSubtitle">Car Projects</div>
            <div>Threading the new timing chain into my '01 Mercedes CL500. After 220k miles, we figured it might be
                time to put a new one in.</div>
            <Row>
                <Col sm={"auto"}>
                    <img className='gridImage' style={{maxHeight: "300px", marginBottom: "1rem"}} src={timingchain} />
                </Col>
                <Col sm={"auto"}>
                    <img className='gridImage' style={{maxHeight: "300px", marginBottom: "1rem"}} src={timingchain2} />
                </Col>
            </Row>
            </div>

            <div className="leftContentInsets">
                <div className="pageSubtitle">Car Redesigns</div>
                <div>I only use an iPad and a free app, but I occasionally love
                        to do rough sketches of how I would modify the design of a car. Here are a few of those
                        rough sketches!
                </div>
                <div style={{fontWeight: "bold", paddingTop: "1rem"}}>2022 Mercedes SL-Class</div>
                <div>I love this car but thought the look was slightly too aggressive given that Mercedes also
                     has the AMG GT. Here's how I would modify the SL to have a grill similar to the 300SL and
                     W113 "Pagoda" SL.
                </div>
                <Container style={{padding: "0rem", margin: "1rem"}}>
                    <Row>
                        <Col>Original</Col>
                        <Col>My Version</Col>
                    </Row>
                    <Row>
                        <Col>
                            <img className='gridImage' style={{maxHeight: "350px"}} src={sl_original} />
                        </Col>
                        <Col>
                            <img className='gridImage' style={{maxHeight: "350px"}} src={sl_my_version} />
                        </Col>
                    </Row>
                </Container>

                <div style={{fontWeight: "bold", paddingTop: "1rem"}}>2022 BMW 2-Series Coupe</div>
                <Container style={{padding: "0rem", margin: "1rem"}}>
                    <Row>
                        <Col>Original</Col>
                        <Col>My Version</Col>
                    </Row>
                    <Row>
                        <Col>
                            <img className='gridImage' style={{maxHeight: "350px"}} src={two_series_original} />
                        </Col>
                        <Col>
                            <img className='gridImage' style={{maxHeight: "350px"}} src={two_series_my_version} />
                        </Col>
                    </Row>
                </Container>
                <div style={{fontWeight: "bold", paddingTop: "1rem"}}>2021 Mini Cooper</div>
                <Container style={{padding: "0rem", margin: "1rem"}}>
                    <Row>
                        <Col>Original</Col>
                        <Col>My Version</Col>
                    </Row>
                    <Row>
                        <Col>
                            <img className='gridImage' style={{maxHeight: "350px"}} src={mini_original} />
                        </Col>
                        <Col>
                            <img className='gridImage' style={{maxHeight: "350px"}} src={mini_my_version} />
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}
