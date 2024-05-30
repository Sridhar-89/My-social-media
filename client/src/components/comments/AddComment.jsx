import React, { useState } from 'react';
import axios from '../../utils/axios';

const AddComment = ({ postId }) => {
  const [content, setContent] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`/posts/${postId}/comments`, { content });
      setContent('');
    } catch (err) {
      setError('Error adding comment');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a comment"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      {error && <p>{error}</p>}
      <button type="submit">Comment</button>
    </form>
  );
};

export default AddComment;
