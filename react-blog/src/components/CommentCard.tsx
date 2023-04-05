import React from "react";
import "./componentStyles/CommentCard.css";

interface commentProps {
  userName: string;
  comment: string;
}

const CommentCard: React.FC<commentProps> = ({ userName, comment }) => {
  return (
    <div className="commentCard">
      <h2 className="userName">{userName}</h2>
      <p className="comment">{comment}</p>
      <div className="commentDivider"></div>
    </div>
  );
};

export default CommentCard;