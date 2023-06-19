import React, { useEffect, useState } from "react";
import { Form, Row, Col } from "react-bootstrap";
import "./projects.css";
import ProjectCard from "./projectCard";
import axios from "axios";

export default function Projects() {
  const [allPojects, setAllProjects] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3001/projects")
      .then((res) => setAllProjects(res.data));
  }, []);
  return (
    <>
      <div className="projects">
        <Row>
          <Col colSpan={16}>
            <h1>Here are all the projects!</h1>
          </Col>
          <Col colSpan={2}>
            <Form.Select
              aria-label="Default select example"
              required
              style={{ width: "25%", marginLeft: "70%" }}
            >
              <option value="All">All</option>
              <option value="1">Category 1</option>
              <option value="2">Category 2</option>
              <option value="3">Category 3</option>
              <option value="4">Category 4</option>
            </Form.Select>
          </Col>
        </Row>
        <div className="projectCards">
          <Row xs={1} md={3} className="g-4">
            {allPojects &&
              allPojects.map((project) => (
                <Col>
                  <ProjectCard
                    key={project._id}
                    id={project._id}
                    imageLink={project.imageLink}
                    title={project.title}
                    details={project.details}
                  />
                </Col>
              ))}
          </Row>
        </div>
      </div>
    </>
  );
}
