import React from "react";
import { Table, Row, Col } from "react-bootstrap";
import "./userProfile.css";

export const UserProfile = () => {
  return (
    <>
      <h1>Personal Details</h1>
      <br />
      <div className="userDetails">
        <Table>
          <Row>
            <Col>First Name:</Col>
            <Col>Mahendra</Col>
          </Row>
          <Row>
            <Col>Last Name:</Col>
            <Col>Singh Dhoni</Col>
          </Row>
          <Row>
            <Col>Email ID:</Col>
            <Col>msdhoni@msd.com</Col>
          </Row>
        </Table>
      </div>
      <br />
    </>
  );
};
