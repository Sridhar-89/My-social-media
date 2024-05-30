// src/components/posts/CreatePost.js
import React, { useState } from 'react';
import axios from '../../utils/axios';
import Modal from '../Modal';
import styles from './CreatePost.module.css';

const CreatePost = ({ fetchPosts, isOpen, onClose }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [error, setError] = useState('');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    if (image) formData.append('image', image);

    try {
      await axios.post('/posts', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setTitle('');
      setContent('');
      setImage(null);
      setPreview(null);
      if (fetchPosts) {
        await fetchPosts(); // Ensure posts are fetched after creation
      }
      onClose();
    } catch (err) {
      setError('Error creating post');
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className={styles.createPostContainer}>
        <h2>Create Post</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={styles.input}
            required
          />
          <textarea
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className={styles.input}
            required
          ></textarea>
          <input
            type="file"
            onChange={handleImageChange}
          />
          {preview && <img src={preview} alt="Preview" className={styles.preview} />}
          {error && <p>{error}</p>}
          <button type="submit" className={styles.button}>Create Post</button>
        </form>
      </div>
    </Modal>
  );
};

export default CreatePost;
