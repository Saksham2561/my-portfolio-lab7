import { Container } from "react-bootstrap";

function Footer() {
  return (
    <footer className="bg-dark text-light text-center py-4 mt-auto shadow">
      <Container>
        <small className="mb-0 fs-6">
          &copy; {new Date().getFullYear()} Saksham Aggarwal. All rights reserved.
        </small>
      </Container>
    </footer>
  );
}

export default Footer;
