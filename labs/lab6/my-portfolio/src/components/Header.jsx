import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar style={{ backgroundColor: "#222" }} variant="dark" expand="lg" className="w-100 py-3 shadow">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold fs-3 text-light">
          My Portfolio
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" aria-label="Toggle navigation" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="fs-5 text-light">Home</Nav.Link>
            <Nav.Link as={Link} to="/about" className="fs-5 text-light">About</Nav.Link>
            <Nav.Link as={Link} to="/projects" className="fs-5 text-light">Projects</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
