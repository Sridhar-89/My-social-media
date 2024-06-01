// // src/components/posts/PostItem.js
// import React, { useState } from 'react';
// import axios from '../../utils/axios';
// import { Link } from 'react-router-dom';
// import styles from './PostItem.module.css';

// const PostItem = ({ post, onDelete }) => {
//   const [likes, setLikes] = useState(post.likes.length);
//   const [liked, setLiked] = useState(false);
//   const [error, setError] = useState('');

//   const handleLike = async () => {
//     try {
//       await axios.post(`/posts/${post._id}/like`);
//       setLikes(likes + 1);
//       setLiked(true);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const handleDelete = async () => {
//     try {
//       await axios.delete(`/posts/${post._id}`);
//       onDelete(post._id); // Invoke onDelete to update the parent state
//     } catch (err) {
//       console.error(err);
//       setError('Failed to delete post');
//     }
//   };

//   const baseUrl = "http://localhost:5000"; // Base URL for the backend server
//   const imageUrl = post.image ? `${baseUrl}/uploads/${post.image}` : null;

//   return (
//     <div className={styles.postItem}>
//       <div className={styles.postHeader}>
//         {/* <img src={`/uploads/${post.author.avatar}`} alt={post.author.username} className={styles.avatar} /> */}
//         <div className={styles.authorName}>{post.author.username}</div>
//       </div>
//       <h3>{post.title}</h3>
//       <p>{post.content}</p>
//       {imageUrl && <img src={imageUrl} alt={post.title} className={styles.postImage} />}
//       <div className={styles.postActions}>
//         <button onClick={handleLike} disabled={liked} className={styles.likeButton}>
//           <i className="fas fa-heart"></i> Like ({likes})
//         </button>
//         <Link to={`/posts/${post._id}`} className={styles.commentButton}>
//           <i className="fas fa-comment"></i> Comments
//         </Link>
//         <button onClick={handleDelete} className={styles.deleteButton}>
//           <i className="fas fa-trash"></i> Delete
//         </button>
//       </div>
//       {error && <p className={styles.error}>{error}</p>}
//     </div>
//   );
// };

// export default PostItem;


// src/components/posts/PostItem.js
// src/components/posts/PostItem.js
// src/components/posts/PostItem.js
// src/components/posts/PostItem.js
// import React, { useState } from 'react';
// import axios from '../../utils/axios';
// import { Link } from 'react-router-dom';
// import styles from './PostItem.module.css';

// const PostItem = ({ post, onDelete, onEdit }) => {
//   const [likes, setLikes] = useState(post.likes.length);
//   const [liked, setLiked] = useState(false);
//   const [error, setError] = useState('');
//   const [isEditing, setIsEditing] = useState(false);
//   const [editedTitle, setEditedTitle] = useState(post.title);
//   const [editedContent, setEditedContent] = useState(post.content);
//   const [editedImage, setEditedImage] = useState(null);
//   const [preview, setPreview] = useState(post.image ? `http://localhost:5000/uploads/${post.image}` : null);

//   const handleLike = async () => {
//     try {
//       await axios.post(`/posts/${post._id}/like`);
//       setLikes(likes + 1);
//       setLiked(true);
//     } catch (err) {
//       console.error('Error liking post:', err);
//     }
//   };

//   const handleDelete = async () => {
//     try {
//       await axios.delete(`/posts/${post._id}`);
//       onDelete(post._id);
//     } catch (err) {
//       console.error('Error deleting post:', err);
//       setError('Failed to delete post');
//     }
//   };

//   const handleEdit = async () => {
//     const formData = new FormData();
//     formData.append('title', editedTitle);
//     formData.append('content', editedContent);
//     if (editedImage) {
//       formData.append('image', editedImage);
//     }

//     try {
//       const response = await axios.put(`/posts/${post._id}`, formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       onEdit(response.data); // Update the parent state
//       setIsEditing(false);
//     } catch (err) {
//       console.error('Error editing post:', err);
//       setError('Failed to edit post');
//     }
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     setEditedImage(file);
//     setPreview(URL.createObjectURL(file));
//   };

//   const baseUrl = "http://localhost:5000"; // Base URL for the backend server
//   const imageUrl = post.image ? `${baseUrl}/uploads/${post.image}` : null;

//   return (
//     <div className={styles.postItem}>
//       <div className={styles.postHeader}>
//         {/* <img src={`/uploads/${post.author.avatar}`} alt={post.author.username} className={styles.avatar} /> */}
//         <div className={styles.authorName}>{post.author.username}</div>
//       </div>
//       {isEditing ? (
//         <div className={styles.editForm}>
//           <input
//             type="text"
//             value={editedTitle}
//             onChange={(e) => setEditedTitle(e.target.value)}
//             className={styles.input}
//           />
//           <textarea
//             value={editedContent}
//             onChange={(e) => setEditedContent(e.target.value)}
//             className={styles.textarea}
//           />
//           <input
//             type="file"
//             onChange={handleImageChange}
//             className={styles.fileInput}
//           />
//           {preview && <img src={preview} alt="Preview" className={styles.previewImage} />}
//           <div className={styles.buttonGroup}>
//             <button onClick={handleEdit} className={styles.saveButton}>Save</button>
//             <button onClick={() => setIsEditing(false)} className={styles.cancelButton}>Cancel</button>
//           </div>
//         </div>
//       ) : (
//         <>
//           <h3>{post.title}</h3>
//           <p>{post.content}</p>
//           {imageUrl && <img src={imageUrl} alt={post.title} className={styles.postImage} />}
//           <div className={styles.postActions}>
//             <button onClick={handleLike} disabled={liked} className={styles.likeButton}>
//               <i className="fas fa-heart"></i> Like ({likes})
//             </button>
//             <Link to={`/posts/${post._id}`} className={styles.commentButton}>
//               <i className="fas fa-comment"></i> Comments
//             </Link>
//             <button onClick={() => setIsEditing(true)} className={styles.editButton}>
//               <i className="fas fa-edit"></i> Edit
//             </button>
//             <button onClick={handleDelete} className={styles.deleteButton}>
//               <i className="fas fa-trash"></i> Delete
//             </button>
//           </div>
//         </>
//       )}
//       {error && <p className={styles.error}>{error}</p>}
//     </div>
//   );
// };

