
import { Outlet , Link } from "react-router-dom"
import logo from '../images/logo.webp'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Layout(){


    return (
        <>
     <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">DreamTours</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/albums">Albums</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
     
     
     <Outlet /> 
     </>

    )
}