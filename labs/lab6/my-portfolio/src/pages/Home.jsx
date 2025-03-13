import { Container, Row, Col, Button } from "react-bootstrap";

function Home() {
  return (
    <Container 
      fluid 
      className="text-center min-vh-100 d-flex flex-column align-items-center justify-content-center" 
      style={{ backgroundColor: "#f5f5dc" }}
    >
      <div className="p-5 border rounded shadow bg-white text-dark" style={{ maxWidth: "800px" }}>
        {/* Profile Image */}
        <img
          src="/Linkedin.jpeg"
          alt="Saksham Aggarwal"
          className="rounded-circle shadow mb-3"
          style={{ width: "150px", height: "150px", objectFit: "cover" }}
        />

        <h1 className="display-3 fw-bold mb-3" style={{ color: "#6a0dad" }}>Welcome to My Portfolio</h1>
        <p className="lead fs-4">
          Hi, I'm <strong>Saksham Aggarwal</strong>, a dedicated software developer with a passion for crafting efficient and scalable web and software solutions.
        </p>
        <hr className="my-4" />
        <Row className="justify-content-center">
          <Col md={10}>
            <p className="fs-5">
              With experience in full-stack development, API integration, and cloud technologies, I specialize in building interactive and data-driven applications. 
              I thrive on solving complex problems and continuously learning new technologies.
            </p>
            <p className="fs-5">
              Explore my projects and experiences to see how I turn ideas into reality through clean, efficient, and scalable code.
            </p>
          </Col>
        </Row>
        <div className="mt-4">
          <Button variant="dark" href="/projects" className="mx-2">View Projects</Button>
          <Button variant="outline-dark" href="/about" className="mx-2">About Me</Button>
        </div>
      </div>
    </Container>
  );
}

export default Home;
