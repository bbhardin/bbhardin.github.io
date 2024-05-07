
import icon from "./images/Icon.png"
import dn from "./images/doctorsnote.png"
import hcr from "./images/HCR.png"
import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import information from "./images/wwdc/information.png";
import tree from "./images/wwdc/treewouldittake.png";
import report from "./images/wwdc/your report.png";
import info from "./images/wwdc/info.png";
import light from "./images/smart_light_switch.jpeg";
import timingchain from "./images/projects/timingchain.JPG";
import timingchain2 from "./images/projects/timingchain_close.JPG";

export default function PublicationsPage() {
    return (
        <div className="leftAndRightContentInsets">
            {/*<div style={{backgroundColor: "black", transform: "translateX(-50%) translateY(-3.7rem)", zIndex: "-1", position: "fixed",*/}
            {/*    left: "50%",*/}
            {/*    /* bring your own prefixes */}
            {/*    height: "3rem", borderRadius: "25px", width: "750px"}}> _</div>*/}
            <div className="pageTitle">Publications</div>

            <div className="leftContentInsets">

                <div className="pageSubtitle boxhead" style={{color: "black"}}>
                    {/*<a href={"https://scholar.google.com/citations?view_op=view_citation&hl=en&user=kKQG1fIAAAAJ&citation_for_view=kKQG1fIAAAAJ:F2UWTTQJPOcC"}>*/}
                    (Pre-print) How Well Do Drivers Adapt to Remote Operation? Learning from Remote Drivers with On-Road Experience </div>
                <div className="pageSubSubtitle"><span style={{fontWeight: "bold"}}>Benjamin Hardin</span>, Pericle
                    Salvini, Marina Jirotka, and Lars Kunze
                </div>
                <div className="leftContentInsets" style={{fontStyle: "italic"}}>IEEE IV 2023</div>
                <div className="leftContentInsets" style={{fontWeight:"lighter"}}>Remote driving is a promising strategy for helping Autonomous Vehicles (AVs) navigate many environments where edge cases may otherwise limit their abilities.
                    For some companies, remote driving is an alternative to AVs altogether. Much remote driving research has taken place in simulated or controlled environments with novice operators,
                    leaving the needs of operators with real-world experience under-explored. This research aims to understand if experienced operators are satisfied with current production remote driving systems,
                    if they adapt to the difference in control, and how their job satisfaction compares to in-vehicle safety driving. This paper briefly overviews recent remote driving research and presents results
                    from a questionnaire and a semi-structured interview with experienced teleoperators. The findings indicate that operators do adjust to the new domain, but latency and network reliability remain
                    a challenge. Likewise, standardised training practices for operators are found to be lacking.</div>

                <div className="pageSubtitle boxhead" style={{color: "black", paddingTop: "3rem"}}><a
                    href={"https://scholar.google.com/citations?view_op=view_citation&hl=en&user=kKQG1fIAAAAJ&citation_for_view=kKQG1fIAAAAJ:F2UWTTQJPOcC"}>
                    Human Involvement in Autonomous Decision-Making Systems. Lessons learned from three case studies in
                    aviation, social care and road vehicles</a></div>
                <div className="pageSubSubtitle">Pericle Salvini, Tyler Reinmund, <span style={{fontWeight: "bold"}}>Benjamin Hardin</span>,
                    Keri Grieman, Carolyn Ten Holter, Aaron Johnson, Lars Kunze, Alan Winfield, and Marina Jirotka
                </div>
                <div className="leftContentInsets" style={{fontStyle: "italic"}}>Frontiers in Political Science</div>
                <div className="leftContentInsets" style={{fontWeight:"lighter"}}>
                    This paper draws on three case studies to examine some of the challenges and tensions involved in the use of Autonomous Decision-Making Systems (ADMS). In particular, the paper highlights: (i) challenges around the shifting “locale” of the decision, and the associated consequences for stakeholders; (ii) potential implications for stakeholders from regulation such as the General Data Protection Regulation (GDPR); (iii) the different values that stakeholder groups bring to the “decision” question; (iv) how complex pre-existing webs of stakeholders and decision-making authorities may be disrupted or disempowered by the use of an automated system and the lack of evaluation of possible consequences; (v) how ADMS for non-technical users can lead to circumvention of the boundaries of intended system use. We illustrate these challenges through case studies in three domains: adult social care, aviation, and vehicle driver monitoring systems. The paper closes with recommendations for both practice and policy in the deployment of ADMS.

                </div>

                <div className="pageSubtitle boxhead" style={{color: "black", paddingTop: "3rem"}}><a
                    href={"https://scholar.google.com/citations?view_op=view_citation&hl=en&user=kKQG1fIAAAAJ&citation_for_view=kKQG1fIAAAAJ:EYYDruWGBe4C"}>
                    A Cross-Sectional Examination of Evictions in Lafayette, Indiana in August 2020 during a Gap in
                    Federal and State Eviction Moreatoria</a></div>
                <div className="pageSubSubtitle" style={{fontWeight: ""}}>Mary Lang, Justin MacNeill, Ethan Edwards,
                    Ethan Glaser, <span style={{fontWeight: "bold"}}>Benjamin Hardin</span>, Jared Huber, Elizabeth
                    Spyratos, Jason Ware
                </div>
                <div className="leftContentInsets" style={{fontStyle: "italic"}}>Local Development & Society Journal</div>

                <div className="pageSubtitle boxhead" style={{color: "black", paddingTop: "3rem"}}><a
                    href={"https://scholar.google.com/citations?view_op=view_citation&hl=en&user=kKQG1fIAAAAJ&citation_for_view=kKQG1fIAAAAJ:M05iB0D1s5AC"}>
                    DCnet: Evaluation of a New Data Center Architecture</a></div>
                <div className="pageSubSubtitle" style={{fontWeight: ""}}><span style={{fontWeight: "bold"}}>Benjamin Hardin</span>,
                    Douglas Comer, Adib Rastegarnia
                </div>
                <div className="leftContentInsets" style={{fontStyle: "italic"}}>2023 Innovation in Clouds, Internet, and Networks (ICIN)</div>

                <div className="pageSubtitle boxhead" style={{paddingTop: "3rem", color: "black"}}><a
                    href={"https://scholar.google.com/citations?view_op=view_citation&hl=en&user=kKQG1fIAAAAJ&citation_for_view=kKQG1fIAAAAJ:g5m5HwL7SMYC"}>
                    On the Unreliability of Network Simulation Results from Mininet and iPerf</a></div>
                <div className="pageSubSubtitle"><span style={{fontWeight: "bold"}}>Benjamin Hardin</span>, Douglas
                    Comer, Adib Rastegarnia
                </div>
                <div className="leftContentInsets" style={{fontStyle: "italic"}}>2023 International Conference on Computer, Control, and Robotics
                    (ICCCR)
                </div>


                {/*<div className="projectSubtitle boxhead"><a href="https://github.com/bbhardin/smart-light-control">Smart Light Control from a Mercedes Window Switch Panel</a></div>*/}
                {/*    <Container><Row>*/}
                {/*        <Col sm={"auto"}><img className='gridImage' style={{maxHeight: "250px"}} src={light} />*/}
                {/*        </Col>*/}
                {/*    <Col sm={7}>*/}
                {/*        <div className="leftContentInsets">A control panel for my smart lights using IFTTT hooks built on a window switch control panel from a 2001*/}
                {/*            Mercedes ML320. Each switch corresponds to a different ceiling light, and the inputs are digital on/off based*/}
                {/*            on if the user pulls up on each switch. I would like to get an analogue to digital convertor so*/}
                {/*            I can monitor the switch resistance to determine if user is pulling up or down and adjust the lights accordingly.*/}
                {/*            I would also like to add the ability to hold the switch up or down to slowly dim/brighten.</div>*/}
                {/*    </Col></Row></Container>*/}

            </div>


        </div>
    );
}