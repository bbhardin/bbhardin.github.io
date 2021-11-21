import React from "react";
import profile from "./images/profile.jpeg";
import taillights from "./images/home/taillights.jpeg";
import {Container, Row, Col, Nav} from "react-bootstrap";
import {Link} from "react-router-dom";

export default function HomePage() {

    return (
        <div>
            <div>
                <img className="croppedImage" src={taillights}/>
                <p style={{color: "white", position: "absolute", top: "85px", left: "50%",
                    transform: "translate(-50%, -0%)", fontWeight: "bold", textAlign: "center"}}>
                    <p style={{fontSize: 48}}>Ben Hardin</p>
                    <p style={{fontSize: 22, margin: "0rem"}}>Computer Science Honors @ Purdue</p>
                    <p style={{margin: "0rem"}}>Graduating May 2022</p>
                    <p style={{margin: "0rem"}}>Research Interests: <span style={{fontStyle: "italic"}}>Human Computer Interaction, Social and Ubiquitous Computing, Accessibility</span></p>
                    <link rel="stylesheet"
                          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
                    <a href="https://www.linkedin.com/in/benjamin-hardin" target="_blank"
                       className="fa fa-linkedin"></a>
                    <a href="https://github.com/bbhardin" target="_blank" className="fa fa-github"></a>
                    <a href="https://www.flickr.com/gp/165665758@N08/4FDeEd" target="_blank"
                       className="fa fa-flickr"></a>
                    <a href="https://www.twitter.com/b_b_hardin" target="_blank" className="fa fa-twitter"></a>
                </p>
            </div>
            <div className='leftContentInsets' style={{backgroundColor: "lightGray"}}>

            <div style={{fontWeight: "bold", fontSize: 20}}>
                <div style={{paddingBottom: "1rem", fontSize: 16}}></div>
            </div>

            <div className='leftAndRightContentInsets'>
                    <div className='pageSubtitle' style={{paddingTop: "1rem", color: "black", textAlign: "center", float: "center"}}>About Me </div>
                    <div style={{fontSize: 15}}>
                    <div className='smallBottomPadding'>Surprisingly, growing up on Indiana farms has taught me more than how to drive a tractor; it has taught me a lot about computer science too.</div>
                    <div className='smallBottomPadding'>Living in a community well-separated from the world of the software industry, I learned the importance of software accessibility to those of all backgrounds. I see people struggle to use complicated or quickly deprecated devices made by a team who only saw through the eyes of a software engineer.</div>
                    <div className='smallBottomPadding'>What does this mean for me, a computer science student passionate about human-computer interaction and systems programming? It means I strive to seek out the many perspectives of the end user. I want what I build to be robust, accessible, and make life easier. I am addicted to solving important problems the best way, even when it means hours of dedicated research before I see an approach to the issue.</div>
                    <div className='smallBottomPadding'>Through my experiences with Microsoft, GM, GE Aviation, and the Purdue Honors College Dev Committee, I am learning how to integrate the insight and experiences of others when designing a product.</div>
                    <div className='mediumBottomPadding'>On a personal note, if you want to catch my attention and see my eyes light up, just mention Apple, Mercedes-Benz, or anything about the tech or auto industries. In my free time you’ll find me tinkering with old computers, hiking, practicing photography, or reading dystopian novels (because who doesn’t love an unsatisfying ending). All in all, I’m just a guy passionate about working hard, enjoying life, and taking pride in what I create.</div>

                    <div className="pageSubSubtitle" style={{paddingBottom: 0, paddingTop: "1rem", fontWeight: "bold"}}>Contact Info</div>
                    <div style={{}}>bbhardin1 (at) gmail (dot) com.</div>
                    <div className='smallBottomPadding' style={{paddingBottom: "2rem"}}><a href="https://www.linkedin.com/in/benjamin-hardin">www.linkedin.com/in/benjamin-hardin</a></div>

                    {/*<div style={{paddingTop: "1rem"}}>Check out my book blog, <a href="https://bbhardin1.wixsite.com/paintchipsociety">The Paint Chip Society!</a> (Still under construction)</div>*/}
                    {/*<div>(Favorite authors are Dickens, Vonnegut, and Hemingway)</div>*/}
                    </div>
            </div>
            </div>

            <div style={{backgroundColor: "#ededed", paddingBottom: "1rem"}}>
                <div className="leftContentInsets">
                    <div className="pageTitle">Selected Projects</div>
                    <div><Nav.Link style={{paddingLeft: 0}}as={Link} to="/projects">Check out my Projects Page!</Nav.Link> or see <a href="https://github.com/bbhardin">my GitHub</a> for info on all my latest projects.</div>


                    <div className="pageSubtitle">DCnet Research Project</div>
                    <div className="pageSubSubtitle">Undergraduate Research with Professor Douglas Comer</div>
                    <ul>
                        <li>Worked with Professor Douglas Comer to implement a new data center architecture based on unique static MAC addresses to provide reliable and quick VM migration.</li>
                        <li>Designed tests utilizing Mininet and ONOS to simulate our architecture and test network performance.</li>
                    </ul>
                </div>
            </div>

        </div>
    );

}
