import React, { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './componentStyles/CommentForm.css';
import Button from './Button';

interface Comment {
  userName: string;
  text: string;
  id?: number;
}

interface Props {
  onSubmit: (comment: Comment) => void;
}

const CommentForm: React.FC<Props> = ({ onSubmit }) => {
  const [userName, setUsername] = useState('');
  const [text, setText] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit({ userName, text });
    setUsername('');
    setText('');
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
    </form>
  );
};

export default CommentForm;
