
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
        </div>
    );
}