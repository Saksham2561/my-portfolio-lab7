import { Container, Navbar, Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  return (
    <Navbar expand="lg" bg="dark" variant="dark" className="w-100 shadow">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold fs-3 text-light">
          My Portfolio
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" aria-label="Toggle navigation" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto">
            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
              { name: "Projects", path: "/projects" },
            ].map((item, index) => (
              <Nav.Link
                key={index}
                as={Link}
                to={item.path}
                className="fs-5 text-light"
                tabIndex="0"
                aria-current={location.pathname === item.path ? "page" : undefined}
              >
                {item.name}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
