import { Link } from 'react-router-dom';
// import Navbar from './Navbar'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';



export default function Navi() {
    return (
        <Navbar expand="lg" className="">
            <Container>
                <Navbar.Brand>Aimee Darling</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">About Me</Nav.Link>
                        <Nav.Link href="/portfolio">Projects</Nav.Link>
                        <Nav.Link href="/contact">Contact</Nav.Link>
                        <Nav.Link href="/resume">Resume</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
