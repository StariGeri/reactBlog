import React, { useState, useEffect } from "react";
import "./pageStyles/Blog.css";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import CommentSection from "../components/CommentSection";


interface blogProps {
    title: string;
    date: string;
    id: number;
    content: string;
}

const Blog: React.FC<blogProps> = ({ title, date, id, content }) => {

    //random image from picsum.photos
    const [image, setImage] = useState<string>("");

    const fetchImage = async () => {
        const response = await fetch("https://picsum.photos/600/400");
        const data = response.url;
        setImage(data);
    };

    useEffect(() => {
        fetchImage();
    }, []);

    return (
        <div className="blogSection">
            <div className="blogContainer">
                <div className="blogButtonWrapper">
                    <Link to="/">
                        <Button text="Back" isOutlined={true} />
                    </Link>
                </div>
                <div className="blogImgWrapper">
                    <img src={image} className="blogImg" />
                </div>
                <div className="blogContent">
                    <p className="blogPostDate">{date}</p>
                    <h2 className="blogPostTitle">{title}</h2>
                    <p className="blogText">{content}</p>
                </div>
            </div>
            <CommentSection />
        </div>
    );
}

export default Blog;
