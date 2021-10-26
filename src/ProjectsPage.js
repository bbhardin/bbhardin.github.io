
import icon from "./images/Icon.png"
import dn from "./images/doctorsnote.png"
import hcr from "./images/HCR.png"
import React from "react";

export default function ProjectsPage() {
    return (
        <div className="leftAndRightContentInsets">

            <div className="pageTitle">Projects</div>
            <div className="pageSubtitle">DCnet Research Project</div>
            <div className="pageSubSubtitle">Undergraduate Research with Professor Douglas Comer</div>
            <ul>
                <li>Worked with Professor Douglas Comer to implement a new data center architecture based on unique static MAC addresses to provide reliable and quick VM migration.</li>
                <li>Designed tests utilizing Mininet and ONOS to simulate our architecture and test network performance.</li>
            </ul>


            <div className="pageSubtitle">Purdue Honors College & Residences App</div>
            <img className='avatar' style={{maxWidth: 100, borderRadius: '15%', float: 'right', marginRight: 50, borderColor: 'black', borderWidth: 2, marginLeft: 50}} src={hcr} />
            <div className="pageSubSubtitle">President of Purdue Honors College Development Committee</div>
            <div>Led the iOS team to develop an app to support the Purdue Honors College and Residences in their house
                competition system. The system incentivizes residents to participate in the college and earn more points
                than other dorm floors. The app is used by over 900 students and faculty and also includes features such
                as events happening around Honors and laundry machine status updates.
            </div>

            <div className="pageSubtitle">Appetyte</div>
            <div className="pageSubSubtitle">CS407 Semester Project, Fall 2022</div>
            <ul><li>Developing an app to help users reduce food waste by making recipes for their ingredients that expire soon.</li></ul>

            <img className='avatar' style={{maxWidth: 100, borderRadius: '15%', float: 'right', marginRight: 50}} src={icon} />
            <div className="pageSubtitle"><a href="https://apps.apple.com/us/app/skill-zone-play-to-the-top/id1576326199">SkillZone</a></div>
            <div className="pageSubSubtitle">Minigame iOS App</div>
            <ul><li>Helped develop components of a mini game app with over 62,000 users.</li></ul>

            <img className='avatar' style={{maxWidth: 100, borderRadius: '15%', float: 'right', marginRight: 50}} src={dn} />
            <div className="pageSubtitle">DoctorsNote</div>
            <div className="pageSubSubtitle">CS307 Semester Project, Sprint 2020</div>



        </div>
    );
}