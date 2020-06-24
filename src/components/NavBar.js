import React, { Component } from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'


class NavBar extends Component {

	openSearch = () => {
		var searchValue = document.getElementById("searchTitle").value
		console.log(window.location.hostname + "/Search?searchTitle=" + searchValue)
		window.location = "/Search?searchTitle=" + searchValue;
	}

	render() {
		return (
			<div className="myNavbar">
				<Navbar bg="light" expand="lg">
					<Navbar.Brand href="/">ForumCs</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="mr-auto">
							<Nav.Link href="/">Home</Nav.Link>
							<Nav.Link href="faq">FAQ</Nav.Link>
							{/* <Nav.Link href="our_team">Nostros</Nav.Link> */}
							{/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
								<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
							</NavDropdown> */}
						</Nav>
						<Form inline>
							<FormControl type="text" placeholder="Search" className="mr-sm-2" id="searchTitle" />
							<Button onClick={this.openSearch.bind(this)} variant="outline-primary">Search</Button>
						</Form>
					</Navbar.Collapse>
				</Navbar>
			</div>
		)
	}
}
export default NavBar
