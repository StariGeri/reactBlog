import React from "react";
import { Link } from "react-router-dom"; // react-router-dom is needed to use routing when clicking the button of the blog post card
import "./BlogPostCard.css";
import Button_basic from "./Button_basic";

interface Props {
  title: string;
  date: string;
  id: number;
}

const BlogPostCard: React.FC<Props> = ({ title, date, id }) => {
  return (
    <li className="cardItem">
      <div className="card">
        <div className="cardContent">
          <h2 className="blogTitle">{title}</h2>
          <p className="blogDate">{date}</p>
          <Link to={`/blog/${id}`}>
            <Button_basic text="Read" />
          </Link>
        </div>
      </div>
    </li>
  );
};

export default BlogPostCard;
