import { Container, Row, Col, Card } from "react-bootstrap";

function About() {
  return (
    <Container
      fluid
      className="text-center min-vh-100 d-flex flex-column align-items-center justify-content-center bg-light"
    >
      <div className="p-5 border rounded shadow-lg bg-white text-dark" style={{ maxWidth: "800px" }}>
        <h1 className="display-4 fw-bold mb-4 text-purple">About Me</h1>

        <Row className="justify-content-center">
          <Col md={10}>
            <Card className="p-4 shadow border-0">
              <Card.Body>
                <h3 className="text-purple">Education</h3>
                <p><strong>Dalhousie University</strong> – Bachelor of Computer Science (2021-2025)</p>

                <h3 className="mt-4 text-purple">Skills</h3>
                <ul className="fs-5">
                  <li>Programming: Java, C#, Python, SQL, React.js</li>
                  <li>Developer Tools: Git, Jenkins, Jira</li>
                  <li>Methodologies: Agile, Scrum</li>
                </ul>

                <h3 className="mt-4 text-purple">Experience</h3>

                <h4 className="mt-3"><strong>Software Developer (Co-op)</strong></h4>
                <p><strong>Irving Oil</strong> – Saint John, NB (Sep 2024 – Dec 2024)</p>
                <ul>
                  <li>Enhanced Irving Oil’s loyalty API using C#, SQL Server Management Studio (SSMS), and Angular, implementing login audits, active promotions, and linked card features, reducing customer support tickets by 25-30%.</li>
                  <li>Built a scheduled batch Apex process in Salesforce to update over 2 million loyalty member records, enabling customer support to handle deactivation independently and eliminating related ticket escalations.</li>
                  <li>Fixed a critical sign-up bug on the Hometown Rewards website via Salesforce Flows, ensuring Air Miles validation to maintain data integrity and prevent unauthorized sign-ups.</li>
                  <li>Introduced a Salesforce feature for customer support to set and lookup preferred retail sites, enabling targeted offers and enhancing customer personalization.</li>
                </ul>

                <h4 className="mt-3"><strong>Learning Specialist (Co-op)</strong></h4>
                <p><strong>Digital Moment</strong> – Montreal, QC (Sep 2023 – Dec 2023)</p>
                <ul>
                  <li>Analyzed and visualized data in the Data Dunkers program using Python, NumPy, Pandas, and Matplotlib, enhancing insights and decision-making.</li>
                  <li>Identified and rectified errors in the hackathon’s starter code, resulting in smoother program execution and enhanced user experience.</li>
                </ul>

                <h4 className="mt-3"><strong>Undergraduate Teaching Assistant (CSCI 1105)</strong></h4>
                <p><strong>Dalhousie University</strong> – Halifax, NS (Sep 2022 – Dec 2022)</p>
                <ul>
                  <li>Provided timely feedback to over 100 students, resulting in improved understanding and performance in the course.</li>
                  <li>Assisted in the preparation of teaching materials, ensuring clarity and effectiveness in conveying course concepts.</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default About;
