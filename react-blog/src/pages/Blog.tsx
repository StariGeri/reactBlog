import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Button from "../components/generalComponents/Button";
import CommentSection from "../components/commentComponents/CommentSection";
import "./pageStyles/Blog.css";

function Blog() {
    //getting the id from the url we are on
    const { id } = useParams<{ id: string }>();

    //getting a random image from picsum
    const [image, setImage] = useState<string>("");
    const fetchImage = async () => {
        const response = await fetch("https://picsum.photos/600/400");
        const data = response.url;
        setImage(data);
    };

    useEffect(() => {
        fetchImage();
    }, []);

    //fetching the blog post data from the api using the id we fetched
    const [fetchBlogPost, setFetchBlogPost] = useState<any>({});
    const fetchBlogPostData = async () => {
        try {
            const response = await axios.get(
                `https://futurioninterview2.azurewebsites.net/BlogPost/${id}`
            );
            setFetchBlogPost(response.data);
            //console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchBlogPostData();
    }, [id]);

    //formatting the fetched createdAt date
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString();
    };

    return (
        <div className="blogSection">
            <div className="blogContainer">
                <div className="blogButtonWrapper">
                    <Link to="/">
                        <Button text="Back" isOutlined={true} />
                    </Link>
                </div>
                <div className="blogImgWrapper">
                    <img src={image} className="blogImg" alt="blog post" />
                </div>
                <div className="blogContent">
                    <p className="blogPostDate">{formatDate(fetchBlogPost.createdAt)}</p>
                    <h2 className="blogPostTitle">{fetchBlogPost.title}</h2>
                    <p className="blogText">{fetchBlogPost.body}</p>
                </div>
            </div>
            <CommentSection />
        </div>
    );
}

export default Blog;
