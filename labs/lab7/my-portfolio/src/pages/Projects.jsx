import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Spinner, Alert } from "react-bootstrap";

const Projects = () => {
  const [projectList, setProjectList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    // Change this to your Netlify function URL
    fetch("https://fabulous-panda-bdb8d5.netlify.app/.netlify/functions/server/projects")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Unable to retrieve projects.");
        }
        return res.json();
      })
      .then((data) => {
        setProjectList(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setFetchError(err.message);
        setIsLoading(false);
      });
  }, []);

  return (
    <Container
      fluid
      className="text-center min-vh-100 d-flex flex-column align-items-center justify-content-center bg-light"
    >
      <div className="p-5 border rounded shadow-lg bg-white text-dark" style={{ maxWidth: "800px" }}>
        <h1 className="display-4 fw-bold mb-4 text-purple">Projects</h1>

        {isLoading && <Spinner animation="border" variant="primary" />}
        {fetchError && <Alert variant="danger">{fetchError}</Alert>}

        <Row className="justify-content-center">
          {projectList.map((proj, idx) => (
            <Col md={8} key={idx} className="mb-4">
              <Card className="shadow border-0 p-4">
                <Card.Body>
                  <h3 className="text-dark">{proj.name}</h3>

                  <p className="fw-bold text-secondary">By: {proj.author}</p>

                  <p className="fw-bold text-primary">
                    Technologies: {proj.technologies.join(", ")}
                  </p>

                  <ul className="fs-5 text-start">
                    {proj.description.map((item, index) => (
                      <li key={index}>{item}</li>
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
};

export default Projects;
