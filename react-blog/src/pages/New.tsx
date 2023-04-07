import React from "react";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./pageStyles/New.css";
import NewForm from "../components/NewForm";



const New = () => {
  const [blogPosts, setBlogPosts] = useState<number[]>([]);
  const navigate = useNavigate();

  const handleNewBlogPost = (newBlogPostId: number) => {
    navigate(`/blog/${newBlogPostId}`);
    setBlogPosts([newBlogPostId, ...blogPosts]);
  };

  return (
    <div className="newSection">
      <h1>Write a New Post</h1>
      <NewForm onSubmit={handleNewBlogPost} />
    </div>
  );
};

export default New;