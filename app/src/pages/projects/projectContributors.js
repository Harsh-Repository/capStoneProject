import React from "react";
import { Container, Table } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function ThisProjectContributors() {
  const [contributors, setContributors] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://capstoneproject-wgtb.onrender.com/api/v1/projectData/contributors/${id}`
        );
        setContributors(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [id]);

  const contributions = contributors.contribution || [];

  return (
    <>
      <Container>
        {contributions.length === 0 ? (
          <h5>Awaiting for you to be the first contributor &#x1F60D;</h5>
        ) : (
          <Table striped bordered hover variant="light">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Contribution</th>
              </tr>
            </thead>
            <tbody>
              {contributions.map((contribution, index) => (
                <tr key={index}>
                  <td>{contribution.name}</td>
                  <td>{contribution.emailAddress}</td>
                  <td>{contribution.contribute}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </Container>
    </>
  );
}
