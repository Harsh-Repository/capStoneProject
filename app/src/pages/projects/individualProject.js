// https://blog.logrocket.com/solve-react-useeffect-hook-infinite-loop-patterns/#:~:text=To%20get%20rid%20of%20your,useEffect%20on%20the%20first%20render.
import React, { useState, useEffect } from "react";
import {
  Container,
  Card,
  Row,
  Col,
  Button,
  Form,
  ProgressBar,
  Table,
} from "react-bootstrap";
import { Tab, Tabs } from "react-bootstrap";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function IndividualProject(props) {
  const [name, setName] = useState("");
  const [emailAddress, setEmail] = useState("");
  const [contribute, setContribute] = useState("");
  const { id } = useParams();
  const [contributors, setContributors] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/contributors");
        setContributors(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const now = 60;
  return (
    <>
      <Container className="mt-2">
        <Tabs
          defaultActiveKey="home"
          id="fill-tab-example"
          className="mb-3"
          fill
        >
          <Tab eventKey="home" title={props.title}>
            <Row>
              <Col>
                <Card.Img
                  variant="top"
                  src={props.imageLink}
                  className="projectImg"
                />
              </Col>
              <Col>
                <h1>{props.title},</h1>
                <div>{props.details}</div>
              </Col>
            </Row>
          </Tab>
          <Tab eventKey="profile" title="Author & Contributors">
            <h1>This Project is an initiative by,</h1>
            <br />
            <h5>Name: {props.name}</h5>
            <h5>Email: {props.email}</h5>
            <br />
            <h3>Below are the contributors for this project,</h3>
            <Container>
              <Table striped bordered hover variant="light">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Contribution</th>
                  </tr>
                </thead>
                <tbody>
                  {contributors.map((contributor) => (
                    <tr key={contributor._id}>
                      <td>{contributor.name}</td>
                      <td>{contributor.emailAddress}</td>
                      <td>{contributor.contribute}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Container>
          </Tab>
          <Tab eventKey="longer-tab" title="Funds Status">
            <h1>Target & Current status of this fund:</h1>
            <br />
            <div>
              <h5>Target: ${props.goal}</h5>
            </div>
            <div className="contributionStatus">
              <Row>
                <Col>
                  <h5>Current Status: </h5>
                  <ProgressBar
                    now={now}
                    label={`${now}%`}
                    style={{ height: "fit-content" }}
                  />
                </Col>
              </Row>
            </div>
            <div>
              <div>
                <h5>Contribute now: </h5>
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
                <Row>
                  <Col>
                    <Form.Label>Contribute (in USD):</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="In USD"
                      required
                      onChange={(e) => {
                        setContribute(e.target.value);
                      }}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col></Col>
                  <Col>
                    <Button
                      variant="success"
                      id="btnsubmit"
                      formMethod="POST"
                      onClick={(e) => {
                        e.preventDefault();
                        axios.post(
                          `http://localhost:3001/contributeProject/${id}`,
                          {
                            name,
                            emailAddress,
                            contribute,
                          }
                        );
                        setName("");
                        setEmail("");
                        setContribute("");
                      }}
                    >
                      Contribute
                    </Button>
                  </Col>
                </Row>
              </div>
            </div>
          </Tab>
        </Tabs>
      </Container>
    </>
  );
}
