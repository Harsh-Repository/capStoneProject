import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/home";
import AboutUs from "./pages/about/aboutUs";
import Projects from "./pages/projects/projects";
import { CreateProject } from "./pages/createProject/createProject";
import { Contributors } from "./pages/contributors/contributors";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./footer/footer";
import { UserProfile } from "./pages/userProfile/userProfile";
import { UserProjects } from "./pages/userProfile/userProjects";
import Project from "./pages/projects/project";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/about" element={<AboutUs />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/project/:id" element={<Project />} />
        <Route exact path="/create" element={<CreateProject />} />
        <Route exact path="/contributors" element={<Contributors />} />
        <Route exact path="/myProjects" element={<UserProjects />} />
        <Route exact path="/userProfile" element={<UserProfile />} />
        <Route
          render={function () {
            return <p>Not found</p>;
          }}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
