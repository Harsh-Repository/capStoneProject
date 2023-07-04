import React, { useEffect, useState } from "react";
import { Form, Row, Col } from "react-bootstrap";
import "./projects.css";
import ProjectCard from "./projectCard";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchProjects } from "../../redux/projectsSlice";

export default function Projects() {
  // const [allPojects, setAllProjects] = useState("");
  const allProjects = useSelector((state) => state);
  const [filterProjects, setFilterProjects] = useState("All");
  const dispatch = useDispatch();
  // console.log(allProjects.projects.projectsData);

  useEffect(() => {
    axios.get("http://localhost:3001/projects").then(
      (res) => dispatch(fetchProjects(res.data))
      // setAllProjects(res.data)
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
          <Row xs={1} md={4} className="g-4">
            {allProjects.projects.projectsData &&
              allProjects.projects.projectsData
                .filter((project) => {
                  return (
                    filterProjects === "All" ||
                    project.category.includes(filterProjects)
                  );
                })
                .map((project) => (
                  <Col key={project._id}>
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
