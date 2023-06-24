import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import "./createProject.css";
import { useState } from "react";
import axios from "axios";
import { Routes, Route, useNavigate } from "react-router-dom";
import Projects from "../projects/projects";

export const CreateProject = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [imageLink, setImgLink] = useState("");
  const [goal, setGoal] = useState("");
  const [details, setDetails] = useState("");
  const navigate = useNavigate();
  const navigateToProjects = () => {
    navigate("/projects");
  };

  return (
    <>
      <div className="createProject">
        <h1>Raise Funds For Anything and Everything!</h1>
        <h5>
          WeThePeople is fast, easy, and has no raise requirements or start up
          fees.
        </h5>
        <Form onSubmit={navigateToProjects}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Row>
              <Col>
                <Form.Label>Name:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Firstname Lastname"
                  required
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </Col>
              <Col>
                <Form.Label>Email address:</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  required
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </Col>
            </Row>
            <Form.Label maxLength={15}>Project Title:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Project name"
              required
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              className="text-break"
            />
            <Form.Label>Project Category:</Form.Label>
            <Form.Select
              aria-label="Default select example"
              required
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            >
              <option value="1">Nature</option>
              <option value="2">Education</option>
              <option value="3">Health</option>
              <option value="4">Food</option>
            </Form.Select>
            <Row>
              <Col>
                <Form.Label>Image Link:</Form.Label>
                <Form.Control
                  type="url"
                  placeholder="Please provide Image Link that shows your work"
                  required
                  onChange={(e) => {
                    setImgLink(e.target.value);
                  }}
                />
              </Col>
              <Col>
                <Form.Label>Goal (in USD):</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="In USD"
                  required
                  onChange={(e) => {
                    setGoal(e.target.value);
                  }}
                />
              </Col>
            </Row>
            <Form.Label>Project Details:</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              required
              onChange={(e) => {
                setDetails(e.target.value);
              }}
              className="text-break"
            />
          </Form.Group>
          <Button
            variant="outline-primary"
            id="btnsubmit"
            formMethod="POST"
            onClick={(e) => {
              e.preventDefault();
              axios.post(`http://localhost:3001/createProject`, {
                name,
                email,
                title,
                category,
                imageLink,
                goal,
                details,
              });
              setName("");
              setEmail("");
              setTitle("");
              setCategory("");
              setImgLink("");
              setGoal("");
              setDetails("");
            }}
          >
            Submit
          </Button>
        </Form>
        <Routes>
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </>
  );
};
