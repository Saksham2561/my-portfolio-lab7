import { Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  return (
    <Container fluid className="d-flex flex-column align-items-center justify-content-center min-vh-100" style={{ backgroundColor: "#f5f5dc" }}>
      <div className="p-5 border rounded shadow bg-white text-center">
        <h1 className="text-danger display-2 fw-bold">404</h1>
        <h2 className="text-muted">Oops! Page Not Found</h2>
        <p>The page you're looking for doesn't exist or may have been moved.</p>
        <Button variant="dark" onClick={() => navigate("/")}>Back to Home</Button>
      </div>
    </Container>
  );
}

export default NotFound;
