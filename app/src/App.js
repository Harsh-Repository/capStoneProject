import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Home } from "./pages/home/home";
import AboutUs from "./pages/about/aboutUs";
import Projects from "./pages/projects/projects";
import { CreateProject } from "./pages/createProject/createProject";
import { Contributors } from "./pages/contributors/contributors";
import NavScroll from "./navbar/navbar";
import Footer from "./footer/footer";
import { UserProfile } from "./pages/userProfile/userProfile";
import Project from "./pages/projects/project";
import Login from "./pages/userProfile/loginPage";
import { useContext } from "react";
import { AuthContext } from "./authContext/AuthContext";

export default function App() {
  // const user = true;

  const { user } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <NavScroll />
      <Routes>
        {!user ? (
          <>
            <Route path="/" element={<Home />} />
            <Route exact path="/about" element={<AboutUs />} />
            <Route exact path="/projects" element={<Projects />} />
            <Route path="*" element={<Login />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Home />} />
            <Route exact path="/about" element={<AboutUs />} />
            <Route exact path="/projects" element={<Projects />} />
            <Route exact path="/project/:id" element={<Project />} />
            <Route exact path="/create" element={<CreateProject />} />
            <Route exact path="/contributors" element={<Contributors />} />
            <Route exact path="/userProfile" element={<UserProfile />} />
          </>
        )}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
