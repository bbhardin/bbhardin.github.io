
import {Container, Row, Col} from "react-bootstrap";

export default function SkillsPage() {

    const skills = ["C/C++", "Python", "Java", "Swift", "SwiftUI", "Javascript", "MySQL", "Dart", "React", "ARM/x86-64 Assembly", "OpenGL", "HTML5", "CSS", "Matlab", "R", "Agile/Scrum", "Xcode", "Git", "Flutter", "Unix"];
    const skillsList = skills.map((number) =>
        <li>{number}</li>
    );

    const courses = ["CS352 Compilers", "CS354 Operating Systems", "CS422 Computer Networks", "CS381 Analysis of Algorithms", "CS334 Computer Graphics", "CS314 Numerical Methods"]
    const coursesList = courses.map((number) =>
        <li>{number}</li>
    );

    return (
        <div className="leftContentInsets">
            <Container>
                <Row>
                    <Col>
                        <div className='pageTitle'>Skills</div>
                        <div>
                            <div className='roundedBackground' style={{padding: "1rem"}}>
                                <ul>{skillsList}</ul>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className='pageTitle'>Interesting Courses I've Taken</div>
                        <div>
                            <div className='roundedBackground' style={{padding: "1rem"}}>
                                <ul>{coursesList}</ul>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

            <div className='pageSubtitle'>Certificate in Entrepreneurship and Innovation (In Progress)</div>
            <div className='pageSubSubtitle' style={{fontWeight: "bold"}}>Purdue University</div>
            <div>To be completed in Fall 2021!</div>
            <ul>
                <li>ENTR 460 – Internship and Career Preparation Seminar<div>Fall 2021</div></li>
                <li>ENTR 310 – Marketing and Mangement for New Ventures
                    <div>Fall 2019</div>
                    <div>
                        Created a business plan and pitch for a smart, electronically-lockable mailbox for packages
                        and other deliveries.
                    </div>
                </li>
                <li>ENTR 200 – Introduction to Entrepreneurship and Innovation
                    <div>Spring 2019</div>
                    <div>
                        Created a business plan and pitch for an Artificial Intelligence computer file sorter.
                    </div>
                </li>
            </ul>
        </div>
    );
}