import React from "react";
import axios from "axios";
import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { storeUser } from "../redux/userSlice";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userMessage, setUserMessage] = useState("");
  //   const dispatch = useDispatch();
  //   const checkLoggedIn = useSelector((state) => state.users.userData);

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          axios
            .post("http://localhost:3001/login", {
              username: username,
              password: password,
            })
            .then((res) =>
              res.data.success === true
                ? (window.location.href = "/")
                : setUserMessage(res.data.message)
            );
        }}
      >
        <input
          type="username"
          placeholder="Name"
          className="form-control"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          className="form-control"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <br />
        <input type="submit" value="Login" className="btn btn-primary" />
      </form>
      <p className="forgot-password text-right">
        Not a registered user? <a href="/signUp">signUp?</a>
      </p>
      <p>{userMessage}</p>
    </>
  );

  //   if (checkLoggedIn) {
  //     return (window.location.href = "/");
  //   } else {
  //     return (
  //       <form>
  //         <h3>Sign In</h3>

  //         <div className="mb-3">
  //           <label>Username</label>
  //           <input
  //             type="username"
  //             className="form-control"
  //             placeholder="Enter username"
  //             value={username}
  //             onChange={(e) => {
  //               setUsername(e.target.value);
  //             }}
  //           />
  //         </div>

  //         <div className="mb-3">
  //           <label>Password</label>
  //           <input
  //             type="password"
  //             className="form-control"
  //             placeholder="Enter password"
  //             value={password}
  //             onChange={(e) => {
  //               setPassword(e.target.value);
  //             }}
  //           />
  //         </div>

  //         <div className="mb-3">
  //           <div className="custom-control custom-checkbox">
  //             <input
  //               type="checkbox"
  //               className="custom-control-input"
  //               id="customCheck1"
  //             />
  //             <label className="custom-control-label" htmlFor="customCheck1">
  //               Remember me
  //             </label>
  //           </div>
  //         </div>

  //         <div className="d-grid">
  //           <button
  //             type="submit"
  //             className="btn btn-primary"
  //             onClick={(e) => {
  //               e.preventDefault();
  //               axios
  //                 .post("http://localhost:3001/login", {
  //                   username: username,
  //                   password: password,
  //                 })
  //                 .then((res) => {
  //                   if (res.data.success === true) {
  //                     dispatch(storeUser({ username: username }));
  //                     window.location.href = "/";
  //                   } else {
  //                     setUserMessage(res.data.message);
  //                   }
  //                 });
  //             }}
  //           >
  //             Submit
  //           </button>
  //         </div>
  //         <p>{userMessage}</p>
  //       </form>
  //     );
  //   }
}
