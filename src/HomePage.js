import React from "react";
import profile from "./images/profile.JPG";
// import taillights from "./images/home/taillights.jpeg";
import ori_logo from "./images/home/ori_logo.jpg";
import rti_logo from "./images/home/rti_logo.png";
import monterey from "./images/home/monterey.jpeg";
import {Container, Row, Col, Nav} from "react-bootstrap";
import {Link} from "react-router-dom";
import { TwitterTimelineEmbed } from "react-twitter-embed";
let explore_orange = "#ff5a00";

const updates = [
    // { BOOK CHAPTER WILL GO HERE
    //     title: "(Pre-Print) What Can Eye Gaze Teach Us About Real-World Cycling? Insights From the Oxford RobotCycle Project",
    //     authors: "Chris Harper, <b>Benjamin Hardin</b>, and Lars Kunze",
    //     conference: "",
    //     abstract: "",
    //     url: ""
    // },
    {
        title: "I attended ACM AutomotiveUI 2026 in Gothenburg, Sweden 🇸🇪",
        date: "September 2026",
        notes:
            "I presented a position paper at the AnthroAssist Workshop (Anthropomorphic and Intelligent Assistive Systems for Automated Vehicles) titled, \"The Agent Is Not Your Driver: Clarifying the Implied Capabilities of In-Vehicle Anthropomorphic Agents.\"",
        photos: ""
    },

    {
        title: "I am starting a new position as an intern with Apple in San Diego!",
        date: "January 2025",
        notes: "",
        photos: ""
    },

    {
        title: "I presented to the UNECE Global Forum for Road Traffic Safety about human factors considerations for road vehicle teleoperation",
        date: "September 2024",
        notes:
            "",
        photos: ""
    },

    {
        title: "I presented to the Department for Transport Centre for Connected and Autonomous Vehicles",
        date: "June 2024",
        notes:
            "I shared considerations about the human factors considerations for road vehicle teleoperation.",
        photos: ""
    },

    {
        title: "I attended the IEEE Intelligent Vehicles Symposium 2024 on Jeju Island, South Korea 🇰🇷",
        date: "January 2024",
        notes:
            "I presented a position paper at the workshop on teleoperation.",
        photos: ""
    },
    ]

const UpdateList = () => (
    <div style={{paddingLeft: "10px"}}>
        {updates.map(update => (
            <Update key={update.title} title={update.title} date={update.date} notes={update.notes} />
        ))}
    </div>
);

const Update = ({title, date, notes, url=""}) => {
    if (url !== "") {
        // For when the paper has been published and has a URL
        return(
            <div>
                <div className="pageSubtitle boxhead" style={{color: "black", marginTop: "3rem",
                    // borderWidth: "0px",
                    // borderTopWidth: "1px",
                    // borderTopStyle: "dotted",
                }}><a
                    href={`${url}`}>{title}</a></div>
                <div className="pageSubSubtitle" style={{fontWeight: ""}} dangerouslySetInnerHTML={{__html: `${date}`}}/>
                <div className="leftAndRightContentInsets" style={{fontStyle: "italic"}}>{notes}</div>
            </div>
        );
    } else {
        // For when the paper has not been published and there's no URL
        return(
            <div>
                <div className="pageSubSubtitle boxhead" style={{color: "black", paddingTop: "1rem", fontWeight: "550"}}>
                    <span style={{fontWeight: "normal", paddingRight: "1rem"}}>{date}</span> {title}</div>

                <div className="leftAndRightContentInsets" style={{fontStyle: "italic", paddingBottom: "0px"}}>{notes}</div>
            </div>
        );
    }
}

