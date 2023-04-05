import React from "react";
import "./CommentCard.css";

interface commentProps {
  userNames: string;
  comment: string;
}

const CommentCard: React.FC<commentProps> = ({ userNames, comment }) => {
  return (
    <div className="commentCard">
      <div className="userNames">{userNames}</div>
      <div className="comment">{comment}</div>
    </div>
  );
};

export default CommentCard;