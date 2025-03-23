import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Spinner, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [isFetching, setIsFetching] = useState(true);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    // Change this to your Netlify function URL for weather data
    fetch("https://fabulous-panda-bdb8d5.netlify.app/.netlify/functions/server/weather")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Could not retrieve weather data.");
        }
        return res.json();
      })
      .then((data) => {
        setWeatherData(data);
        setIsFetching(false);
      })
      .catch((err) => {
        setFetchError(err.message);
        setIsFetching(false);
      });
  }, []);

  return (
    <Container
      fluid
      className="text-center min-vh-100 d-flex flex-column align-items-center justify-content-center bg-light"
    >
      <div className="p-5 border rounded shadow-lg bg-white text-dark" style={{ maxWidth: "800px" }}>
        <img
          src="/Linkedin.jpeg"
          alt="Saksham Aggarwal's Profile Picture"
          className="rounded-circle shadow-sm mb-3"
          width="150"
          height="150"
          style={{ objectFit: "cover" }}
        />

        <h1 className="display-4 fw-bold mb-3 text-purple">Welcome to My Space!</h1>
        <p className="lead fs-4">
          I'm <strong>Saksham Aggarwal</strong>, a software developer passionate about crafting efficient and scalable applications.
        </p>
        <hr className="my-4" />

        <Row className="justify-content-center">
          <Col md={10}>
            <p className="fs-5">
              Specializing in full-stack development, API integrations, and cloud technologies, I enjoy solving complex problems and continuously enhancing my skill set.
            </p>
            <p className="fs-5">
              Feel free to explore my projects and see how I transform ideas into reality with clean, maintainable code.
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

        <div className="mt-5 p-4 border rounded shadow-sm bg-light">
          <h2 className="text-purple">Weather Update</h2>

          {isFetching && <Spinner animation="border" />}
          {fetchError && <Alert variant="danger">{fetchError}</Alert>}

          {weatherData && (
            <div className="fs-5">
              <p><strong>City:</strong> {weatherData.location}</p>
              <p><strong>Temperature:</strong> {weatherData.temperature}°C</p>
              <p><strong>Humidity:</strong> {weatherData.humidity}%</p>
              <p><strong>Condition:</strong> {weatherData.description}</p>
            </div>
          )}
        </div>
      </div>
    </Container>
  );
};

export default Home;
