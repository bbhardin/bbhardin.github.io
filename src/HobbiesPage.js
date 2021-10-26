import motorcycle from "./images/hobbies/motorcycle.jpg";
import hiking from "./images/hobbies/hiking.jpg";
import biking from "./images/hobbies/biking.jpg";
import React from "react";
import {Container, Row, Col} from "react-bootstrap";

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
                                <li>Riding my motorcycle (Royal Enfield Continental GT650)
                                </li>
                                <li >Hiking</li>
                                <li>Bicycling</li>
                                <li>Running and Lifting</li>
                            </ul>
                        </Col>
                        <Col>
                            <img className='gridImage' style={{maxHeight: "350px"}} src={motorcycle} />
                            <img className='gridImage' style={{maxHeight: "350px"}} src={hiking} />
                            <img className='gridImage' style={{maxHeight: "350px"}} src={biking} />
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}
