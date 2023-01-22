import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/Signup.css";
import login_image from "../Images/Login-Image.jpg";
import { useNavigate } from "react-router-dom";

function Signup(props) {
  const navigate = useNavigate();

  const backHome = () => {
    navigate("/");
  };

  const [state, setState] = useState({
    email: "",
    password: "",
    cPassword: "",
  });

  const [passMatch, setPassMatch] = useState(true);

  useEffect(() => {
    validatePassword();
  }, [state]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const validatePassword = () => {
    state.password === state.cPassword
      ? setPassMatch(true)
      : setPassMatch(false);
  };

  const createAccount = () => {
    console.log("createAccount");
    validatePassword();
  };
  return (
    <div className="login">
      <div className="login--left_side">
        <div className="login--logo">
          <svg
            width="40"
            height="35"
            viewBox="0 0 40 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M35.9363 13.5484L40 17.0032L37.1846 19.3968L20 4.7871L2.8154 19.3968L0 17.0032L20 0L30.6242 9.03226V4.51613H35.9363V13.5484ZM20 7.99355L35.9363 21.5194V35H4.06374V21.5194L20 7.99355ZM25.3121 32.7419V21.4516H14.6879V32.7419H25.3121Z"
              fill="black"
            />
          </svg>
          <Link to="/">
            <h3 className="login--logo_title"> TheHome</h3>
          </Link>
        </div>

        <h3 className="login--title">
          Sign<span>Up</span>
        </h3>
        <form className="login--form">
          <div className="mb-3">
            <label
              htmlFor="login-email"
              className="form-label login--email_text"
            >
              Email Address
            </label>
            <input
              aria-label="Email"
              type="email"
              className="form-control login--email"
              id="email"
              placeholder="Enter the email"
              value={state.email}
              onChange={handleChange}
              aria-required="true"
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="login-password"
              className="form-label login--password_text"
            >
              Password
            </label>
            <input
              type="password"
              className="form-control login--password"
              id="password"
              placeholder="Enter Password"
              value={state.password}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="login-password"
              className="form-label login--password_text"
            >
              Confirm Password
            </label>
            <input
              type="cPassword"
              className={`form-control login--password ${
                passMatch ? "" : "input-error-border"
              }`}
              id="cPassword"
              placeholder="Confirm Password"
              onChange={handleChange}
              value={state.cPassword}
            />
          </div>
          <div className="input-error">
            {state.password !== state.cPassword ? "" : ""}
          </div>
          <div className="input-error">
            {passMatch ? "" : "Error: Passwords do not match"}
          </div>
          <div className="login--password_edit">
            <label className="login--switch_label">
              <div className="login--switch">
                <input
                  className="login--switch_state"
                  type="checkbox"
                  name="check"
                  value="check"
                />
                <div className="login--switch_indicator"></div>
              </div>
              <div className="login--switch_label_text">Remember me</div>
            </label>
            <a href="/" className="login--forgot_password">
              Forgot Password
            </a>
          </div>
          <div className="login--submit">
            <button className="submit login--submit_button" onClick={backHome}>
              Sign up
            </button>
          </div>
        </form>
      </div>
      <div className="login--right_side">
        <img src={login_image} alt="" className="login--image" />
      </div>
    </div>
  );
}

export default Signup;
