import { Container } from "react-bootstrap";

function Footer() {
  return (
    <footer style={{ backgroundColor: "#333" }} className="text-white text-center py-4 mt-auto shadow">
      <Container>
        <p className="mb-0 fs-5">&copy; {new Date().getFullYear()} Saksham Aggarwal. All rights reserved.</p>
      </Container>
    </footer>
  );
}

export default Footer;
