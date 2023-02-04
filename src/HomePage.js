import React from "react";
import profile from "./images/profile.jpeg";
import taillights from "./images/home/taillights.jpeg";
import ori_logo from "./images/home/ori_logo.png";
import rti_logo from "./images/home/rti_logo.png"
import {Container, Row, Col, Nav} from "react-bootstrap";
import {Link} from "react-router-dom";
import { TwitterTimelineEmbed } from "react-twitter-embed";

export default function HomePage() {

    return (

        <div>
            <style>
                @import url('https://fonts.cdnfonts.com/css/sf-new-republic-2');
                @import url('https://fonts.cdnfonts.com/css/berlina');
            </style>
            <div>

                <img className="croppedImage" style={{background: "black"}} src={taillights}/>
                <p style={{width: "90%", color: "white", position: "absolute", top: "85px", left: "50%",
                    transform: "translate(-50%, 0%)", fontWeight: "bold", textAlign: "center"}}>
                    <p className="stroke" style={{font: "Claris Sans", fontSize: 55, marginBottom: "0rem"}}>Ben Hardin</p>
                    <p className="stroke" style={{fontSize: 22, margin: "0rem"}}>Computer Science DPhil Student @ Oxford</p>
                    {/*<p style={{margin: "0rem", paddingBottom: "0.5rem"}}>Graduating May 2022</p>*/}
                    <p className="stroke" style={{margin: "0rem", "marginBottom": "1.2rem"}}>Research Interests: <span style={{fontStyle: "italic"}}>Human Computer-Interaction, Psychological Safety, Autonomous Systems</span></p>
                    <link rel="stylesheet"
                          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
                    <a href="https://www.linkedin.com/in/benjamin-hardin" target="_blank"
                       className="fa fa-linkedin"></a>
                    <a href="https://github.com/bbhardin" target="_blank" className="fa fa-github"></a>
                    <a href="https://www.twitter.com/b_b_hardin" target="_blank" className="fa fa-twitter"></a>
                    <a href="https://www.flickr.com/gp/165665758@N08/4FDeEd" target="_blank"
                       className="fa fa-flickr"></a>
                </p>
            </div>

            <div >

            <div style={{fontWeight: "bold", fontSize: 20}}>
                <div style={{paddingBottom: "0rem", fontSize: 16}}></div>
            </div>


                <Row>
                    <Col sm={"auto"} style={{paddingLeft: "3%"}}>
                        <div>
                            {/*<div style={{backgroundColor: "lightGray", borderBottomRightRadius: "100px", borderBottomLeftRadius: "100px", width: "150px", height:"75px", textAlign:"center"}} />*/}
                            <img className="smallAvatar" style={{marginTop: "3rem"}} src={profile}/>
                            <div style={{backgroundColor: "#EDEDED", borderRadius: "100px", width: "150px", height:"150px", marginTop: "1rem", textAlign:"center", zIndex: "1", position: "absolute"}}>
                                <div className="pageSubSubtitle" style={{paddingBottom: 0, paddingTop: "1.7rem", fontWeight: "bold"}}>Contact</div>
                                <div style={{fontSize: "14px"}}>bbhardin1 (at) gmail (dot) com</div>
                                <div className='smallBottomPadding' style={{paddingBottom: "2rem", fontSize: "14px"}}><a href="https://www.linkedin.com/in/benjamin-hardin">LinkedIn</a></div>
                            </div>

                            {/*<div style={{backgroundColor: "orangered", borderRadius: "100px", width: "150px", height:"150px", marginTop: "1rem", textAlign:"center", transform: "translate(30%, 30%)", zIndex: "-1", position: "absolute"}}/>*/}
                            {/*<div style={{backgroundColor: "sandybrown", borderRadius: "100px", width: "150px", height:"150px", marginTop: "1rem", textAlign:"center", transform: "translate(60%, 60%)", zIndex: "-2", position: "absolute"}}/>*/}
                            {/*<div style={{backgroundColor: "gold", borderRadius: "100px", width: "150px", height:"150px", marginTop: "1rem", textAlign:"center", transform: "translate(90%, 90%)", zIndex: "-3", position: "absolute"}}/>*/}
                            {/*<div style={{backgroundColor: "orange", borderRadius: "100px", width: "150px", height:"150px", marginTop: "1rem", textAlign:"center", transform: "translate(40%, 120%)", zIndex: "-4", position: "absolute"}}/>*/}
                            {/*<div style={{backgroundColor: "red", borderRadius: "100px", width: "150px", height:"150px", marginTop: "1rem", textAlign:"center", transform: "translate(80%, 120%)", zIndex: "-5", position: "absolute"}}/>*/}
                            {/*<div style={{backgroundColor: "gold", borderRadius: "100px", width: "150px", height:"150px", marginTop: "1rem", textAlign:"center", transform: "translate(120%, 120%)", zIndex: "-6", position: "absolute"}}/>*/}

                        </div>
                    </Col>

                    <Col>
                        <Row style={{background:"#ededed", borderTopLeftRadius: "55px", borderBottomLeftRadius: "55px", marginLeft: "3%", marginTop: "3%", marginBottom: "2%"}}>
                            <Col>
                                <div style={{maxWidth: "750px", marginLeft: "5%", paddingLeft: "5%", paddingRight: "5%", background: "#EEEEEE",
                                                borderRadius: "55px", marginTop: "2rem", marginBottom: "2rem"}}>

                                    <div className='pageSubtitle' style={{fontFamily: "SF New Republic", paddingTop: "1rem", color: "black", fontSize:"60px"}}>About Me</div>
                                    <div style={{fontSize: 20, fontWeight: "bold", paddingTop: "10px"}}>
                                        I am a first-year Computer Science PhD student at the University of Oxford advised by <a className="subtleLink" href="https://www.cs.ox.ac.uk/people/marina.jirotka/">Professor Marina Jirokta</a>,
                                        <a className="subtleLink" href="https://ori.ox.ac.uk/people/lars-kunze/">Professor Lars Kunze</a>, and <a className="subtleLink" href="https://ori.ox.ac.uk/people/pericle-salvini/">Dr. Pericle Salvini</a>.
                                    </div>
                                    <div style={{fontSize: 17, fontWeight: "bold", paddingTop: "10px"}}>
                                        I study psychological safety of autonomous vehicles to improve the interactions of humans with
                                        these systems, increasing trust, transparency, and responsible innovation. More broadly, I research
                                        Human-Computer Interaction and novel ways for humans and AI systems to interact.
                                    </div>
                                    <div style={{fontSize: 15, paddingTop: "10px"}}>
                                        <div className='smallBottomPadding'>Surprisingly, growing up on Indiana farms has taught me more than how to drive a tractor; it has taught me a lot about computer science too.</div>
                                        <div className='smallBottomPadding'>Living in a community well-separated from the world of the software industry, I learned the importance of software accessibility to those of all backgrounds. I see people struggle to use complicated or quickly deprecated devices made by a team who only saw through the eyes of a software engineer.</div>
                                        <div className='smallBottomPadding'>What does this mean for me, a computer science student passionate about human-computer interaction and systems programming? It means I strive to seek out the many perspectives of the end user. I want what I build to be robust, accessible, and make life easier. I am addicted to solving important problems the best way, even when it means hours of dedicated research before I see an approach to the issue.</div>
                                        <div className='smallBottomPadding'>Through my experiences with Microsoft, GM, GE Aviation, and the Purdue Honors College Dev Committee, I am learning how to integrate the insight and experiences of others when designing a product.</div>
                                        <div className='largeBottomPadding'>On a personal note, if you want to catch my attention and see my eyes light up, just mention Apple, Mercedes-Benz, or anything about the tech or auto industries. In my free time you’ll find me tinkering with old computers, hiking, practicing photography, or reading dystopian novels (because who doesn’t love an unsatisfying ending). All in all, I’m just a guy passionate about working hard, enjoying life, and taking pride in what I create.</div>


                                        {/*<div style={{paddingTop: "1rem"}}>Check out my book blog, <a href="https://bbhardin1.wixsite.com/paintchipsociety">The Paint Chip Society!</a> (Still under construction)</div>*/}
                                        {/*<div>(Favorite authors are Dickens, Vonnegut, and Hemingway)</div>*/}
                                    </div>
                                </div>
                            </Col>
                            <Col sm={4} style={{paddingRight: "4rem"}}>
                                <div style={{paddingBottom: "5%", background: "#EEEEEE",
                                    borderRadius: "55px", marginTop: "2rem"}}>
                                    <div className="pageSubtitle leftContentInsets" style={{color: "black"}}>Affiliations
                                        <div className="hoverExpand"><a href="https://rti.ox.ac.uk"><img style={{width: "auto", maxWidth: "150px", paddingTop: "20px"}} src={rti_logo}/></a></div>
                                        <div className="hoverExpand"><a href="https://ori.ox.ac.uk"><img style={{width: "auto", maxWidth: "150px", paddingTop: "20px"}} src={ori_logo}/></a></div>
                                    </div>
                                </div>

                                    <div className="secondaryPageTitle leftContentInsets" style={{paddingTop: "3rem"}}>What's New</div>
                                    <div className="leftContentInsets" style={{paddingBottom: "1rem"}}>
                                        <div className="pageSubSubtitle" style={{fontWeight: "bold", color: "gray"}}>Upcoming: March 7-9, 2023</div>
                                        <div className="pageSubtitle" style={{color: "black", paddingTop: "0rem"}}><a style={{color: "black"}} href="icin-conference.org">ICIN 2023</a></div>
                                        {/*<div className="pageSubSubtitle">with US Strategic Command (STRATCOM)</div>*/}
                                        <div style={{paddingTop: "10px"}}>I will be presenting one of my undergraduate computer networks research papers in Paris, France!</div>
                                    </div>
                                    <div className="leftContentInsets" style={{paddingBottom: "1rem"}}>
                                        <div className="pageSubSubtitle" style={{fontWeight: "bold", color: "gray"}}>Upcoming: March 17-19, 2023</div>
                                        <div className="pageSubtitle" style={{color: "black", paddingTop: "0rem"}}><a style={{color: "black"}} href="http://www.icnct.org/">ICNCT 2023</a></div>
                                        {/*<div className="pageSubSubtitle">with US Strategic Command (STRATCOM)</div>*/}
                                        <div style={{paddingTop: "10px"}}>I will be presenting my second undergraduate networks research paper in Nice, France!</div>
                                    </div>
                                    {/*<div className="leftContentInsets">*/}
                                    {/*<div className="pageSubSubtitle" style={{fontWeight: "bold", color: "gray"}}>March 30, 2022</div>*/}
                                    {/*<div className="pageSubtitle" style={{color: "black", paddingTop: "0rem"}}>2022 Academic Alliance Conference</div>*/}
                                    {/*<div className="pageSubSubtitle">with US Strategic Command (STRATCOM)</div>*/}
                                    {/*<div style={{paddingTop: "10px"}}>I was on a virtual panel and presented my paper, <span style={{fontStyle: "italic"}}>An Analysis of Deterrence Options for Chinese Cyber Espionage Against the United States</span>, at the University of Nebraska-Lincoln's 2022 U.S. Strategic Command Deterrence and Assurance Academic Alliance Conference and Workshop.</div>*/}
                            </Col>
                        </Row>
                    </Col>
                    {/*<Col sm={"auto"}>*/}
                    {/*    <div style={{width: "200px"}}> <TwitterTimelineEmbed*/}
                    {/*        sourceType="profile"*/}
                    {/*        screenName="b_b_hardin"*/}
                    {/*        options={{height: 500}}*/}
                    {/*        theme="dark"*/}
                    {/*    /></div>*/}
                    {/*</Col>*/}
                </Row>

            </div>

            <div style={{backgroundColor: "#ededed", paddingBottom: "1rem", paddingLeft: "2rem", marginRight: "3%", borderTopRightRadius: "55px", borderBottomRightRadius: "55px"}}>
                <div className="leftAndRightContentInsets">

                    <div className="pageTitle" style={{paddingTop: "4rem", paddingBottom: "0rem"}}>Selected Projects</div>
                    <div><Nav.Link style={{paddingLeft: 0, fontWeight: "bold"}}as={Link} to="/projects">See More</Nav.Link> or see <a href="https://github.com/bbhardin">my GitHub</a> for all my latest projects.</div>

                    <div className="leftContentInsets">
                    <div className="pageSubtitle boxhead" style={{color: "black", paddingTop: "3rem"}}>Winter Break 2021/22: Purdue Honors College Event Analytics</div>
                    <div className="pageSubSubtitle" style={{fontWeight: "bold"}}>Goal: Help the Honors College determine event popularity
                        and boost resident engagement to encourage a sense of community</div>
                    <div className="mediumBottomPadding">I'm cleaning and organizing data from event submissions within <a href="https://apps.apple.com/us/app/purdue-hcr/id1416403036">the Honors College app</a> that I lead.
                            Residents submit points for attending events in order to earn awards for their dorm residence floor. We are analyzing these submissions from the past two years to
                        collect statistics on event attendance and improve future events.</div>

                    <div className="pageSubtitle boxhead"><a href="https://github.com/real-dcnet/dcnet-source">DCnet Research Project</a></div>
                    <div className="pageSubSubtitle">Undergraduate Research with Professor Douglas Comer</div>
                    <ul className="mediumBottomPadding">
                        <li>Implemented a new data center architecture based on unique static MAC addresses to provide reliable and quick VM migration.</li>
                        <li>Designed tests utilizing Mininet and ONOS to simulate our architecture and test network performance.</li>
                    </ul>

                    <div className="pageSubtitle boxhead" style={{paddingTop:"0rem"}}><a href="https://github.com/bbhardin/cs592-project">Mixed-Initiative Natural Language File Searcher</a></div>
                    <div className="pageSubSubtitle">CS592 Human-AI Interaction Course Project</div>
                    <div>Goal: Add mixed-initiave interface design principles to natural language file search queries to reduce the time required to find files.</div>
                    </div>
                </div>
            <div style={{paddingBottom:"5rem"}}></div>
            </div>

        </div>
    );

}
