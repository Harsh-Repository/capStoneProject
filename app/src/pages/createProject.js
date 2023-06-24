import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import "./createProject.css";

export const CreateProject = () => {
  return (
    <>
      <div className="createProject">
        <h1>Raise Funds For Anything and Everything!</h1>
        <h5>
          WeThePeople is fast, easy, and has no raise requirements or start up
          fees.
        </h5>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Row>
              <Col>
                <Form.Label>Name:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Firstname Lastname"
                  required
                />
              </Col>
              <Col>
                <Form.Label>Email address:</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  required
                />
              </Col>
            </Row>
            <Form.Label>Project Title:</Form.Label>
            <Form.Control type="text" placeholder="Project name" required />
            <Form.Label>Project Category:</Form.Label>
            <Form.Select aria-label="Default select example" required>
              <option value="1">Category 1</option>
              <option value="2">Category 2</option>
              <option value="3">Category 3</option>
              <option value="4">Category 4</option>
            </Form.Select>
            <Row>
              <Col>
                <Form.Label>Image Link:</Form.Label>
                <Form.Control
                  type="url"
                  placeholder="Please provide Image Link that shows your work"
                  required
                />
              </Col>
              <Col>
                <Form.Label>Goal:</Form.Label>
                <Form.Control type="number" placeholder="In USD" required />
              </Col>
            </Row>
            <Form.Label>Project Details:</Form.Label>
            <Form.Control as="textarea" rows={3} required />
          </Form.Group>
          <Button
            variant="outline-primary"
            href="#"
            id="btnsubmit"
            onclick="submitForm()"
          >
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
};
