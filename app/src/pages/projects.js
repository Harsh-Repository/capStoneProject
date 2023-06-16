import React from "react";
import { Button, Card, Form, Row, Col } from "react-bootstrap";
import whiteBackground from "../assets/whiteBackground.jpg";
import "./projects.css";

export default function Projects() {
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
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={whiteBackground} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={whiteBackground} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}
