import axios from "axios";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Tab, Tabs } from "react-bootstrap";
import { useParams } from "react-router-dom";

function IndividualProject() {
  const [projectDetails, setProjectDetails] = useState("");
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:3001/project/${id}`)
      .then((res) => setProjectDetails(res.data));
  });
  return (
    <>
      <Container className="mt-2">
        {projectDetails &&
          projectDetails.map((project) => (
            <Tabs
              defaultActiveKey="profile"
              id="fill-tab-example"
              className="mb-3"
              fill
            >
              <Tab eventKey="home" title="Project Details">
                {project.imageLink}
                {project.details}
              </Tab>
              <Tab eventKey="profile" title="Author">
                Tab content for Profile
              </Tab>
              <Tab eventKey="longer-tab" title="Funds Status">
                Tab content for Loooonger Tab
              </Tab>
            </Tabs>
          ))}
      </Container>
    </>
  );
}

export default IndividualProject;
