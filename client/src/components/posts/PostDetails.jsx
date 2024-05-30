import React, { useState, useEffect } from 'react';
import axios from '../../utils/axios';
import { useParams } from 'react-router-dom';
import CommentList from '../comments/CommentList';
import AddComment from '../comments/AddComment';

const PostDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const response = await axios.get(`/posts/${id}`);
      setPost(response.data);
    };
    fetchPost();
  }, [id]);

  if (!post) return <p>Loading...</p>;

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      {post.image && <img src={post.image} alt={post.title} />}
      <CommentList postId={post._id} />
      <AddComment postId={post._id} />
    </div>
  );
};

export default PostDetails;
