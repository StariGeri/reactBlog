import React, { useState } from 'react';
import './CommentForm.css';
import Button from '../generalComponents/Button';
//react-toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface Comment {
  userName: string;
  text: string;
  id?: number;
}

interface Props {
  onSubmit: (comment: Comment) => void;
}

const CommentForm: React.FC<Props> = ({ onSubmit }) => {

  const notify = () => toast.success('Comment Submitted!', {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });

  const [userName, setUsername] = useState('');
  const [text, setText] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit({ userName, text });
    setUsername('');
    setText('');
    notify();
  };


  return (
    <form onSubmit={handleSubmit} className="commentForm">
      <input
        type="text"
        id="author"
        value={userName}
        onChange={(event) => setUsername(event.target.value)}
        required
        placeholder='Username'
      />
      <textarea
        id="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
        required
        placeholder='Message'
      />
      <Button text="Submit" isFilled type="submit" />
      <ToastContainer />
    </form>
  );
};

export default CommentForm;
