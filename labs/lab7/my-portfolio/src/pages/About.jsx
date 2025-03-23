import { useState } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

const skillsData = [
  { name: "Java", category: "Programming" },
  { name: "C#", category: "Programming" },
  { name: "Python", category: "Programming" },
  { name: "SQL", category: "Programming" },
  { name: "React.js", category: "Programming" },
  { name: "Git", category: "Developer Tools" },
  { name: "Jenkins", category: "Developer Tools" },
  { name: "Jira", category: "Developer Tools" },
  { name: "Agile", category: "Methodologies" },
  { name: "Scrum", category: "Methodologies" },
];

function About() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const filteredSkills = skillsData.filter(
    (skill) =>
      skill.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === "" || skill.category === selectedCategory)
  );

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

                {/* Interactive Skills Section */}
                <h3 className="mt-4 text-purple">Skills</h3>

                {/* Search Box */}
                <Form.Control
                  type="text"
                  placeholder="Search skills..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="mb-3"
                />

                {/* Category Buttons */}
                <div className="d-flex gap-2 mb-3">
                  {["Programming", "Developer Tools", "Methodologies"].map((category) => (
                    <Button
                      key={category}
                      variant={selectedCategory === category ? "primary" : "outline-primary"}
                      onClick={() => setSelectedCategory(selectedCategory === category ? "" : category)}
                    >
                      {category}
                    </Button>
                  ))}
                </div>

                {/* Filtered Skill List */}
                <ul className="fs-5">
                  {filteredSkills.length > 0 ? (
                    filteredSkills.map((skill, index) => (
                      <li key={index}>{skill.name} <small>({skill.category})</small></li>
                    ))
                  ) : (
                    <li className="text-muted">No matching skills found.</li>
                  )}
                </ul>

                <h3 className="mt-4 text-purple">Experience</h3>

                <h4 className="mt-3"><strong>Software Developer (Co-op)</strong></h4>
                <p><strong>Irving Oil</strong> – Saint John, NB (Sep 2024 – Dec 2024)</p>
                <ul>
                  <li>Enhanced Irving Oil’s loyalty API using C#, SQL Server Management Studio (SSMS), and Angular...</li>
                  <li>Built a scheduled batch Apex process in Salesforce to update over 2 million loyalty member records...</li>
                  <li>Fixed a critical sign-up bug on the Hometown Rewards website...</li>
                  <li>Introduced a Salesforce feature for customer support to set and lookup preferred retail sites...</li>
                </ul>

                <h4 className="mt-3"><strong>Learning Specialist (Co-op)</strong></h4>
                <p><strong>Digital Moment</strong> – Montreal, QC (Sep 2023 – Dec 2023)</p>
                <ul>
                  <li>Analyzed and visualized data in the Data Dunkers program using Python, NumPy, Pandas...</li>
                  <li>Identified and rectified errors in the hackathon’s starter code...</li>
                </ul>

                <h4 className="mt-3"><strong>Undergraduate Teaching Assistant (CSCI 1105)</strong></h4>
                <p><strong>Dalhousie University</strong> – Halifax, NS (Sep 2022 – Dec 2022)</p>
                <ul>
                  <li>Provided timely feedback to over 100 students...</li>
                  <li>Assisted in the preparation of teaching materials...</li>
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
