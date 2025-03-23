import { Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  return (
    <Container
      fluid
      className="text-center min-vh-100 d-flex flex-column align-items-center justify-content-center bg-light"
    >
      <div className="p-5 border rounded shadow-lg bg-white text-dark" style={{ maxWidth: "800px" }}>
        <h1 className="text-danger display-2 fw-bold">404</h1>
        <h2 className="text-muted">Oops! Page Not Found</h2>
        <p>The page you're looking for doesn't exist or may have been moved.</p>
        <Button variant="dark" onClick={() => navigate("/")}>Back to Home</Button>
      </div>
    </Container>
  );
}

export default NotFound;
