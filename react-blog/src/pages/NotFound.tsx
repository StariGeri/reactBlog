import React from "react";
import { Link } from "react-router-dom";
import "./pageStyles/NotFound.css";
import Button from "../components/Button";

function NotFound() {
  return (
    <div className="notFoundSection">
      <h1>Ooops.. Page Not Found</h1>
      <Link to="/">
        <Button text="Go Home" isFilled={true} />
      </Link>
    </div>
  );
}

export default NotFound;
