
import {Container, Row, Col} from "react-bootstrap";
import florence from "./images/florence.jpg";
import gelato from "./images/gelato.jpg";
import houses from "./images/houses.jpg";
import venice_canal from "./images/venice_canal.JPG";
import vineyard from "./images/vineyard.jpg";
import eth from "./images/eth.png";
import React from "react";

export default function TravelsPage() {
    return (
        <div className="leftContentInsets">
            <div className="pageTitle">Some of My Travels</div>
            <div className="pageSubtitle">Upcoming: I will be studying at ETH Zürich for Spring 2022!!</div>
            <img style={{maxHeight: "35px", margin: "1rem"}} src={eth}/>
            <div className="leftContentInsets" style={{fontWeight: "bold"}}>I'm excited to take courses on ubiquitous computing, HCI, and computer vision.</div>

            <div className="pageSubtitle" style={{paddingTop: "2rem"}}>Italian Discoveries Study Abroad</div>
            <div className="leftContentInsets">
                We visited Florence, Venice, Cinque Terre, and Paderno del Grappa while studying Da Vinci and the Renaissance
                and The Art of Travel.

                <Container style={{paddingTop: "1rem", marginLeft: "0rem", marginRight: "0rem"}}>
                    <Row>
                        <Col sm={3}>
                            <img className='gridImage' src={florence} />
                        </Col>
                        <Col>
                            <img className='gridImage' src={gelato} />
                        </Col>
                        <Col sm={6}>
                            <img className='gridImage' src={vineyard} />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <img className='gridImage' src={venice_canal} />
                        </Col>
                        <Col sm={5}>
                            <img className='gridImage' src={houses} />
                        </Col>
                    </Row>
                </Container>

            </div>
        </div>
    );
}
