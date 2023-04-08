import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
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
  // This function will delete the blog post from the database using axios
  const handleDelete = () => {
    console.log("Delete button clicked");
    axios
      .delete(`https://futurioninterview2.azurewebsites.net/BlogPost/${id}`)
      .then((response) => {
        //console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <li className="cardItem">
      <div className="card">
        <div className="cardContent">
          <h2 className="blogTitle">{title}</h2>
          <p className="blogDate">{date}</p>
          {isAdmin ? (
            <div className="adminButtons">
              <Link to={`/edit/${id}`}> {/* /edit/${id} This is where the id of the blog post will be passed to the Edit page */}
                <Button text="Edit" isOutlined={true} />
              </Link>
              <Link to={"/"}>
                <Button text="Delete" isDelete={true} onPress={handleDelete} />
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