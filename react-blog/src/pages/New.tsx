import React from "react";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./pageStyles/New.css";
import NewForm from "../components/formComponents/NewForm";
import { toast } from "react-toastify";


const New = () => {

  const [blogPosts, setBlogPosts] = useState<number[]>([]);
  const navigate = useNavigate();

  //notification for new blog post
  const notify = () => toast.success("Yaay! New Post added!", {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });

  const handleNewBlogPost = (newBlogPostId: number) => {
    navigate(`/blog/${newBlogPostId}`);
    setBlogPosts([newBlogPostId, ...blogPosts]);
    notify();
  };

  return (
    <div className="newSection">
      <h1>Write a New Post</h1>
      <NewForm onSubmit={handleNewBlogPost} />
    </div>
  );
};

export default New;