export default function HomePage() {

    return (

        <div style={{paddingTop: "0.5rem"}}>
            <style>
                @import url('https://fonts.cdnfonts.com/css/sf-new-republic-2');
                @import url('https://fonts.cdnfonts.com/css/berlina');
            </style>

            {/* Blob section: blobs scroll with this content and are clipped to it */}
            {/*<div style={{ position: "relative", overflow: "clip" }}>*/}
            {/*<div aria-hidden="true">*/}
            {/*    <div className="bg-blob bg-blob-orange" />*/}
            {/*    <div className="bg-blob bg-blob-teal" />*/}
            {/*</div>*/}

            <div>

                <div style={{fontWeight: "bold", fontSize: 20}}>
                    <div style={{paddingBottom: "0rem", fontSize: 16}}></div>
                </div>


                {/* Two columns on wide windows, one column on narrow ones. See "Home page layout" in index.css */}
                <Row className="homeColumns">
                    <Col xs={3} className="homeSidebar" style={{paddingLeft: "4%", paddingRight: "20px"}}>
                        <div>
                            {/*<div style={{backgroundColor: "lightGray", borderBottomRightRadius: "100px", borderBottomLeftRadius: "100px", width: "150px", height:"75px", textAlign:"center"}} />*/}
                            <img className="smallAvatar" style={{marginTop: "3rem"}}
                                 src={profile}/>
                            {/*<div style={{borderRadius: "100px", width: "150px", height:"150px", marginTop: "1rem", textAlign:"center"}}>*/}

                            <div className="pageSubtitle" style={{
                                // paddingBottom: "20px",
                                paddingTop: "2rem",
                                fontWeight: "200",
                                color: "black"
                            }}>Contact
                            </div>
                            <div style={{fontSize: "14px"}}>bbhardin1 (at) gmail (dot)
                                com
                            </div>
                            {/*<div className='smallBottomPadding' style={{fontSize: "14px"}}><a href="https://scholar.google.com/citations?user=kKQG1fIAAAAJ&hl=en&oi=ao" style={{color: explore_orange}}>Google Scholar</a></div>*/}
                            {/*<div className='smallBottomPadding' style={{fontSize: "14px"}}><a href="https://www.linkedin.com/in/benjamin-hardin" style={{color: explore_orange}}>LinkedIn</a></div>*/}
                            <div className='smallBottomPadding' style={{paddingBottom: "0rem", fontSize: "14px"}}><a
                                href="https://scholar.google.com/citations?user=kKQG1fIAAAAJ&hl=en&oi=ao" style={{color: "black"}}>
                                Google Scholar
                            </a></div>
                            <div className='smallBottomPadding' style={{paddingBottom: "0rem", fontSize: "14px"}}><a
                                href="https://www.cs.ox.ac.uk/people/benjamin.hardin" style={{color: "black"}}>my
                                Oxford page</a></div>
                            <div className='smallBottomPadding' style={{paddingBottom: "0rem", fontSize: "14px"}}><a
                                href="https://www.linkedin.com/in/benjamin-hardin" style={{color:  "black"}}>LinkedIn</a></div>
                            <div className='smallBottomPadding' style={{paddingBottom: "0rem", fontSize: "14px"}}><a
                                href="https://www.github.com/bbhardin" style={{color:  "black"}}>GitHub</a></div>
                            <div className='smallBottomPadding' style={{paddingBottom: "2rem", fontSize: "14px"}}><a
                                href="https://x.com/b_b_hardin" style={{color:  "black"}}>Twitter</a></div>
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
                        <div className="pageSubtitle" style={{fontWeight: "200", color: "black"}}>Affiliations
                            <div className="hoverExpand"><a href="https://ori.ox.ac.uk"><img
                                style={{width: "90%", maxWidth: "105px", paddingTop: "20px"}} src={ori_logo}/></a></div>
                            <div className="hoverExpand"><a href="https://rti.ox.ac.uk"><img
                                style={{width: "90%", maxWidth: "155px", paddingTop: "20px"}} src={rti_logo}/></a></div>
                        </div>
                    </Col>

                    <Col className="homeMain">

                        {/* Name and title. Its position is set by .homeHero in index.css */}
                        <div className="homeHero">

                            {/*<img className="croppedImage"*/}
                            {/*     style={{background: "white", color: "white", marginTop: "-5rem", opacity: "0%"}}*/}
                            {/*     src={taillights}/>*/}
                            <p style={{
                                color: "black",
                                // left: "50%",
                                // transform: "translate(-50%, 0%)", /*fontWeight: "bold"*/
                                textAlign: "left",
                            }}>
                                <p /*className="stroke"*/ style={{
                                    fontFamily: "system-ui, Helvetica Neue, Helvetica, Arial",
                                    fontSize: "calc(3vw + 3vh)",
                                    letterSpacing: "-3px",
                                    fontWeight: "200",
                                    marginBottom: "1rem",
                                    color: "#003066",// "var(--exploreorange)",
                                    transform: "translate(0%, 0px) scale(1, 0.9)",
                                    lineHeight: "70%",
                                    //fontStretch: "extra-expanded"
                                    // textAlign: "left"
                                }}>BENJAMIN<br/><span style={{paddingLeft: "1rem", letterSpacing:"", fontStretch: "", fontWeight: "150", fontSize: "calc(2.2vw + 2.2vh)"}}>HARDIN</span></p>


                                {/*THIS LINK IS WHERE I GET THE ICONS*/}
                                <p /*className="stroke"*/
                                    style={{fontSize: 22, margin: "1rem", fontWeight: "bold", lineHeight: "105%"}}>PhD
                                    Candidate<br/>Computer Science<br/>University of Oxford</p>
                                {/*<p style={{margin: "0rem", paddingBottom: "0.5rem"}}>Graduating May 2022</p>*/}
                                <p /*className="stroke"*/ style={{margin: "1rem", "marginBottom": "1.2rem"}}>Research
                                    Interests: <br></br><span style={{fontStyle: "italic"}}>Human-Computer Interaction, Psychological Safety, Autonomous Systems</span>
                                </p>
                            </p>
                        </div>

                        <Row className="homeBioRow" style={{
                            // background: "#f3f3f3",
                            borderTopLeftRadius: "25px",
                            borderBottomLeftRadius: "25px",
                            marginTop: "3%",
                            marginBottom: "2%",
                            // borderColor: "#eaeaea",
                            // borderWidth: "1px",
                            // borderStyle: "solid",
                            // borderRight: "0px"
                        }}>

                            <Col>
                                <div className="homeBio" style={{
                                    maxWidth: "750px", /*background: "#EEEEEE",*/
                                    borderRadius: "55px", marginTop: "2rem", marginBottom: "2rem"
                                }}>

                                    <div className="pageTitle homeBioSpacer"
                                         style={{paddingTop: "20rem", paddingBottom: "1rem", fontWeight: "150"}}>
                                    </div>
                                    {/*<div className='pageSubtitle' style={{fontFamily: "SF New Republic", paddingTop: "1rem", color: "black", fontSize:"60px"}}>About Me</div>*/}
                                    <div style={{fontSize: 22, fontWeight: "", paddingTop: "10px"}}>
                                        I research ways to help humans and autonomous vehicles work together.
                                    </div>
                                    <div style={{fontSize: 16, fontWeight: "bold", paddingTop: "1rem"}}>
                                        I explore psychological safety of autonomous vehicles to improve trust,
                                        transparency, and human understanding.
                                        <br></br>

                                        <div  style={{paddingTop: "1rem"}}>I am advised by <a className="subtleLink"
                                                           href="https://www.cs.ox.ac.uk/people/marina.jirotka/">Professor
                                        Marina Jirokta</a>,   <a
                                        className="subtleLink" href="https://people.uwe.ac.uk/Person/LarsKunze">Professor
                                        Lars Kunze</a>, and <a
                                        className="subtleLink" href="https://www.oxford-aiethics.ox.ac.uk/keri-grieman">Dr Keri Grieman</a>.
                                        </div>
                                    </div>

                                    {/*<div style={{fontSize: 22, fontWeight: "", paddingTop: "4rem"}}>*/}
                                    {/*    So what does this look like practically?*/}
                                    {/*</div>*/}

                                    {/*<div style={{fontSize: 16, fontWeight: "250", paddingTop: "1rem"}}>*/}
                                    {/*    Imagine affective computing meets transformers meets human studies meets*/}
                                    {/*    autonomous vehicles meets explainable AI...*/}
                                    {/*</div>*/}

                                    {/*<div style={{fontSize: 16, fontWeight: "bold", paddingTop: "4rem"}}>*/}
                                    {/*    Currently: Apple Intern (Jan - Jul 2025)*/}
                                    {/*</div>*/}

                                    <div style={{fontSize: 16, paddingTop: "2rem"}}>
                                        <span style={{fontStyle:"italic", fontSize: 20}}>Previously:
                                            <br></br>
                                            </span>
                                             - Intern at <span style={{fontWeight: "bold"}}>Apple</span>, <span style={{fontWeight: "bold"}}>Microsoft</span>, <span style={{fontWeight: "bold"}}>GM</span>, and <span style={{fontWeight: "bold"}}>GE Aerospace</span><br></br>
                                        - Computer Science Honors at <span style={{fontWeight: "bold"}}>Purdue University</span> <br></br>
                                        - <span style={{fontWeight: "bold"}}>ETH Zürich</span> exchange student
                                    </div>

                                    <div style={{fontSize: 16, paddingTop: "2rem"}}>
                                        <span style={{fontStyle:"italic", fontSize: 20}}>Teaching Experience:
                                            <br></br>
                                            </span>
                                        <div style={{paddingLeft: "20px"}}>
                                            Fall 2025 <br></br>
                                                <div style={{paddingLeft: "20px"}}>
                                                    - Machine Learning Tutor,<span style={{fontWeight: "200"}}> Oxford CS </span><br></br>
                                               - Computer Vision Tutor,<span style={{fontWeight: "200"}}> Oxford CS </span><br></br>
                                                </div>
                                            Fall 2024 <br></br>
                                            <div style={{paddingLeft: "20px"}}>
                                                - Law & Computer Science Teaching Assistant,<span style={{fontWeight: "200"}}> Oxford CS</span>
                                            </div>
                                            Spring 2024 <br></br>
                                            <div style={{paddingLeft: "20px"}}>
                                             - Software Design Group Mentor, <span style={{fontWeight: "200"}}>Oxford CS</span><br></br>
                                             - C++ Programming Lab Demonstrator, <span style={{fontWeight: "200"}}>Oxford Engineering</span>
                                            </div>
                                            Fall 2023 <br></br>
                                            <div style={{paddingLeft: "20px"}}>
                                             - Requirements Engineering Teaching Assistant, <span style={{fontWeight: "200"}}>Oxford CS</span>
                                            </div>
                                            Spring 2023 <br></br>
                                            <div style={{paddingLeft: "20px"}}>
                                             - Software Design Group Mentor, <span style={{fontWeight: "200"}}>Oxford CS</span><br></br>
                                             - C++ Programming Lab Demonstrator, <span style={{fontWeight: "200"}}>Oxford Engineering</span>
                                            </div>
                                            Fall 2021 - Fall 2022 <br></br>
                                            <div style={{paddingLeft: "20px"}}>
                                             - Systems Programming Teaching Assistant, <span style={{fontWeight: "200"}}>Purdue CS</span>
                                            </div>
                                            </div>
                                    </div>

                                    <div style={{fontSize: 16, fontWeight: "200", paddingTop: "4rem"}}>
                                        Outside of my direct research, my life goals are to shape technology to:
                                        <div className="leftContentInsets">
                                        <li><b>Improve urban transportation and design</b> to better connect people</li>
                                        <li><b>Reduce loneliness</b>, improve social skills, and help people truly
                                            connect
                                        </li>
                                        <li>Help people feel an <b>increased sense of agency</b> in their own lives</li>
                                        <li>Improve healthcare access and <b>help people live healthier lives
                                            day-to-day</b></li>
                                        <div style={{paddingTop: "15px"}}>Please reach out if you're interested in any of
                                            these areas, I'd love to chat!
                                        </div>
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
                            <Col sm={4} className="homeNewsColumn" style={{paddingRight: "4rem"}}>


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
            <div className="homePublications" style={{
                // backgroundColor: "#f3f3f3",
                marginTop: "3%",
                paddingBottom: "1rem",
                paddingLeft: "2rem",
                marginRight: "4%",
                borderWidth: "0px",
                borderTopWidth: "1px",
                borderTopStyle: "dashed",
                //borderColor: explore_orange,
                borderBottomWidth: "0px",
                //borderStyle: "solid",
                maxWidth: "1500px"
            }}>
                <div className="leftAndRightContentInsets">

                    <div className="pageTitle" style={{
                        paddingTop: "3rem",
                        paddingBottom: "0rem",
                        fontWeight: "150",
                        // transform: "rotate(90deg) translateX(200px) translateY(250px)",
                        width: "400px",
                        maxWidth: "100%"
                    }}>selected publications
                    </div>
                    <div><Nav.Link style={{paddingLeft: 0, fontWeight: "", color: explore_orange, paddingBottom: "2rem"}} as={Link}
                                   to="/publications">See All ></Nav.Link></div>

                    <div className="leftContentInsets">
                        <div className="pageSubtitle boxhead" style={{color: "black"}}><a>
                            (Pre-Print Book Chapter) Assuring the Trustworthiness of Autonomous Robotic Systems in Challenging Environments
                        </a></div>
                        <div className="pageSubSubtitle">Chris Harper, <span
                            style={{fontWeight: "bold"}}>Benjamin Hardin</span>, and Lars Kunze
                        </div>
                        <div className="leftContentInsets" style={{fontStyle: "italic"}}>Book chapter submitted to Elsevier Comprehensive Robotics for Extreme and Challenging Environments</div>

                        <div className="pageSubtitle boxhead" style={{color: "black"}}><a
                            href={"https://scholar.google.com/citations?view_op=view_citation&hl=en&user=kKQG1fIAAAAJ&sortby=pubdate&citation_for_view=kKQG1fIAAAAJ:Zh0EY9V9P6UC"}>
                            (Pre-Print) What Can Eye Gaze Teach Us About Real-World Cycling? Insights From the Oxford RobotCycle Project
                        </a></div>
                        <div className="pageSubSubtitle"><span
                            style={{fontWeight: "bold"}}>Benjamin Hardin</span>, Efimia Panagiotaki, Daniele De Martini, and Lars Kunze
                        </div>
                        <div className="leftContentInsets" style={{fontStyle: "italic"}}>Submitted to CHI 2027</div>

                        <div className="pageSubtitle boxhead" style={{color: "black"}}><a
                            href={"https://scholar.google.com/citations?view_op=view_citation&hl=en&user=kKQG1fIAAAAJ&sortby=pubdate&citation_for_view=kKQG1fIAAAAJ:8dzOF9BpDQoC"}>
                            (Pre-Print) A Survey of Road Scenarios and Their Effects on Autonomous Vehicle Psychological Safety
                        </a></div>
                        <div className="pageSubSubtitle"><span
                            style={{fontWeight: "bold"}}>Benjamin Hardin</span>, Lars Kunze, Keri Grieman, and Marina Jirotka
                        </div>
                        <div className="leftContentInsets" style={{fontStyle: "italic"}}>Submitted to HRI 2027</div>


                        <div className="pageSubtitle boxhead" style={{color: "black"}}><a
                            href={"https://scholar.google.com/citations?view_op=view_citation&hl=en&user=kKQG1fIAAAAJ&citation_for_view=kKQG1fIAAAAJ:H_jBuBxbQIAC"}>
                            AV-PsySafe: A risk model and analysis method for the psychological safety of human and autonomous vehicles interaction
                        </a></div>
                        <div className="pageSubSubtitle">Yandika Sirgabsou, <span
                            style={{fontWeight: "bold"}}>Benjamin Hardin</span>, François Leblanc, Efi Raili, Pericle Salvini, David Jackson, Marina Jirotka, and Lars Kunze
                        </div>
                        <div className="leftContentInsets">Transportation Research Interdisciplinary Perspectives</div>



                        <div className="pageSubtitle boxhead" style={{color: "black"}}><a
                            href={"https://scholar.google.com/citations?view_op=view_citation&hl=en&user=kKQG1fIAAAAJ&sortby=pubdate&citation_for_view=kKQG1fIAAAAJ:-6RzNnnwWf8C"}>
                            The Oxford RobotCycle Project: A Multimodal Urban Cycling Dataset for Assessing the Safety of Vulnerable Road Users
                        </a></div>
                        <div className="pageSubSubtitle">Efimia Panagiotaki, Divya Thuremella, Jumana Baghabrah, Samuel Sze, Lanke Frank Tarimo Fu, <span
                            style={{fontWeight: "bold"}}>Benjamin Hardin</span>, Tyler Reinmund, Tobit Flatscher, Daniel Marques, Chris Prahacs, Lars Kunze, and Daniele De Martini
                        </div>
                        <div className="leftContentInsets">IROS 2025 </div>


                        <div className="pageSubtitle boxhead" style={{color: "black"}}><a
                            href={"https://scholar.google.com/citations?view_op=view_citation&hl=en&user=kKQG1fIAAAAJ&sortby=pubdate&citation_for_view=kKQG1fIAAAAJ:-nhnvRiOwuoC"}>
                            How well do drivers adapt to remote operation? Learning from remote drivers with on-road
                            experience
                        </a></div>
                        <div className="pageSubSubtitle"><span
                            style={{fontWeight: "bold"}}>Benjamin Hardin</span>, Pericle Salvini, Marina Jirotka, Lars
                            Kunze
                        </div>
                        <div className="leftContentInsets">IEEE Intelligent Vehicles Symposium 2024</div>


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


            <div style={{
                // backgroundColor: "#859c96",
            }}>
                <div className="homePublications" style={{
                    // backgroundColor: "#f3f3f3",
                    marginTop: "3%",
                    paddingBottom: "1rem",
                    paddingLeft: "2rem",
                    marginRight: "50%",
                    borderWidth: "0px",
                    borderTopWidth: "1px",
                    borderTopStyle: "dashed",
                    //borderColor: explore_orange,
                    borderBottomWidth: "0px",
                    //borderStyle: "solid",
                    maxWidth: "1500px"
                }}>
                    <div className="leftAndRightContentInsets">

                        <div className="pageTitle" style={{
                            paddingTop: "3rem",
                            paddingBottom: "0rem",
                            fontWeight: "150",
                            // transform: "rotate(90deg) translateX(200px) translateY(250px)",
                            width: "400px",
                            maxWidth: "100%",
                            fontSize: "40px"
                        }}>updates
                        </div>

                        <UpdateList/>

                    </div>
                </div>
            </div>

            {/*</div>/!* end blob section *!/*/}



        </div>
    );

}
