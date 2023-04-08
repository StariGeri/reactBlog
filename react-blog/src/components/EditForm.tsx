import './componentStyles/EditForm.css';
import Button from './Button';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

interface BlogPost {
    title: string;
    body: string;
}

const EditForm = () => {
    const { id } = useParams<{ id: string }>();

    //fetching the blog post data from the api using the id
    const [fetchBlogPost, setFetchBlogPost] = useState<BlogPost>({ title: '', body: '' });
    const fetchBlogPostData = async () => {
        try {
            const response = await axios.get(`https://futurioninterview2.azurewebsites.net/BlogPost/${id}`);
            setFetchBlogPost(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchBlogPostData();
    }, [id]);

    const [title, setTitle] = useState<string>('');
    const [body, setBody] = useState<string>('');
    useEffect(() => {
        setTitle(fetchBlogPost.title);
        setBody(fetchBlogPost.body);
    }, [fetchBlogPost]);

    const navigate = useNavigate();

    const handleEdit = async () => {
        try {
            const response = await axios.put(`https://futurioninterview2.azurewebsites.net/BlogPost/${id}`, {
                title,
                body,
            });
            //console.log(response);
            navigate(`/blog/${id}`);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="editFormWrapper">
            <div className="editForm">
                <label>Title</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />

                <label>Content</label>
                <textarea value={body} onChange={(e) => setBody(e.target.value)} />
                <div className="formButtonContainer">
                    <Button isFilled={true} type="submit" text="Save" onPress={handleEdit} />
                    <Link to="/Admin">
                        <Button isOutlined={true} text="Discard" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default EditForm;
