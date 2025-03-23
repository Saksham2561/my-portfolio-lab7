import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Home() {
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
      </div>
    </Container>
  );
}

export default Home;
