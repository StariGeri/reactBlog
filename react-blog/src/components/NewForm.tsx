// Form component where user can input new blog post data
import { useState } from 'react';
import axios from 'axios';
import './componentStyles/NewForm.css'
import Button from './Button';
import { Link } from 'react-router-dom';

interface FormProps {
    onSubmit: (newBlogPostId: number) => void;
}

const NewForm = ({ onSubmit }: FormProps) => {
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const response = await axios.post('/api/blog', { title, date, content });
        const newBlogPostId = response.data.id;
        onSubmit(newBlogPostId);
    };

    return (
        <div className="newFormWrapper">
            <form onSubmit={handleSubmit} className='newForm'>
                <label>
                    Title
                </label>
                <input type="text" value={title} onChange={event => setTitle(event.target.value)} />
                <label>
                    Date
                </label>
                <input type="text" value={date} onChange={event => setDate(event.target.value)} />

                <label>
                    Content
                </label>
                <textarea value={content} onChange={event => setContent(event.target.value)} />
                <div className="formButtonContainer">
                    <Button isFilled={true} type="submit" text="Add Post" />
                    <Link to="/Admin">
                        <Button isOutlined={true} text="Discard" />
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default NewForm;