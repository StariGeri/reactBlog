import { Link } from "react-router-dom";
import "./Logo.css";

function Logo() {
  return (
    <Link to="/" className="logoLink">
      <h1 className="logo">DevBlog</h1>
    </Link>
  );
}

export default Logo;
