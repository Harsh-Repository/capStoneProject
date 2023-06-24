import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import IndividualProject from "./individualProject";

function Project() {
  const [projectDetails, setProjectDetails] = useState("");
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:3001/project/${id}`)
      .then((res) => setProjectDetails(res.data));
  });
  return (
    <>
      <IndividualProject
        key={projectDetails._id}
        id={projectDetails._id}
        imageLink={projectDetails.imageLink}
        title={projectDetails.title}
        details={projectDetails.details}
        name={projectDetails.name}
        goal={projectDetails.goal}
        email={projectDetails.emailAddress}
      />
    </>
  );
}

export default Project;
