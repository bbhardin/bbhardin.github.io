import React from "react";
import {Link} from "react-router-dom";
import {Nav, Navbar, Row, Col} from "react-bootstrap";

export default function NavigationBar() {

	return (
		<div>
			<Navbar variant="dark" className="navbar navigationBar navigationBarContent py-3">
				<Nav className="me-auto" style={{margin: "0 auto"}}>
					<Navbar.Brand as={Link} to="/">Ben Hardin</Navbar.Brand>
					{/*<Nav.Link as={Link} to="/">About Me</Nav.Link>*/}
					<Nav.Link as={Link} to="/projects">Projects</Nav.Link>
					<Nav.Link as={Link} to="/volunteer">Volunteer Experience</Nav.Link>
					<Nav.Link as={Link} to="/resume">CV</Nav.Link>
					<Nav.Link as={Link} to="/hobbies">Hobbies</Nav.Link>
					<Nav.Link as={Link} to="/travels">Travels</Nav.Link>
					{/*<Nav.Link as={Link} to="/skills">Skills</Nav.Link>*/}
					{/*<Nav.Link as={Link} to="/training">Certification</Nav.Link>*/}
					<Nav.Link as={Link} to="/contact">Contact</Nav.Link>
				</Nav>
			</Navbar>
		</div>
	);
}
