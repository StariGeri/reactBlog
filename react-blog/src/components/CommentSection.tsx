import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import CommentForm from "../components/CommentForm";
import CommentCard from "./CommentCard";
import "./componentStyles/CommentSection.css";

interface Comment {
  userName: string;
  text: string;
  id?: number;
}

const CommentSection: React.FC = () => {
  //getting the id from the url we are on
  const { id } = useParams<{ id: string }>();


  //fetching the blog post data from the api using the id we fetched
  const [fetchComments, setFetchComments] = useState<Comment[]>([]);
  const fetchBlogPostData = async () => {
    try {
      const response = await axios.get(
        `https://futurioninterview2.azurewebsites.net/Comment/${id}`
      );
      setFetchComments(response.data.results);
      //console.log(response.data.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchBlogPostData();
  }, [id]);


  const handleSubmit = async (comment: Comment) => {
    await axios.post(`https://futurioninterview2.azurewebsites.net/Comment/${id}`, comment);
    fetchBlogPostData();
  };

  return (
    <div className="commentSection">
      <div className="commentSectionDivider"></div>
      <div className="commentTitleWrapper">
        <h1 className="commentTitle">Comments ({fetchComments.length})</h1>
      </div>
      <ul className="commentList">
        {fetchComments.map((comment) => (
          <li key={comment.id}>
            <CommentCard userName={comment.userName} comment={comment.text} />
          </li>
        ))}
      </ul>
      <h2 className="commentSubTitle">Write a comment</h2>
      <CommentForm onSubmit={handleSubmit} />
    </div>
  );
}
export default CommentSection;