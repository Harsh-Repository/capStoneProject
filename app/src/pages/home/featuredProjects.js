import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { Col, Row, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
// import whiteBackground from "../../assets/whiteBackground.jpg";
import axios from "axios";
import "./featuredProjects.css";

export default function FeaturedProjects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(
          "https://capstoneproject-wgtb.onrender.com/api/v1/projectData/projects"
        );
        const allProjects = response.data;
        const sortedProjects = allProjects.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        const latestProjects = sortedProjects.slice(0, 2);

        setProjects(latestProjects);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <>
      <h4>Featured Projects:</h4>
      <Row>
        {projects.map((project) => (
          <Col key={project._id}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={project.imageLink} />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text className="author">Author: {project.name}</Card.Text>
                <Link to={`/project/${project._id}`} >
                  <Button variant="outline-primary">Read More..</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
}
