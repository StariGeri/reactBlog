import { Link } from "react-router-dom";
import "./componentStyles/LoginForm.css";
import Button from "./Button";

function LoginForm() {
  return (
    <form className="loginForm">
      <div className="loginSubWrapper">
        <h2 className="loginSubtitle">Admin Login</h2>
      </div>
      <div className="loginInputWrapper">
        <label htmlFor="username">Username</label>
        <input type="username" name="username" id="username" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
      </div>
      <div className="loginButtonWrapper">
        <Link to={"/admin"}>
          <Button text="Login" isReverse={true} />
        </Link>
        <Link to={"/"}>
          <Button text="Back" isOutlined={true} />
        </Link>
      </div>
    </form>
  );
}
export default LoginForm;
