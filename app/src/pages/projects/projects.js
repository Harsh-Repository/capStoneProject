import React, { useEffect, useState } from "react";
import { Form, Row, Col } from "react-bootstrap";
import "./projects.css";
import ProjectCard from "./projectCard";
import axios from "axios";

export default function Projects() {
  const [allPojects, setAllProjects] = useState("");
  const [filterProjects, setFilterProjects] = useState("All");

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
              onChange={(e) => setFilterProjects(e.target.value)}
            >
              <option value="All">Select All</option>
              <option value="Nature">Nature</option>
              <option value="Education">Education</option>
              <option value="Health">Health</option>
              <option value="Food">Food</option>
              <option value="Social">Social</option>
              {/* {allPojects &&
                allPojects.map((project) => (
                  <option key={project.category}>{project.category}</option>
                ))} */}
            </Form.Select>
          </Col>
        </Row>
        <div className="projectCards">
          <Row xs={1} md={3} className="g-4">
            {allPojects &&
              allPojects
                .filter((project) => {
                  return (
                    filterProjects === "All" ||
                    project.category.includes(filterProjects)
                  );
                })
                .map((project) => (
                  <Col>
                    <ProjectCard
                      key={project._id}
                      id={project._id}
                      imageLink={project.imageLink}
                      title={project.title}
                      details={project.details}
                      category={project.category}
                    />
                  </Col>
                ))}
          </Row>
        </div>
      </div>
    </>
  );
}
