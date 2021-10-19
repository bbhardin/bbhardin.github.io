import motorcycle from "./images/hobbies/motorcycle.jpg";
import hiking from "./images/hobbies/hiking.jpg";
import biking from "./images/hobbies/biking.jpg";
import React from "react";
import {Container, Row, Col} from "react-bootstrap";

export default function HobbiesPage() {
    return (
        <div className="leftContentInsets">
            <div className="pageTitle">Hobbies</div>
            <div>
            <ul style={{fontWeight: "bold"}}>
                <li>Photography</li>
                <div style={{fontWeight: "normal"}}>Check out <a href="https://flic.kr/ps/3woNzS">my Flickr</a>!</div>
                <li>Riding my motorcycle (Royal Enfield Continental GT650)
                    <Container>
                        <Row>
                            <Col>
                                <img className='gridImage' style={{maxHeight: "350px"}} src={motorcycle} />
                            </Col>
                        </Row>
                    </Container>
                </li>
                <li >Hiking</li>
                <Container>
                    <Row>
                        <Col>
                            <img className='gridImage' style={{maxHeight: "350px"}} src={hiking} />
                        </Col>
                    </Row>
                </Container>
                <li>Bicycling</li>
                <Container>
                    <Row>
                        <Col>
                            <img className='gridImage' style={{maxHeight: "350px"}} src={biking} />
                        </Col>
                    </Row>
                </Container>
                <li>Running and Lifting</li>
            </ul>
            </div>
        </div>
    );
}
