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


const papers = [
    {
        title: "AV-PsySafe: A risk model and analysis method for the psychological safety of human and autonomous vehicles interaction",
        authors: "Yandika Sirgabsou, <b>Benjamin Hardin</b>, François Leblanc, Efi Raili, Pericle Salvini, David Jackson, Marina Jirotka, and Lars Kunze",
        conference: "Transportation Research Interdisciplinary Perspectives",
        abstract: "The rapid advancement of artificial intelligence and autonomous driving technologies has significantly propelled the development of autonomous vehicles (AVs). However, psychological barriers continue to impede widespread AV adoption, despite technological progress. This paper addresses the critical yet often overlooked aspect of psychological safety in AV design and operation. While traditional safety standards focus primarily on physical safety, this paper emphasizes the psychological implications that arise from human interactions with autonomous vehicles, highlighting the importance of trust and perceived risk as significant factors influencing user acceptance. The paper makes a methodological proposal, a framework for addressing AVs psychological safety consisting of three key contributions. First, it introduces a definition of psychological safety in AVs context. Secondly, it proposes a risk model for identifying and assessing AVs psychological hazards and risks. PsySIL (Psychological Safety Integrity Level), a classification of AV psychological risk levels is developed. Thirdly, an adapted system-theoretic analysis method for AVs psychological safety is proposed. The paper illustrates the application of the framework for assessing potential psychological hazards using a scenario involving a family’s experience with an autonomous vehicle, pioneering a systems approach towards evaluating situations that could lead to psychological harm. By establishing a framework that incorporates psychological safety alongside physical safety, the paper contributes to the broader discourse on the safe deployment of autonomous vehicle, aiming to guide future developments in user-centred design and regulatory practices, while acknowledging the limitations brought by the application of the proposals on a rather simple but pedagogical illustrative example.",
        url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=kKQG1fIAAAAJ&citation_for_view=kKQG1fIAAAAJ:H_jBuBxbQIAC"
    },
    {
        title: "The Oxford RobotCycle Project: A Multimodal Urban Cycling Dataset for Assessing the Safety of Vulnerable Road Users",
        authors: "Efimia Panagiotaki, Divya Thuremella, Jumana Baghabrah, Samuel Sze, Lanke Frank Tarimo Fu, <b>Benjamin Hardin</b>, Tyler Reinmund, Tobit Flatscher, Daniel Marques, Chris Prahacs, Lars Kunze, and Daniele De Martini",
        conference: "IROS 2025",
        abstract: "The Oxford RobotCycle Project is a novel initiative aiming to understand how road and traffic infrastructure " +
            "influence road users’ behavior, affecting cyclists’ journeys and safety. By leveraging state-of-the-art technology " +
            "and methods used in autonomous vehicles (AVs), this project introduces a novel multimodal dataset, capturing dynamic " +
            "cycling data in complex and diverse urban traffic environments. The dataset consists of range, visual, and inertial sensors, " +
            "mounted on a backpack, and eye gaze tracking glasses, coupled with an analysis of road infrastructure and interactions with " +
            "other road users. Enhanced by annotated maps, reconstructed 3-D point clouds, and a detailed ontology capturing static and " +
            "dynamic agents and their relations, the dataset provides a comprehensive framework for analyzing and understanding traffic " +
            "dynamics. Heatmaps derived from the cyclists’ vision reveal attention patterns and focal points during various traffic scenarios. " +
            "We also analyze traffic interactions and risk, either perceived or actual, and correlate them with road infrastructure and traffic " +
            "volumes. To complement the dataset, we also provide a complete set of tools for risk and traffic analysis, visualization, automatic " +
            "calibration, and data annotation. The dataset can also be used to evaluate the robustness of odometry estimation methods, due to " +
            "the highly dynamic cyclist movements. Combining multimodal data with traffic and risk analysis, the Oxford RobotCycle Project " +
            "facilitates identifying safety-critical scenarios to derive actionable insights for safer, cyclist-friendly road design. " +
            "This work contributes toward improving cycling safety, enhancing urban mobility, and supporting sustainable transportation " +
            "initiatives. The dataset and tools are made available at https://ori-mrg.github.io/robotcycle-dataset/",
        url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=kKQG1fIAAAAJ&sortby=pubdate&citation_for_view=kKQG1fIAAAAJ:-6RzNnnwWf8C"
    },
    {
        title: "How Well Do Drivers Adapt to Remote Operation? Learning from Remote Drivers with On-Road Experience",
        authors: "<b>Benjamin Hardin</b>, Pericle Salvini, Marina Jirotka, and Lars Kunze",
        conference: "IEEE IV 2024",
        abstract: "Remote driving is a promising strategy for helping Autonomous Vehicles (AVs) navigate many environments where edge cases may\n" +
            "                    otherwise limit their abilities.\n" +
            "                    For some companies, remote driving is an alternative to AVs altogether. Much remote driving research\n" +
            "                    has taken place in simulated or controlled environments with novice operators,\n" +
            "                    leaving the needs of operators with real-world experience under-explored. This research aims to\n" +
            "                    understand if experienced operators are satisfied with current production remote driving systems,\n" +
            "                    if they adapt to the difference in control, and how their job satisfaction compares to in-vehicle\n" +
            "                    safety driving. This paper briefly overviews recent remote driving research and presents results\n" +
            "                    from a questionnaire and a semi-structured interview with experienced teleoperators. The findings\n" +
            "                    indicate that operators do adjust to the new domain, but latency and network reliability remain\n" +
            "                    a challenge. Likewise, standardised training practices for operators are found to be lacking.",
        url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=kKQG1fIAAAAJ&citation_for_view=kKQG1fIAAAAJ:-nhnvRiOwuoC"
    },
    {
        title: "Safety assurance challenges for autonomous drones in Underground Mining Environments",
        authors: "Philippa Ryan, Arjun Badyal, Samuel Sze, <b>Benjamin Hardin</b>, Hasan Bin Firoz, Paulina Lewinska, and Victoria Hodge",
        conference: "TAROS 2024 (25th Annual Conference Towards Autonomous Robotic Systems)",
        abstract: "Autonomous drones have been proposed for many industrial inspection roles including building infrastructure, nuclear plants and mining. They have the benefit of accessing hazardous locations, without exposing human operators and other personnel to physical risk. Underground mines are extremely challenging for autonomous drones as there is limited infrastructure for Simultaneous Localisation and Mapping (SLAM), for the drone to navigate. For example, there is no Global Navigation Satellite System (GNSS), poor lighting, and few distinguishing landmarks. Additionally, the physical environment is extremely harsh, affecting the reliability of the drone. This paper describes the impact of these challenges in designing for, and assuring, safety. We illustrate with experience from developing an autonomous Return To Home (RTH) function for an inspection drone. This is initiated when the drone suffers a communications loss whilst surveying newly excavated corridors that are unsafe for personnel. We present some of the key safety assurance challenges we faced, including design constraints and difficulties using simulations for validation and verification.",
        url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=kKQG1fIAAAAJ&citation_for_view=kKQG1fIAAAAJ:WAzi4Gm8nLoC"
    },
    {
        title: "Human Involvement in Autonomous Decision-Making Systems. Lessons learned from three case studies in aviation, social care and road vehicles",
        authors: "Pericle Salvini, Tyler Reinmund, <b>Benjamin Hardin</b>, Keri Grieman, Carolyn Ten Holter, Aaron Johnson, Lars Kunze, Alan Winfield, and Marina Jirotka",
        conference: "Frontiers in Political Science",
        abstract: "This paper draws on three case studies to examine some of the challenges and tensions involved in\n" +
            "                    the use of Autonomous Decision-Making Systems (ADMS). In particular, the paper highlights: (i)\n" +
            "                    challenges around the shifting “locale” of the decision, and the associated consequences for\n" +
            "                    stakeholders; (ii) potential implications for stakeholders from regulation such as the General Data\n" +
            "                    Protection Regulation (GDPR); (iii) the different values that stakeholder groups bring to the\n" +
            "                    “decision” question; (iv) how complex pre-existing webs of stakeholders and decision-making\n" +
            "                    authorities may be disrupted or disempowered by the use of an automated system and the lack of\n" +
            "                    evaluation of possible consequences; (v) how ADMS for non-technical users can lead to circumvention\n" +
            "                    of the boundaries of intended system use. We illustrate these challenges through case studies in\n" +
            "                    three domains: adult social care, aviation, and vehicle driver monitoring systems. The paper closes\n" +
            "                    with recommendations for both practice and policy in the deployment of ADMS.",
        url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=kKQG1fIAAAAJ&citation_for_view=kKQG1fIAAAAJ:F2UWTTQJPOcC"
    },
    {
        title: "DCnet: Evaluation of a New Data Center Architecture",
        authors: "<b>Benjamin Hardin</b>, Douglas Comer, Adib Rastegarnia",
        conference: "2023 Innovation in Clouds, Internet, and Networks (ICIN)",
        abstract: "",
        url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=kKQG1fIAAAAJ&citation_for_view=kKQG1fIAAAAJ:M05iB0D1s5AC"
    },
    {
        title: "On the Unreliability of Network Simulation Results from Mininet and iPerf",
        authors: "<b>Benjamin Hardin</b>, Douglas Comer, Adib Rastegarnia",
        conference: "2023 International Conference on Computer, Control, and Robotics (ICCCR)",
        abstract: "",
        url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=kKQG1fIAAAAJ&citation_for_view=kKQG1fIAAAAJ:g5m5HwL7SMYC"
    },
    {
        title: " A Cross-Sectional Examination of Evictions in Lafayette, Indiana in August 2020 during a Gap in Federal and State Eviction Moreatoria",
        authors: "Mary Lang, Justin MacNeill, Ethan Edwards, Ethan Glaser, <b>Benjamin Hardin</b>, Jared Huber, Elizabeth Spyratos, and Jason Ware",
        conference: "Local Development & Society Journal",
        abstract: "",
        url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=kKQG1fIAAAAJ&citation_for_view=kKQG1fIAAAAJ:EYYDruWGBe4C"
    },

    // {
    //     title: "",
    //     authors: "",
    //     conference: "",
    //     abstract: "",
    //     url: ""
    // },
]

