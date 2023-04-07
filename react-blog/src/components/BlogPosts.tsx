import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
//components
import "./componentStyles/BlogPosts.css";
import BlogPostCard from "./BlogPostCard";
import Button from "./Button";

//interface for the fetched posts
interface BlogPost {
    id: number;
    title: string;
    body: string;
    createdAt: string;
}
//if the component is being used in the admin page, the isAdmin prop is passed in
interface displayProps {
    isAdmin?: boolean;
}

const BlogPosts: React.FC<displayProps> = ({ isAdmin }) => {
    //state for the fetched posts
    const [posts, setPosts] = useState<BlogPost[]>([]);
    //states for pagination
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [pageSize, setPageSize] = useState<number>(3);
    const [totalPages, setTotalPages] = useState<number>(0);

    //fetching the posts using axios
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get(
                    `https://futurioninterview2.azurewebsites.net/BlogPost`
                );
                setPosts(response.data.results);
                //console.log(response.data);//for debugging purposes
                setTotalPages(Math.ceil(response.data.totalCount / pageSize));
            } catch (error) {
                console.error(error);
            }
        };

        fetchPosts();
    }, [currentPage, pageSize]);

    //pagination logic
    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    const handlePageSizeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setPageSize(Number(event.target.value));
        setCurrentPage(1);
    };

    //formatting the fetched createdAt date
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString();
    };

    return (
        <div>
            {/*depending on the isAdmin bool, the NEW button is displayed too*/}
            {isAdmin ?
                <div className="dropdownContainer">
                    <select value={pageSize} onChange={handlePageSizeChange} className="paginateDropdown">
                        <option value="3">3</option>
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="20">20</option>
                    </select>
                    <Link to="/new">
                        <Button text="+ New" isAddNew={true} />
                    </Link>
                </div> : <div className="dropdownContainer">
                    <select value={pageSize} onChange={handlePageSizeChange} className="paginateDropdown">
                        <option value="3">3</option>
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="20">20</option>
                    </select>
                </div>}
            {/*mapping the fetched posts to the BlogPostCard component*/}
            {posts.map((post) => (
                <BlogPostCard key={post.id} id={post.id} title={post.title} date={formatDate(post.createdAt)} />
            ))}
            {/*pagination buttons*/}
            <div className="pageNumbers">
                {[...Array(totalPages)].map((_, index) => (
                    <button key={index} onClick={() => handlePageChange(index + 1)} disabled={currentPage === index + 1} className="">
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default BlogPosts;