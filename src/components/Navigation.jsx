import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';


function Navigation () {
    return (
      <>
        {[true && 'sm' && 'md'].map((expand) => (
          <Navbar className="navibar" key={expand} expand={expand}>
            <Container>
              <Navbar.Brand href="#" className="text-white fs-1">NEPFLIX</Navbar.Brand>
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
                className="offCan"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} className="text-white">
                    Menu
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3 text-white">
                    <Nav.Link href="/Home"className="text-white fs-5">Home</Nav.Link>
                    <Nav.Link href="/TVshow" className="text-white fs-5">TV Shows</Nav.Link>
                    <Nav.Link href="/Movies" className="text-white fs-5">Movies</Nav.Link>
                    <Nav.Link href="/FAQ" className="text-white fs-5">FAQs</Nav.Link>
                    <Nav.Link href="/Login" className="text-white fs-5">Login/Sign up</Nav.Link>
                  </Nav>  
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
  
  
      </>
    )
  }
  
  export default Navigation;