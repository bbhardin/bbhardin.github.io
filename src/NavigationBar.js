import React from "react";
import {Link} from "react-router-dom";
import {Nav, Navbar} from "react-bootstrap";

export default function NavigationBar() {

	return (
		<div>
			<Navbar variant="dark" className="navbar navigationBar navigationBarContent py-3">
				<Navbar.Brand as={Link} to="/" className="navbar-brand homeButton">Ben Hardin</Navbar.Brand>
				<Nav className="me-auto">
					<Nav.Link as={Link} to="/">About Me</Nav.Link>
					<Nav.Link as={Link} to="/resume">My Resume</Nav.Link>
					<Nav.Link as={Link} to="/skills">Skills</Nav.Link>
					<Nav.Link as={Link} to="/training">Training</Nav.Link>
					<Nav.Link as={Link} to="/projects">Projects</Nav.Link>
					<Nav.Link as={Link} to="/volunteer">Volunteer Experience</Nav.Link>
					<Nav.Link as={Link} to="/hobbies">Hobbies</Nav.Link>
					<Nav.Link as={Link} to="/travels">Travels</Nav.Link>
					<Nav.Link as={Link} to="/contact">Contact</Nav.Link>

				</Nav>
			</Navbar>
		</div>
	);
}
