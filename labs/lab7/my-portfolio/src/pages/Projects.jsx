import { Container, Row, Col, Card } from "react-bootstrap";

function Projects() {
  const projects = [
    {
      title: "Effect Size Illustrator",
      technologies: "Git, GitLab, Jira, Confluence, React.js, JUnit, Agile, Scrum, Vercel",
      description: [
        "Collaborated as a Junior Developer within a 9-member team, utilizing the Agile Scrum methodology and tools like Git, GitLab, Jira, and Confluence to create effect-size.com, a web-based tool simplifying the interpretation of effect size statistics.",
        "Utilized React.js and Next.js frameworks to enhance UI with engaging graphs and essential formulas, boosting user interaction.",
        "Orchestrated the deployment of the website using Vercel, establishing a custom domain for smooth user accessibility.",
        "Performed thorough input validation, addressed bugs through meticulous resolution, executed extensive user testing, and implemented JUnit for comprehensive test case coverage."
      ]
    },
    {
      title: "Trello Clone",
      technologies: "Git, GitLab, SQL, Spring Boot, React.js, Postman, JUnit",
      description: [
        "Collaborated within a 5-member team, effectively utilizing Git and GitLab for version control, to develop a fully functional clone of the productivity application 'Trello'.",
        "Employed Spring Boot to manage the complete user system, including authentication and authorization processes, leveraging JUnit for unit testing of backend functionalities.",
        "Utilized React.js to integrate UI components and facilitate user interaction with the Trello clone application.",
        "Organized and maintained user data, board details, workspace specifics, and task information within a relational MySQL database, while also conducting comprehensive API testing using Postman to ensure reliability and functionality of backend services."
      ]
    }
  ];

  return (
    <Container
      fluid
      className="text-center min-vh-100 d-flex flex-column align-items-center justify-content-center bg-light"
    >
      <div className="p-5 border rounded shadow-lg bg-white text-dark" style={{ maxWidth: "800px" }}>
        <h1 className="display-4 fw-bold mb-4 text-purple">Projects</h1>

        <Row className="justify-content-center">
          {projects.map((project, index) => (
            <Col md={8} key={index} className="mb-4">
              <Card className="shadow border-0 p-4">
                <Card.Body>
                  <h3 className="text-dark">{project.title}</h3>
                  <p className="fw-bold text-secondary">{project.technologies}</p>
                  <ul className="fs-5">
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
