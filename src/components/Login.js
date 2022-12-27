import React from "react";
import "../css/login.css";
import login_image from "../Images/Login-Image.jpg";
function Login() {
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
          <h3 className="login--logo_title">TheHome</h3>
        </div>

        <h3 className="login--title">
          Log<span>In</span>
        </h3>
        <div className="login--signup">
          <p>Can’t log in?</p>
          <a href="#">Sign up for account</a>
        </div>
        <form className="login--form">
          <div className="mb-3">
            <label
              htmlFor="login-email"
              className="form-label login--email_text"
            >
              Email Address
            </label>
            <input
              type="email"
              className="form-control login--email"
              id="login-email"
              aria-describedby="emailHelp"
              placeholder="Examples@gmail.com"
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
              id="login-password"
              placeholder="Enter Password"
            />
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
            <a href="" className="login--forgot_password">
              Forgot Password
            </a>
          </div>
          <div className="login--or">
            <hr />
            <h3>OR</h3>
            <hr />
          </div>

          <div className="login--buttons">
            <button className="login--google">
              <i className="fa-brands fa-google"></i>Log in with Google
            </button>
            <button className="login--facebook">
              <i className="fa-brands fa-facebook"></i>Log in with Facebook
            </button>
          </div>
          <div className="login--submit">
            <button className="submit login--submit_button">Log In</button>
          </div>
        </form>
      </div>
      <div className="login--right_side">
        <img src={login_image} alt="" className="login--image" />
      </div>
    </div>
  );
}

export default Login;
