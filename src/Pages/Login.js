import { useEffect, useState } from "react";
import {
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
  Navigate,
  Outlet,
} from "react-router-dom";
import "../styles/css/Login.css";

function Login(props) {
  const [credentialIsWrong, setCredentialsIsWrong] = useState(false);

  const [passCheckFail, setPassCheckFail] = useState(false);

  const password = "98Aqw#@75"; // taking password as constant as we dont't have db integration.
  const userId = 1; // taking userId as constant as we dont't have db integration.

  let navigate = useNavigate();


  const passwordVaidator = (e) => {
    const pass = e.currentTarget.value;
    const valShort = pass.toLowerCase().trim();
    if (valShort.length > 0 && valShort.length < 8) {
      setPassCheckFail(true);
    } else {
      setPassCheckFail(false);
    }
  };

  const LoginChecker = (e) => {
    e.preventDefault();

    let formData = new FormData(e.currentTarget);
    let userIdF = formData.get("userId");
    let passwordF = formData.get("password");

    if (userIdF.length !== 0 && passwordF !== 0) {
      if (
        Number(userIdF) === userId &&
        passwordF.trim().toLowerCase() === password.trim().toLowerCase()
      ) {
        setCredentialsIsWrong(false);
        props.setUserId(userId);
        localStorage.setItem('userIdd', userId)
        alert('Login Successfull :)')
        navigate("dashboard",{state:{iuserId:userIdF}});
      } else {
        setCredentialsIsWrong(true);
      }
    }
  };

  return (
    <div className="wrapperOut">
      <div className="wrapper">
        <form onSubmit={LoginChecker}>
          <h1>Hello Again!</h1>
          {/* <p>Welcome back you've been missed!</p> */}
          <input name="userId" type="text" placeholder="Enter User Id" />
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            onKeyUp={passwordVaidator}
          ></input>
          <button type="submit">Login</button>
        </form>

        {credentialIsWrong && (
          <h5 style={{ color: "red" }}>
            Wrong UserId or passoword, Kindly check again!
          </h5>
        )}
        {passCheckFail && (
          <h5>
            Kindly follow the rules for Password -
            <ol>
              <li>Password must be atleast 8 characters.</li>
              {/* <li>Password must includes atleast one Number between 0-9.</li> */}
            </ol>
          </h5>
        )}
      </div>
    </div>
  );
}

export default Login;
