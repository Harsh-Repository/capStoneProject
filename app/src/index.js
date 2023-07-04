import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import { BrowserRouter } from "react-router-dom";
import { store } from "./redux/store";
import { Provider } from "react-redux";

import "bootstrap/dist/css/bootstrap.min.css";

// import axios from "axios";

// //axios.defaults.baseURL = 'http://localhost:3001/api';
// axios.defaults.baseURL = "http://localhost:3001/api";
// let userData = JSON.parse(localStorage.getItem("userData"));
// let token;
// if (userData) {
//   token = userData.token;
// }

// //axios.defaults.headers.common['Authorization'] = {'Authorization': `Bearer ${token}`};
// axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
// axios.defaults.headers.post["Content-Type"] = "application/json";

// axios.interceptors.request.use(
//   (request) => {
//     //    console.log(request)

//     // Edit request config
//     return request;
//   },
//   (error) => {
//     //  console.log(error);
//     return Promise.reject(error);
//   }
// );

// axios.interceptors.response.use(
//   (response) => {
//     // Edit response config
//     //console.log(response);
//     return response;
//   },
//   (error) => {
//     console.log(error.response);
//     return Promise.reject(error);
//   }
// );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <Provider store={store}>
  //   <BrowserRouter>
  //     <NavScroll />
  //     <Routes>
  //       <Route path="/" element={<Home />} />
  //       <Route exact path="/login" element={<Login />} />
  //       <Route exact path="/signUp" element={<SignUp />} />
  //       <Route exact path="/about" element={<AboutUs />} />
  //       <Route exact path="/projects" element={<Projects />} />
  //       <Route exact path="/project/:id" element={<Project />} />
  //       <Route exact path="/create" element={<CreateProject />} />
  //       <Route exact path="/contributors" element={<Contributors />} />
  //       <Route exact path="/myProjects" element={<UserProjects />} />
  //       <Route exact path="/userProfile" element={<UserProfile />} />
  //       <Route
  //         render={function () {
  //           return <p>Not found</p>;
  //         }}
  //       />
  //     </Routes>
  //     <Footer />
  //   </BrowserRouter>
  // </Provider>

  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
