import React from "react";
import profile from "./images/profile.jpeg"
import {Container, Row, Col} from "react-bootstrap"

export default function HomePage() {

    return (
        <div className='leftContentInsets'>

            <div className='pageTitle' style={{paddingBottom: "0rem"}}>Ben Hardin</div>
            <div style={{fontWeight: "bold", fontSize: 20}}>
                <div>Computer Science Honors @ Purdue</div>
                <div style={{paddingBottom: "1rem"}}>Graduating May 2022</div>
            </div>

            <div>
                <Container style={{padding: "0rem", margin: "0rem"}}>
            <Row>
                <Col sm={3}>
                    <img className='avatar' src={profile} />

                </Col>

                <Col>
                    <div className='pageSubtitle' style={{paddingTop: "0rem"}}>About Me </div>
                    <div style={{fontSize: 15}}>
                    <div className='smallBottomPadding'>Surprisingly, growing up on Indiana farms has taught me more than how to drive a tractor; it has taught me a lot about computer science too.</div>
                    <div className='smallBottomPadding'>Living in a community well-separated from the world of the software industry, I learned the importance of software accessibility to those of all backgrounds. I see people struggle to use complicated or quickly deprecated devices made by a team who only saw through the eyes of a software engineer.</div>
                    <div className='smallBottomPadding'>What does this mean for me, a computer science student passionate about systems programming and software engineering? It means I strive to seek out the many perspectives of the end user. I want what I build to be robust, accessible, and make life easier. I am addicted to solving important problems the best way, even when it means hours of dedicated research before I see an approach to the issue.</div>
                    <div className='smallBottomPadding'>Through my experiences with Microsoft, GM, GE Aviation, and the Purdue Honors College Dev Committee, I am learning how to call upon the knowledge, wisdom, and experiences of others when designing a product. The insights of others are critical in product design, and I prioritize these insights.</div>
                    <div className='mediumBottomPadding'>On a personal note, if you want to catch my attention and see my eyes light up, just mention Apple, Mercedes-Benz, or anything about the tech or auto industries. In my free time you’ll find me tinkering with old computers, hiking, practicing photography, or reading dystopian novels (because who doesn’t love an unsatisfying ending). All in all, I’m just a guy passionate about working hard, enjoying life, and taking pride in what I create.</div>
                    <div className='smallBottomPadding' style={{paddingTop: "1rem"}}>If you would like to contact me, I can be reached at bbhardin1 (at) gmail (dot) com.</div>
                    <div className='smallBottomPadding'><a href="https://www.linkedin.com/in/benjamin-hardin">www.linkedin.com/in/benjamin-hardin</a></div>
                    </div>
                </Col>
            </Row>
                </Container>
            </div>
        </div>
    );

}
