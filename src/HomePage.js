import React from "react";
import profile from "./images/profile.jpg";
// import taillights from "./images/home/taillights.jpeg";
import ori_logo from "./images/home/ori_logo.png";
import rti_logo from "./images/home/rti_logo.png";
import monterey from "./images/home/monterey.jpeg";
import {Container, Row, Col, Nav} from "react-bootstrap";
import {Link} from "react-router-dom";
import { TwitterTimelineEmbed } from "react-twitter-embed";
let explore_orange = "#ff5a00";

export default function HomePage() {

    return (

        <div>
            <style>
                @import url('https://fonts.cdnfonts.com/css/sf-new-republic-2');
                @import url('https://fonts.cdnfonts.com/css/berlina');
            </style>


            <div>

                <div style={{fontWeight: "bold", fontSize: 20}}>
                    <div style={{paddingBottom: "0rem", fontSize: 16}}></div>
                </div>


                <Row>
                    <Col xs={3} style={{paddingLeft: "4%", paddingRight: "20px"}}>
                        <div style={{textAlign: "right"}}>
                            {/*<div style={{backgroundColor: "lightGray", borderBottomRightRadius: "100px", borderBottomLeftRadius: "100px", width: "150px", height:"75px", textAlign:"center"}} />*/}
                            <img className="smallAvatar" style={{marginTop: "3rem", filter: "grayscale(100%)"}} src={profile}/>
                            {/*<div style={{borderRadius: "100px", width: "150px", height:"150px", marginTop: "1rem", textAlign:"center"}}>*/}

                            <div className="pageSubtitle" style={{
                                // paddingBottom: "20px",
                                paddingTop: "2rem",
                                fontWeight: "bold",
                                color: "black"
                            }}>Contact
                            </div>
                            <div style={{fontSize: "14px"}}>bbhardin1 (at) gmail (dot)
                                com
                            </div>
                            {/*<div className='smallBottomPadding' style={{fontSize: "14px"}}><a href="https://scholar.google.com/citations?user=kKQG1fIAAAAJ&hl=en&oi=ao" style={{color: explore_orange}}>Google Scholar</a></div>*/}
                            {/*<div className='smallBottomPadding' style={{fontSize: "14px"}}><a href="https://www.linkedin.com/in/benjamin-hardin" style={{color: explore_orange}}>LinkedIn</a></div>*/}
                            <div className='smallBottomPadding' style={{paddingBottom: "2rem", fontSize: "14px"}}><a
                                href="https://www.cs.ox.ac.uk/people/benjamin.hardin" style={{color: explore_orange}}>my
                                Oxford page</a></div>
                            {/*</div>*/}
                        </div>

                        {/*<div style={{backgroundColor: "orangered", borderRadius: "100px", width: "150px", height:"150px", marginTop: "1rem", textAlign:"center", transform: "translate(30%, 30%)", zIndex: "-1", position: "absolute"}}/>*/}
                        {/*<div style={{backgroundColor: "sandybrown", borderRadius: "100px", width: "150px", height:"150px", marginTop: "1rem", textAlign:"center", transform: "translate(60%, 60%)", zIndex: "-2", position: "absolute"}}/>*/}
                        {/*<div style={{backgroundColor: "gold", borderRadius: "100px", width: "150px", height:"150px", marginTop: "1rem", textAlign:"center", transform: "translate(90%, 90%)", zIndex: "-3", position: "absolute"}}/>*/}
                        {/*<div style={{backgroundColor: "orange", borderRadius: "100px", width: "150px", height:"150px", marginTop: "1rem", textAlign:"center", transform: "translate(40%, 120%)", zIndex: "-4", position: "absolute"}}/>*/}
                        {/*<div style={{backgroundColor: "red", borderRadius: "100px", width: "150px", height:"150px", marginTop: "1rem", textAlign:"center", transform: "translate(80%, 120%)", zIndex: "-5", position: "absolute"}}/>*/}
                        {/*<div style={{backgroundColor: "gold", borderRadius: "100px", width: "150px", height:"150px", marginTop: "1rem", textAlign:"center", transform: "translate(120%, 120%)", zIndex: "-6", position: "absolute"}}/>*/}

                        {/*<div style={{paddingBottom: "5%", background: "#EEEEEE",*/}
                        {/*    borderRadius: "55px", marginTop: "2rem"}}>*/}

                        {/*</div>*/}
                        <div className="pageSubtitle" style={{color: "black", textAlign: "right"}}>Affiliations
                            <div className="hoverExpand"><a href="https://ori.ox.ac.uk"><img
                                style={{width: "90%", maxWidth: "155px", paddingTop: "20px"}} src={ori_logo}/></a></div>
                            <div className="hoverExpand"><a href="https://rti.ox.ac.uk"><img
                                style={{width: "90%", maxWidth: "155px", paddingTop: "20px"}} src={rti_logo}/></a></div>
                        </div>
                    </Col>

                    <Col>

                        <div>

                            {/*<img className="croppedImage"*/}
                            {/*     style={{background: "white", color: "white", marginTop: "-5rem", opacity: "0%"}}*/}
                            {/*     src={taillights}/>*/}
                            <p style={{
                                marginRight: "70%",
                                color: "black",
                                position: "absolute",
                                top: "120px",
                                // left: "50%",
                                // transform: "translate(-50%, 0%)", /*fontWeight: "bold"*/
                                textAlign: "left",
                                maxWidth: "40%"
                            }}>
                                <p /*className="stroke"*/ style={{
                                    fontFamily: "system-ui, Helvetica Neue, Helvetica, Arial",
                                    fontSize: "calc(3vw + 3vh)",
                                    letterSpacing: "-3px",
                                    fontWeight: "",
                                    marginBottom: "1rem",
                                    color: "var(--exploreorange)",
                                    transform: "translate(-85px, 0px)",
                                    lineHeight: "100%",
                                    // textAlign: "left"
                                }}>BENJAMIN<br/>HARDIN</p>
                                <div style={{position: "absolute", transform: "translate(-325px, -150px)"}}>
                                    <link rel="stylesheet"
                                          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
                                    <a href="https://www.linkedin.com/in/benjamin-hardin" target="_blank"
                                       className="fa fa-linkedin"></a> <br/>
                                    <a href="https://scholar.google.com/citations?user=kKQG1fIAAAAJ&hl=en&oi=ao"
                                       target="_blank"
                                       className="fa fa-graduation-cap"></a> <br/>
                                    <a href="https://github.com/bbhardin" target="_blank" className="fa fa-github"></a>
                                    <br/>
                                    <a href="https://www.twitter.com/b_b_hardin" target="_blank"
                                       className="fa fa-twitter"></a>
                                </div>


                                {/*THIS LINK IS WHERE I GET THE ICONS*/}
                                <p /*className="stroke"*/
                                    style={{fontSize: 22, margin: "0rem", fontWeight: "bold", lineHeight: "100%"}}>PhD
                                    Student<br/>Computer Science<br/>University of Oxford</p>
                                {/*<p style={{margin: "0rem", paddingBottom: "0.5rem"}}>Graduating May 2022</p>*/}
                                <p /*className="stroke"*/ style={{margin: "0rem", "marginBottom": "1.2rem"}}>Research
                                    Interests: <span style={{fontStyle: "italic"}}>Human-Computer Interaction, Psychological Safety, Autonomous Systems</span>
                                </p>
                                {/*<link rel="stylesheet"*/}
                                {/*      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>*/}
                                {/*<a href="https://www.linkedin.com/in/benjamin-hardin" target="_blank"*/}
                                {/*   className="fa fa-linkedin"></a>*/}
                                {/*<a href="https://scholar.google.com/citations?user=kKQG1fIAAAAJ&hl=en&oi=ao"*/}
                                {/*   target="_blank"*/}
                                {/*   className="fa fa-graduation-cap"></a>*/}
                                {/*<a href="https://github.com/bbhardin" target="_blank" className="fa fa-github"></a>*/}
                                {/*<a href="https://www.twitter.com/b_b_hardin" target="_blank"*/}
                                {/*   className="fa fa-twitter"></a>*/}

                                {/*<link rel="stylesheet"*/}
                                {/*      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>*/}
                                {/*<a href="https://www.linkedin.com/in/benjamin-hardin" target="_blank"*/}
                                {/*   className="fa fa-linkedin"></a> <br/>*/}
                                {/*<a href="https://scholar.google.com/citations?user=kKQG1fIAAAAJ&hl=en&oi=ao"*/}
                                {/*   target="_blank"*/}
                                {/*   className="fa fa-graduation-cap"></a> <br/>*/}
                                {/*<a href="https://github.com/bbhardin" target="_blank" className="fa fa-github"></a>*/}
                                {/*<br/>*/}
                                {/*<a href="https://www.twitter.com/b_b_hardin" target="_blank"*/}
                                {/*   className="fa fa-twitter"></a>*/}
                                {/*<a href="https://www.flickr.com/gp/165665758@N08/4FDeEd" target="_blank"*/}
                                {/*   className="fa fa-flickr"></a>*/}
                            </p>
                        </div>

                        <Row style={{
                            // background: "#f3f3f3",
                            borderTopLeftRadius: "25px",
                            borderBottomLeftRadius: "25px",
                            marginLeft: "2%",
                            marginTop: "3%",
                            marginBottom: "2%",
                            // borderColor: "#eaeaea",
                            // borderWidth: "1px",
                            // borderStyle: "solid",
                            // borderRight: "0px"
                        }}>

                            <Col>
                                <div style={{
                                    maxWidth: "750px", marginLeft: "40%", paddingLeft: "5%", paddingRight: "5%", /*background: "#EEEEEE",*/
                                    borderRadius: "55px", marginTop: "2rem", marginBottom: "2rem"
                                }}>

                                    <div className="pageTitle"
                                         style={{paddingTop: "20rem", paddingBottom: "1rem", fontWeight: "150"}}>about me
                                    </div>
                                    {/*<div className='pageSubtitle' style={{fontFamily: "SF New Republic", paddingTop: "1rem", color: "black", fontSize:"60px"}}>About Me</div>*/}
                                    <div style={{fontSize: 22, fontWeight: "", paddingTop: "10px"}}>
                                        I research ways to help humans and autonomous vehicles work together.
                                    </div>
                                    <div style={{fontSize: 16, fontWeight: "bold", paddingTop: "1rem"}}>
                                        I explore psychological safety of autonomous vehicles to improve trust,
                                        transparency, and human understanding. More broadly, I research
                                        Human-Computer Interaction and novel ways for humans and AI systems to interact.

                                        I am advised by <a className="subtleLink"
                                                           href="https://www.cs.ox.ac.uk/people/marina.jirotka/">Professor
                                        Marina Jirokta</a>, <a
                                        className="subtleLink" href="https://ori.ox.ac.uk/people/lars-kunze/">Professor
                                        Lars Kunze</a>, and <a className="subtleLink"
                                                               href="https://ori.ox.ac.uk/people/pericle-salvini/">Dr.
                                        Pericle Salvini</a>
                                    </div>

                                    <div style={{fontSize: 16, paddingTop: "3rem"}}>
                                        Previously: Computer Science at Purdue University, ETH Zürich exchange student,
                                        and intern for Microsoft, GM, and GE Aerospace.
                                    </div>

                                    <div style={{fontSize: 16, fontWeight: "", paddingTop: "1rem"}}>
                                        Outside of my direct research, my life goals are to shape technology to:
                                        <li><b>Improve urban transportation and design</b> to better connect people</li>
                                        <li><b>Reduce loneliness</b>, improve social skills, and help people truly
                                            connect
                                        </li>
                                        <li>Help people feel an <b>increased sense of agency</b> in their own lives</li>
                                        <li>Improve healthcare access and <b>help people live healthier lives
                                            day-to-day</b></li>
                                        <div style={{paddingTop: "5px"}}>Please reach out if you're interested in any of
                                            these areas, I'd love to chat!
                                        </div>
                                    </div>

                                    <div style={{fontSize: 15, paddingTop: "10px"}}>
                                        {/*<div className='smallBottomPadding'>Surprisingly, growing up on Indiana farms has taught me more than how to drive a tractor; it has taught me a lot about computer science too.</div>*/}
                                        {/*<div className='smallBottomPadding'>Living in a community well-separated from the world of the software industry, I learned the importance of software accessibility to those of all backgrounds. I see people struggle to use complicated or quickly deprecated devices made by a team who only saw through the eyes of a software engineer.</div>*/}
                                        {/*<div className='smallBottomPadding'>What does this mean for me, a computer science student passionate about human-computer interaction and systems programming? It means I strive to seek out the many perspectives of the end user. I want what I build to be robust, accessible, and make life easier. I am addicted to solving important problems the best way, even when it means hours of dedicated research before I see an approach to the issue.</div>*/}
                                        {/*<div className='smallBottomPadding'>Through my experiences with Microsoft, GM, GE Aviation, and the Purdue Honors College Dev Committee, I am learning how to integrate the insight and experiences of others when designing a product.</div>*/}
                                        {/*<div className='largeBottomPadding'>On a personal note, if you want to catch my attention and see my eyes light up, just mention Apple, Mercedes-Benz, or anything about the tech or auto industries. In my free time you’ll find me tinkering with old computers, hiking, practicing photography, or reading dystopian novels (because who doesn’t love an unsatisfying ending). All in all, I’m just a guy passionate about working hard, enjoying life, and taking pride in what I create.</div>*/}


                                        {/*<div style={{paddingTop: "1rem"}}>Check out my book blog, <a href="https://bbhardin1.wixsite.com/paintchipsociety">The Paint Chip Society!</a> (Still under construction)</div>*/}
                                        {/*<div>(Favorite authors are Dickens, Vonnegut, and Hemingway)</div>*/}
                                    </div>
                                </div>
                            </Col>
                            <Col sm={4} style={{paddingRight: "4rem"}}>


                                {/*    <div className="secondaryPageTitle leftContentInsets" style={{paddingTop: "3rem", color: explore_orange}}>What's New</div>*/}
                                {/*<div className="leftContentInsets" style={{paddingBottom: "1rem"}}>*/}
                                {/*    <div className="pageSubSubtitle" style={{fontWeight: "bold", color: "gray"}}>March 24-26, 2023</div>*/}
                                {/*    <div className="pageSubtitle" style={{color: "black", paddingTop: "0rem"}}><a className="subtleLink" href="http://www.icccr.org//">ICCCR 2023</a></div>*/}
                                {/*    /!*<div className="pageSubSubtitle">with US Strategic Command (STRATCOM)</div>*!/*/}
                                {/*    <div style={{paddingTop: "10px"}}>I presented my second undergraduate networks research paper titled "<a className="subtleLink" href="http://www.ijfcc.org/index.php?m=content&c=index&a=show&catid=103&id=984">On the Unreliability of Network Simulation Results From Mininet and iPerf</a>."</div>*/}
                                {/*</div>*/}
                                {/*    <div className="leftContentInsets largeBottomPadding">*/}
                                {/*        <div className="pageSubSubtitle" style={{fontWeight: "bold", color: "gray"}}>March 7-9, 2023</div>*/}
                                {/*        <div className="pageSubtitle" style={{color: "black", paddingTop: "0rem"}}><a className="subtleLink" href="https://www.icin-conference.org">ICIN 2023</a></div>*/}
                                {/*        <div style={{paddingTop: "10px"}}>I presented a paper titled "<a className="subtleLink" href="https://ieeexplore.ieee.org/document/10073473">DCnet: Evaluation of a New Data Center Architecture</a>" in Paris, France!</div>*/}
                                {/*    </div>*/}

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

            {/* SELECTED PUBLICATIONS */}


            {/*<div style={{backgroundColor: "#f3f3f3", marginTop: "3%", paddingBottom: "1rem", paddingLeft: "2rem", marginRight: "3%", borderTopRightRadius: "25px",*/}
            {/*    borderBottomRightRadius: "25px", borderColor: "#eaeaea", borderWidth: "1px", borderStyle: "solid", borderLeft: "0px"}}>*/}
            <div style={{
                // backgroundColor: "#859c96",
            }}>
            <div style={{
                // backgroundColor: "#f3f3f3",
                marginTop: "3%",
                paddingBottom: "1rem",
                paddingLeft: "2rem",
                marginRight: "3%",
                borderWidth: "0px",
                borderTopWidth: "1px",
                borderBottomWidth: "0px",
                borderStyle: "solid",
                maxWidth: "1500px"
            }}>
                <div className="leftAndRightContentInsets">

                    <div className="pageTitle" style={{
                        paddingTop: "3rem",
                        paddingBottom: "0rem",
                        fontWeight: "150",
                        // transform: "rotate(90deg) translateX(200px) translateY(250px)",
                        width: "400px"
                    }}>selected publications
                    </div>
                    <div><Nav.Link style={{paddingLeft: 0, fontWeight: "", color: explore_orange}} as={Link}
                                   to="/publications">See All ></Nav.Link></div>

                    <div className="leftContentInsets">

                        <div className="pageSubtitle boxhead" style={{color: "black"}}><a
                            href={"https://scholar.google.com/citations?view_op=view_citation&hl=en&user=kKQG1fIAAAAJ&citation_for_view=kKQG1fIAAAAJ:F2UWTTQJPOcC"}>
                            Human
                            Involvement in Autonomous Decision-Making Systems. Lessons learned from three case studies
                            in aviation, social care and road vehicles</a></div>
                        <div className="pageSubSubtitle">Pericle Salvini, Tyler Reinmund, <span
                            style={{fontWeight: "bold"}}>Benjamin Hardin</span>, Keri Grieman, Carolyn Ten Holter, Aaron
                            Johnson, Lars Kunze, Alan Winfield, and Marina Jirotka
                        </div>
                        <div className="leftContentInsets">Frontiers in Political Science</div>

                        <div className="pageSubtitle boxhead" style={{color: "black", paddingTop: "1rem"}}><a
                            href={"https://scholar.google.com/citations?view_op=view_citation&hl=en&user=kKQG1fIAAAAJ&citation_for_view=kKQG1fIAAAAJ:M05iB0D1s5AC"}>
                            DCnet: Evaluation of a New Data Center Architecture</a></div>
                        <div className="pageSubSubtitle" style={{fontWeight: ""}}><span style={{fontWeight: "bold"}}>Benjamin Hardin</span>,
                            Douglas Comer, Adib Rastegarnia
                        </div>
                        <div className="leftContentInsets">2023 Innovation in Clouds, Internet, and Networks (ICIN)
                        </div>

                        <div className="pageSubtitle boxhead" style={{paddingTop: "1rem", color: "black"}}><a
                            href={"https://scholar.google.com/citations?view_op=view_citation&hl=en&user=kKQG1fIAAAAJ&citation_for_view=kKQG1fIAAAAJ:g5m5HwL7SMYC"}>
                            On the Unreliability of Network Simulation Results from Mininet and iPerf</a></div>
                        <div className="pageSubSubtitle"><span style={{fontWeight: "bold"}}>Benjamin Hardin</span>,
                            Douglas Comer, Adib Rastegarnia
                        </div>
                        <div className="leftContentInsets">2023 International Conference on Computer, Control, and
                            Robotics (ICCCR)
                        </div>

                    </div>
                </div>
                <div style={{paddingBottom: "5rem"}}></div>
            </div>
            </div>


            {/* SELECTED PROJECTS*/}


            {/*<div style={{*/}
            {/*    backgroundColor: "#f3f3f3",*/}
            {/*    marginTop: "3%",*/}
            {/*    paddingBottom: "1rem",*/}
            {/*    paddingLeft: "2rem",*/}
            {/*    marginLeft: "3%",*/}
            {/*    borderTopLeftRadius: "25px",*/}
            {/*    borderBottomLeftRadius: "25px",*/}
            {/*    borderColor: "#eaeaea",*/}
            {/*    borderWidth: "1px",*/}
            {/*    borderStyle: "solid",*/}
            {/*    borderRight: "0px"*/}
            {/*}}>*/}
            {/*<div style={{*/}
            {/*    // backgroundColor: "#f3f3f3",*/}
            {/*    marginTop: "3%",*/}
            {/*    paddingBottom: "1rem",*/}
            {/*    paddingRight: "2rem",*/}
            {/*    marginRight: "3%",*/}
            {/*    borderWidth: "0px",*/}
            {/*    borderTopWidth: "1px",*/}
            {/*    // borderBottomWidth: "1px",*/}
            {/*    borderStyle: "solid"*/}
            {/*}}>*/}
            {/*    <div className="leftAndRightContentInsets">*/}

            {/*        <div className="pageTitle"*/}
            {/*             style={{*/}
            {/*                 paddingTop: "3rem",*/}
            {/*                 paddingBottom: "1rem",*/}
            {/*                 fontWeight: "150",*/}
            {/*                 // transform: "rotate(90deg) translateX(200px) translateY(250px)",*/}
            {/*                 width: "400px"*/}
            {/*             }}>selected projects*/}
            {/*        </div>*/}
            {/*        <div><Nav.Link style={{paddingLeft: 0, fontWeight: "bold", color: explore_orange}} as={Link}*/}
            {/*                       to="/projects">See More ></Nav.Link> or see <a className="subtleLink"*/}
            {/*                                                                      href="https://github.com/bbhardin">my*/}
            {/*            GitHub</a> for all my latest projects.*/}
            {/*        </div>*/}

            {/*        <div className="leftContentInsets">*/}
            {/*            <div className="pageSubtitle boxhead" style={{color: "black", paddingTop: "3rem"}}>Winter Break*/}
            {/*                2021/22: Purdue Honors College Event Analytics*/}
            {/*            </div>*/}
            {/*            <div className="pageSubSubtitle" style={{fontWeight: "bold"}}>Goal: Help the Honors College*/}
            {/*                determine event popularity*/}
            {/*                and boost resident engagement to encourage a sense of community*/}
            {/*            </div>*/}
            {/*            <div className="mediumBottomPadding">I'm cleaning and organizing data from event submissions*/}
            {/*                within an app for the Honors College that I led.*/}
            {/*                Residents submit points for attending events in order to earn awards for their dorm*/}
            {/*                residence floor. We are analyzing these submissions from the past two years to*/}
            {/*                collect statistics on event attendance and improve future events.*/}
            {/*            </div>*/}

            {/*            <div className="pageSubtitle boxhead"><a href="https://github.com/real-dcnet/dcnet-source">DCnet*/}
            {/*                Research Project</a></div>*/}
            {/*            <div className="pageSubSubtitle">Undergraduate Research with Distinguished Professor Douglas*/}
            {/*                Comer*/}
            {/*            </div>*/}
            {/*            <ul className="mediumBottomPadding">*/}
            {/*                <li>Implemented a new data center architecture based on unique static MAC addresses to*/}
            {/*                    provide reliable and quick VM migration.*/}
            {/*                </li>*/}
            {/*                <li>Designed tests utilizing Mininet and ONOS to simulate our architecture and test network*/}
            {/*                    performance.*/}
            {/*                </li>*/}
            {/*            </ul>*/}

            {/*            /!*<div className="pageSubtitle boxhead" style={{paddingTop:"0rem"}}><a href="https://github.com/bbhardin/cs592-project">Mixed-Initiative Natural Language File Searcher</a></div>*!/*/}
            {/*            /!*<div className="pageSubSubtitle">CS592 Human-AI Interaction Course Project</div>*!/*/}
            {/*            /!*<div>Goal: Add mixed-initiave interface design principles to natural language file search queries to reduce the time required to find files.</div>*!/*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div style={{paddingBottom: "5rem"}}></div>*/}
            {/*</div>*/}


        </div>
    );

}
