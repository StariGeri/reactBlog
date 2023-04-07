import React from "react";
import { Link } from "react-router-dom"; // react-router-dom is needed to use routing when clicking the button of the blog post card
import "./componentStyles/BlogPostCard.css";
import Button from "./Button";

interface Props {
  title: string;
  date: string;
  id: number;
  isAdmin?: boolean;
  key?: number;
}

const BlogPostCard: React.FC<Props> = ({ title, date, id, isAdmin }) => {
  return (
    <li className="cardItem">
      <div className="card">
        <div className="cardContent">
          <h2 className="blogTitle">{title}</h2>
          <p className="blogDate">{date}</p>
          {isAdmin ? (
            <div className="adminButtons">
              <Link to={`/edit`}> {/* /edit/${id} This is where the id of the blog post will be passed to the Edit page */}
                <Button text="Edit" isOutlined={true} />
              </Link>
              <Link to={`/delete/${id}`}>
                <Button text="Delete" isDelete={true} />
              </Link>
            </div>
          ) : (<Link to={`/blog/${id}`}>
            <Button text="Read" isFilled={true} />
          </Link>)}
        </div>
      </div>
    </li>
  );
};

export default BlogPostCard;