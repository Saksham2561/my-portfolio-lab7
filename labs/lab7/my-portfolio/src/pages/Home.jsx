import { useState, useEffect } from "react";
import { Container, Row, Col, Button, Spinner, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";

function Home() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5001/api/weather")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch weather data");
        }
        return response.json();
      })
      .then((data) => {
        setWeather(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <Container
      fluid
      className="text-center min-vh-100 d-flex flex-column align-items-center justify-content-center bg-light"
    >
      <div className="p-5 border rounded shadow-lg bg-white text-dark" style={{ maxWidth: "800px" }}>
        {/* Profile Image */}
        <img
          src="/Linkedin.jpeg"
          alt="Saksham Aggarwal's Profile Picture"
          className="rounded-circle shadow-sm mb-3"
          width="150"
          height="150"
          style={{ objectFit: "cover" }}
        />

        <h1 className="display-4 fw-bold mb-3 text-purple">Hello & Welcome!</h1>
        <p className="lead fs-4">
          I'm <strong>Saksham Aggarwal</strong>, a passionate software developer dedicated to building scalable and efficient digital solutions.
        </p>
        <hr className="my-4" />
        <Row className="justify-content-center">
          <Col md={10}>
            <p className="fs-5">
              With expertise in full-stack development, API integrations, and cloud computing, I specialize in crafting seamless and high-performance applications. 
              I thrive on tackling complex problems and continuously expanding my skill set.
            </p>
            <p className="fs-5">
              Browse my portfolio to discover how I bring ideas to life with clean and maintainable code.
            </p>
          </Col>
        </Row>
        <div className="mt-4">
          <Link to="/projects">
            <Button variant="dark" className="mx-2" aria-label="View My Projects">
              Explore Projects
            </Button>
          </Link>
          <Link to="/about">
            <Button variant="outline-dark" className="mx-2" aria-label="Learn More About Me">
              More About Me
            </Button>
          </Link>
        </div>

        {/* Weather Section */}
        <div className="mt-5 p-4 border rounded shadow-sm bg-light">
          <h2 className="text-purple">Current Weather</h2>

          {loading && <Spinner animation="border" />}
          {error && <Alert variant="danger">{error}</Alert>}
          
          {weather && (
            <div className="fs-5">
              <p><strong>Location:</strong> {weather.city}</p>
              <p><strong>Temperature:</strong> {weather.temperature}°C</p>
              <p><strong>Humidity:</strong> {weather.humidity}%</p> 
              <p><strong>Condition:</strong> {weather.description}</p> 
            </div>
          )}
        </div>
      </div>
    </Container>
  );
}

export default Home;
