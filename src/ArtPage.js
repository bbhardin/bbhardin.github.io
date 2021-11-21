import {Col, Container, Row} from "react-bootstrap";
import ohtwo from "./images/art/IMG_0602.jpg";
import seventeen from "./images/art/IMG_2517.jpg";
import seventyfive from "./images/art/IMG_4075.jpg";
import eightsix from "./images/art/IMG_4086.jpg";
import thirty from "./images/art/IMG_4130.jpg";
import seventyseven from "./images/art/IMG_6777.jpg";
import React from "react";


export default function ArtPage() {

    return(

        <div>
            <div className="leftContentInsets">
                <div className="pageTitle">Favorite Art Pieces</div>

                    <Container style={{paddingTop: "1rem", marginLeft: "0rem", marginRight: "0rem"}}>
                        <Row>
                            <Col sm={5}>
                                <img className='gridImage' src={seventeen} />
                            </Col>
                            <Col>
                                <img className='gridImage' src={seventyfive} />
                            </Col>
                            <Col sm={3}>
                                <img className='gridImage' src={eightsix} />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <img className='gridImage' src={thirty} />
                            </Col>
                            <Col sm={5}>
                                <img className='gridImage' src={seventyseven} />
                            </Col>
                            <Col >
                                <img className='gridImage' src={ohtwo} />
                            </Col>
                        </Row>
                    </Container>

                </div>
            </div>

    );

}
