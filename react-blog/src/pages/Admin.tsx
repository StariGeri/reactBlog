import "./pageStyles/Admin.css";
import CommentCard from "../components/CommentCard";

function Admin() {
  return (
    <div className="adminSection">
      <CommentCard
        userName="John Doe"
        comment="Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
      />
      <CommentCard
        userName="John Snow"
        comment="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
      />
    </div>
  );
}

export default Admin;
