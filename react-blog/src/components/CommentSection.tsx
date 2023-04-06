import React, { useState } from "react";
import CommentForm from "../components/CommentForm";
import CommentCard from "./CommentCard";
import "./componentStyles/CommentSection.css";

interface Comment {
  author: string;
  text: string;
}

const CommentSection: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);

  const handleSubmit = (comment: Comment) => {
    setComments([...comments, comment]);
  };
  return (
    <div className="commentSection">
      <div className="commentSectionDivider"></div>
      <div className="commentTitleWrapper">
        <h1 className="commentTitle">Comments</h1>
      </div>
      <ul className="commentList">
        {comments.map((comment, index) => (
          <li key={index}>
            <CommentCard userName={comment.author} comment={comment.text} />
          </li>
        ))}
      </ul>
      <h2 className="commentSubTitle">Write a comment</h2>
      <CommentForm onSubmit={handleSubmit} />
    </div>
  );
}
export default CommentSection;