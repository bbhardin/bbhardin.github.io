
import {Container, Row, Col} from "react-bootstrap";
import florence from "./images/florence.jpg";
import gelato from "./images/gelato.jpg";
import houses from "./images/houses.jpg";
import venice_canal from "./images/venice_canal.JPG"
import vineyard from "./images/vineyard.jpg"
import React from "react";

export default function TravelsPage() {
    return (
        <div className="leftContentInsets">
            <div className="pageTitle">Some of My Travels</div>
            <div className="pageSubtitle">Upcoming: I will be studying at ETH Zürich for Spring 2022!!</div>
            <div className="pageSubtitle">Italian Discoveries Study Abroad</div>
            <div>
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
