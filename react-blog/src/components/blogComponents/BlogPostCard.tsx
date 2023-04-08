import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./BlogPostCard.css";
import Button from "../generalComponents/Button";
import { toast } from "react-toastify";

interface Props {
  title: string;
  date: string;
  id: number;
  isAdmin?: boolean;
  key?: number;
}

const BlogPostCard: React.FC<Props> = ({ title, date, id, isAdmin }) => {

  //send a notification when a post is deleted
  const notify = () => toast.error("Post Deleted, it's gone!", {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });

  // This function will delete the blog post from the database using axios
  const handleDelete = () => {
    //console.log("Delete button clicked");
    axios
      .delete(`https://futurioninterview2.azurewebsites.net/BlogPost/${id}`)
      .then((response) => {
        //console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
      notify();
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