import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-scroll";
function Header() {
  return (
    <>
      <Navbar bg="light" fixed="top" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">Nguyễn Hữu Toàn</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link>
              <Link to="about" smooth={true} duration={500}>
                About Me
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="experience" smooth={true} duration={500}>
                Experience
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="projects" smooth={true} duration={500}>
                Projects
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="contact" smooth={true} duration={500}>
                Contact
              </Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