// export default PostItem;




// src/components/posts/PostItem.js


import React, { useState, useEffect } from 'react';
import axios from '../../utils/axios';
import { Link } from 'react-router-dom';
import styles from './PostItem.module.css';

const PostItem = ({ post, onDelete, onEdit }) => {
  const [likes, setLikes] = useState(post.likes.length);
  const [liked, setLiked] = useState(post.likes.includes(post.author._id));
  const [error, setError] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(post.title);
  const [editedContent, setEditedContent] = useState(post.content);
  const [editedImage, setEditedImage] = useState(null);
  const [preview, setPreview] = useState(post.image ? `https://my-social-media-5nl5.onrender.com/uploads/${post.image}` : null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    try {
      const response = await axios.get(`/posts/${post._id}/comments`);
      setComments(response.data);
    } catch (err) {
      console.error('Error fetching comments:', err);
    }
  };

  const handleLike = async () => {
    try {
      await axios.post(`/posts/${post._id}/like`);
      setLikes(likes + (liked ? -1 : 1));
      setLiked(!liked);
    } catch (err) {
      console.error('Error liking post:', err);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${post._id}`);
      onDelete(post._id);
    } catch (err) {
      console.error('Error deleting post:', err);
      setError('Failed to delete post');
    }
  };

  const handleEdit = async () => {
    const formData = new FormData();
    formData.append('title', editedTitle);
    formData.append('content', editedContent);
    if (editedImage) {
      formData.append('image', editedImage);
    }

    try {
      const response = await axios.put(`/posts/${post._id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      onEdit(response.data); // Update the parent state
      setIsEditing(false);
    } catch (err) {
      console.error('Error editing post:', err);
      setError('Failed to edit post');
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setEditedImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`/posts/${post._id}/comments`, { content: newComment });
      setComments([response.data, ...comments]);
      setNewComment('');
    } catch (err) {
      console.error('Error adding comment:', err);
      setError('Failed to add comment');
    }
  };

  const baseUrl = "https://my-social-media-5nl5.onrender.com"; // Base URL for the backend server
  const imageUrl = post.image ? `${baseUrl}/uploads/${post.image}` : null;

  return (
    <div className={styles.postItem}>
      <div className={styles.postHeader}>
        {/* <img src={`/uploads/${post.author.avatar}`} alt={post.author.username} className={styles.avatar} /> */}
        <div className={styles.authorName}>{post.author.username}</div>
      </div>
      {isEditing ? (
        <div className={styles.editForm}>
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
            className={styles.input}
          />
          <textarea
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
            className={styles.textarea}
          />
          <input
            type="file"
            onChange={handleImageChange}
            className={styles.fileInput}
          />
          {preview && <img src={preview} alt="Preview" className={styles.previewImage} />}
          <div className={styles.buttonGroup}>
            <button onClick={handleEdit} className={styles.saveButton}>Save</button>
            <button onClick={() => setIsEditing(false)} className={styles.cancelButton}>Cancel</button>
          </div>
        </div>
      ) : (
        <>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          {imageUrl && <img src={imageUrl} alt={post.title} className={styles.postImage} />}
          <div className={styles.postActions}>
            <button onClick={handleLike} className={styles.likeButton}>
              <i className="fas fa-heart"></i> {liked ? 'Unlike' : 'Like'} ({likes})
            </button>
            <Link to={`/posts/${post._id}`} className={styles.commentButton}>
              <i className="fas fa-comment"></i> Comments
            </Link>
            <button onClick={() => setIsEditing(true)} className={styles.editButton}>
              <i className="fas fa-edit"></i> Edit
            </button>
            <button onClick={handleDelete} className={styles.deleteButton}>
              <i className="fas fa-trash"></i> Delete
            </button>
          </div>
          <form onSubmit={handleCommentSubmit} className={styles.commentForm}>
            <input
              type="text"
              placeholder="Add a comment..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className={styles.input}
            />
            <button type="submit" className={styles.addCommentButton}>Post</button>
          </form>
          <div className={styles.comments}>
            {comments.map(comment => (
              <div key={comment._id} className={styles.comment}>
                <div className={styles.commentHeader}>
                  <strong>{comment.author.username}</strong> - <span>{new Date(comment.timestamp).toLocaleString()}</span>
                </div>
                <div className={styles.commentContent}>{comment.content}</div>
              </div>
            ))}
          </div>
        </>
      )}
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default PostItem;

