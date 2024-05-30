import React, { useState, useEffect } from 'react';
import axios from '../../utils/axios';

const CommentList = ({ postId }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      const response = await axios.get(`/posts/${postId}/comments`);
      setComments(response.data);
    };
    fetchComments();
  }, [postId]);

  return (
    <div>
      <h3>Comments</h3>
      {comments.map((comment) => (
        <div key={comment._id}>
          <p><strong>{comment.author.username}</strong> {comment.content}</p>
        </div>
      ))}
    </div>
  );
};

export default CommentList;
