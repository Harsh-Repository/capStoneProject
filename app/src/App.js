import React, { useState, useEffect } from "react";
// import { useState, useCallback, useEffect } from "react";
// import {Route, Routes,BrowserRouter,HashRouter as Router,useNavigate,useLocation} from "react-router-dom";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import { Home } from "./pages/home/home";
import AboutUs from "./pages/about/aboutUs";
import Projects from "./pages/projects/projects";
import { CreateProject } from "./pages/createProject/createProject";
import { Contributors } from "./pages/contributors/contributors";
import NavScroll from "./navbar/navbar";
import Footer from "./footer/footer";
import { UserProfile } from "./pages/userProfile/userProfile";
import { UserProjects } from "./pages/userProfile/userProjects";
import Project from "./pages/projects/project";
import Login from "./pages/userProfile/loginPage";
import SignUp from "./pages/userProfile/signUpPage";
// import axios from "axios";

export default function App() {
  //   const user = true;
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await fetch("http://localhost:3001/login", {
          method: "GET",
          credentials: "include",
        });

        if (response.ok) {
          const data = await response.json();
          setUser(data); // Set the user state to the received data
        } else {
          setUser(null); // Clear the user state if authentication fails
        }
      } catch (error) {
        console.error(error);
        setUser(null); // Clear the user state on error
      }
    };

    getUser();
  }, []);

  return (
    <BrowserRouter>
      <NavScroll user={user} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          exact
          path="/login"
          element={user ? <Navigate to="/" /> : <Login setUser={setUser} />}
        />
        <Route
          exact
          path="/signUp"
          element={user ? <Navigate to="/" /> : <SignUp />}
        />
        <Route exact path="/about" element={<AboutUs />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route
          exact
          path="/project/:id"
          element={user ? <Project /> : <Navigate to="/login" />}
        />
        <Route
          exact
          path="/create"
          element={user ? <CreateProject /> : <Navigate to="/login" />}
        />
        <Route
          exact
          path="/contributors"
          element={user ? <Contributors /> : <Navigate to="/login" />}
        />
        <Route
          exact
          path="/myProjects"
          element={user ? <UserProjects /> : <Navigate to="/login" />}
        />
        <Route
          exact
          path="/userProfile"
          element={user ? <UserProfile /> : <Navigate to="/login" />}
        />
        <Route
          render={function () {
            return <p>Page not found</p>;
          }}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
