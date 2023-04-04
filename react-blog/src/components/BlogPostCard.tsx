import React from "react";
import { Link } from "react-router-dom"; // react-router-dom is needed to use routing when clicking the button of the blog post card
import "./BlogPostCard.css";

interface BlogPostCardProps {
  title: string;
  date: string;
}

function BlogPostCard(props: BlogPostCardProps) {

  return (
    <div className="blogPostCard">
      <div className="blogPostCard__content">
        <h1 className="blogPostCard__title">{props.title}</h1>
        <p className="blogPostCard__date">{props.date}</p>
        <Link to="/blogpost">
          <button className="blogPostCard__button">Read more</button>
        </Link>
      </div>
    </div>
  );
}

export default BlogPostCard;
