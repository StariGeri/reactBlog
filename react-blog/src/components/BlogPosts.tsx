import React, { useState } from "react";
import BlogPostCard from "./BlogPostCard";
import Button from "./Button";
import { Link } from "react-router-dom";

import "./componentStyles/BlogPosts.css";

interface BlogPostProps {
    title: string;
    date: string;
}

interface BlogListProps {
    posts: BlogPostProps[];
    isAdmin?: boolean;
}

const BlogPosts: React.FC<BlogListProps> = ({ posts, isAdmin }) => {
    const [postsPerPage, setPostsPerPage] = useState<number>(2);
    const [currentPage, setCurrentPage] = useState<number>(1);

    const totalPages = Math.ceil(posts.length / postsPerPage);

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    const handlePostsPerPageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setPostsPerPage(Number(event.target.value));
        setCurrentPage(1);
    };

    const startIndex = (currentPage - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    const currentPosts = posts.slice(startIndex, endIndex);

    return (
        <div>
            {isAdmin ?
                <div className="dropdownContainer">
                    <select className="paginateDropdown" id="postsPerPage" value={postsPerPage} onChange={handlePostsPerPageChange}>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={5}>5</option>
                        <option value={10}>10</option>
                    </select>
                    <Link to="/new">
                        <Button text="+ New" isAddNew={true} />
                    </Link>
                </div> :
                <div className="dropdownContainer">
                    <select className="paginateDropdown" id="postsPerPage" value={postsPerPage} onChange={handlePostsPerPageChange}>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={5}>5</option>
                        <option value={10}>10</option>
                    </select>
                </div>//if isAdmin is false (or not set) the New button won't be rendered
            }
            {currentPosts.map((post, index) => (
                //if isAdmin is true, then the admin buttons will be rendered
                (isAdmin) ? <BlogPostCard id={index} key={index} title={post.title} date={post.date} isAdmin={true} /> : <BlogPostCard id={index} key={index} title={post.title} date={post.date} />
            ))}
            <div className="pageNumbers">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (pageNumber) => (
                        <button
                            key={pageNumber}
                            onClick={() => handlePageChange(pageNumber)}
                            disabled={currentPage === pageNumber}
                        >
                            {pageNumber}
                        </button>
                    )
                )}
            </div>
        </div>
    );
};

export default BlogPosts;
