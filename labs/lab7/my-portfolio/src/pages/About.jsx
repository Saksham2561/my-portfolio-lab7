import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

const skills = [
  { name: "Java", type: "Programming" },
  { name: "C#", type: "Programming" },
  { name: "Python", type: "Programming" },
  { name: "SQL", type: "Programming" },
  { name: "React.js", type: "Programming" },
  { name: "Git", type: "Developer Tools" },
  { name: "Jenkins", type: "Developer Tools" },
  { name: "Jira", type: "Developer Tools" },
  { name: "Agile", type: "Methodologies" },
  { name: "Scrum", type: "Methodologies" },
];

const About = () => {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("");

  const filteredSkills = skills.filter(
    (skill) =>
      skill.name.toLowerCase().includes(query.toLowerCase()) &&
      (activeCategory === "" || skill.type === activeCategory)
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
                <p>
                  <strong>Dalhousie University</strong> – Bachelor of Computer Science (2021-2025)
                </p>

                <h3 className="mt-4 text-purple">Skills</h3>

                <Form.Control
                  type="text"
                  placeholder="Search skills..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="mb-3"
                />

                <div className="d-flex gap-2 mb-3">
                  {["Programming", "Developer Tools", "Methodologies"].map((category) => (
                    <Button
                      key={category}
                      variant={activeCategory === category ? "primary" : "outline-primary"}
                      onClick={() => setActiveCategory(activeCategory === category ? "" : category)}
                    >
                      {category}
                    </Button>
                  ))}
                </div>

                <ul className="fs-5">
                  {filteredSkills.length ? (
                    filteredSkills.map((skill, index) => (
                      <li key={index}>
                        {skill.name} <small>({skill.type})</small>
                      </li>
                    ))
                  ) : (
                    <li className="text-muted">No matching skills found.</li>
                  )}
                </ul>

                <h3 className="mt-4 text-purple">Experience</h3>

                <h4 className="mt-3">
                  <strong>Software Developer (Co-op)</strong>
                </h4>
                <p>
                  <strong>Irving Oil</strong> – Saint John, NB (Sep 2024 – Dec 2024)
                </p>
                <ul>
                  <li>Enhanced Irving Oil’s loyalty API using C#, SQL Server Management Studio (SSMS), and Angular.</li>
                  <li>Developed a scheduled batch Apex process in Salesforce to update over 2 million loyalty member records.</li>
                  <li>Resolved a critical sign-up issue on the Hometown Rewards website.</li>
                  <li>Implemented a Salesforce feature enabling customer support to manage preferred retail sites.</li>
                </ul>

                <h4 className="mt-3">
                  <strong>Learning Specialist (Co-op)</strong>
                </h4>
                <p>
                  <strong>Digital Moment</strong> – Montreal, QC (Sep 2023 – Dec 2023)
                </p>
                <ul>
                  <li>Worked with Python, NumPy, and Pandas to analyze and visualize data in the Data Dunkers program.</li>
                  <li>Identified and corrected issues in the hackathon starter code.</li>
                </ul>

                <h4 className="mt-3">
                  <strong>Undergraduate Teaching Assistant (CSCI 1105)</strong>
                </h4>
                <p>
                  <strong>Dalhousie University</strong> – Halifax, NS (Sep 2022 – Dec 2022)
                </p>
                <ul>
                  <li>Provided timely feedback to over 100 students.</li>
                  <li>Helped develop teaching materials for the course.</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default About;
