import React from "react";
import "./Admin.css";
import CommentCard from "../components/CommentCard";

function Admin() {
  return (
    <div className="adminSection">
      <CommentCard
        userNames="John Doe"
        comment="Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
      />
      <CommentCard
        userNames="John Snow"
        comment="Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
      />
    </div>
  );
}

export default Admin;
