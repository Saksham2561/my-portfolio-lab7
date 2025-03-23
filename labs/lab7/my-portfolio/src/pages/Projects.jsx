import { useState, useEffect } from "react";
import { Container, Row, Col, Card, Spinner, Alert } from "react-bootstrap";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5001/api/projects")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch projects");
        }
        return response.json();
      })
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <Container
      fluid
      className="text-center min-vh-100 d-flex flex-column align-items-center justify-content-center bg-light"
    >
      <div className="p-5 border rounded shadow-lg bg-white text-dark" style={{ maxWidth: "800px" }}>
        <h1 className="display-4 fw-bold mb-4 text-purple">Projects</h1>

        {loading && <Spinner animation="border" variant="primary" />}
        {error && <Alert variant="danger">{error}</Alert>}

        <Row className="justify-content-center">
          {projects.map((project, index) => (
            <Col md={8} key={index} className="mb-4">
              <Card className="shadow border-0 p-4">
                <Card.Body>
                  {/* Project Name */}
                  <h3 className="text-dark">{project.name}</h3>
                  
                  {/* Author */}
                  <p className="fw-bold text-secondary">By: {project.author}</p>
                  
                  {/* Technologies */}
                  <p className="fw-bold text-primary">
                    Technologies: {project.technologies.join(", ")}
                  </p>
                  
                  {/* Description */}
                  <ul className="fs-5 text-start">
                    {project.description.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
}

export default Projects;
