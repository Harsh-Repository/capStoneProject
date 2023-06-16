import React from "react";
import Table from "react-bootstrap/Table";
import "./contributors.css";
import { Col, Row, Button, Form } from "react-bootstrap";

export const Contributors = () => {
  return (
    <>
      <div className="contributors">
        <Row>
          <Col>
            <h1>Here are our contributors,</h1>
          </Col>
          <Col>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                style={{ width: "100%" }}
              />
              <Button variant="primary">Search</Button>
            </Form>
          </Col>
        </Row>
        <br />
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Sl. no</th>
              <th>Name</th>
              <th>Project Name</th>
              <th>Total Contribution (in USD)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>1263</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>2712</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
};
