import React, { useState } from 'react';
import './componentStyles/CommentForm.css';
import Button from './Button';

interface Comment {
  author: string;
  text: string;
}

interface Props {
  onSubmit: (comment: Comment) => void;
}

const CommentForm: React.FC<Props> = ({ onSubmit }) => {
  const [author, setAuthor] = useState('');
  const [text, setText] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit({ author, text });
    setAuthor('');
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="commentForm">
      <input
        type="text"
        id="author"
        value={author}
        onChange={(event) => setAuthor(event.target.value)}
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