const PaperList = () => (
    <div>
        {papers.map(paper => (
            <Paper key={paper.title} title={paper.title} authors={paper.authors} conference={paper.conference} abstract={paper.abstract} url={paper.url} />
        ))}
    </div>
);

const Paper = ({title, authors, conference, abstract, url}) => {
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
                <div className="pageSubSubtitle" style={{fontWeight: ""}} dangerouslySetInnerHTML={{__html: `${authors}`}}/>
                <div className="leftAndRightContentInsets" style={{fontStyle: "italic"}}>{conference}</div>
                <div className="leftAndRightContentInsets" style={{fontWeight: "lighter"}}>{abstract}</div>
            </div>
        );
    } else {
        // For when the paper has not been published and there's no URL
        return(
            <div>
                <div className="pageSubtitle boxhead" style={{color: "black", paddingTop: "3rem"}}>{title}</div>
                <div className="pageSubSubtitle" style={{fontWeight: ""}}
                     dangerouslySetInnerHTML={{__html: `${authors}`}}/>
                <div className="leftContentInsets" style={{fontStyle: "italic"}}>{conference}</div>
                <div className="leftContentInsets" style={{fontWeight: "lighter"}}>{abstract}</div>
            </div>
        );
    }
}


export default function PublicationsPage() {
    return (
        <div>
            {/*<div style={{backgroundColor: "black", transform: "translateX(-50%) translateY(-3.7rem)", zIndex: "-1", position: "fixed",*/}
            {/*    left: "50%",*/}
            {/*    /* bring your own prefixes */}
            {/*    height: "3rem", borderRadius: "25px", width: "750px"}}> _</div>*/}
            {/*<div className="pageSubtitle orangeItalic"*/}
            {/*     style={{fontWeight: "450", color: "black", fontSize: "70pt", marginLeft: "-10px"}}>PROJECTS<br/></div>*/}
            <div className="pageSubtitle orangeItalic boxhead"
                 style={{fontWeight: "450", color: "black", fontSize: "70pt", marginLeft: "-10px",
                     borderWidth: "0px",
                     borderBottomWidth: "2px",
                     borderBottomStyle: "dotted",
                     maxWidth: "630px"}}><a
                href={"https://scholar.google.com/citations?user=kKQG1fIAAAAJ&hl=en"}>PUBLICATIONS</a></div>

            <div className="leftContentInsets">

                <PaperList/>

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
