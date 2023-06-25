// https://www.youtube.com/watch?v=7BwMeBZYVwg
import Table from "react-bootstrap/Table";
import "./contributors.css";
import { Col, Row, Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";

export const Contributors = () => {
  const [allContributors, setAllContributors] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3001/contributors")
      .then((res) => {
        setAllContributors(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

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
                placeholder="Search Project"
                className="me-2"
                aria-label="Search"
                style={{ width: "100%" }}
                onChange={(e) => setSearch(e.target.value)}
              />
            </Form>
          </Col>
        </Row>
        <br />
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Project Name</th>
              <th>Total Contribution (in USD)</th>
            </tr>
          </thead>
          <tbody>
            {allContributors
              .filter((project) => {
                return search.toLowerCase() === ""
                  ? project
                  : project.title.toLowerCase().includes(search);
              })
              /* .filter((project) =>
                project.contribution.filter((contributor) => {
                  return search.toLowerCase() === ""
                    ? contributor
                    : contributor.name.toLowerCase().includes(search);
                })
              ) */
              .map((project) =>
                project.contribution.map((contributor, index) => (
                  <tr key={index}>
                    <td>{contributor.name}</td>
                    <td>{project.title}</td>
                    <td>{contributor.contribute}</td>
                  </tr>
                ))
              )}
          </tbody>
        </Table>
      </div>
    </>
  );
};
