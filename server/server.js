// const express = require('express');
// const connectDB = require('./config/db');
// const cors = require('cors');
// const dotenv = require('dotenv');
// const path = require('path');

// // Load environment variables from .env file
// dotenv.config();

// const app = express();

// // Connect Database
// connectDB();

// // Init Middleware
// app.use(express.json());
// app.use(cors());

// // Serve static files from the uploads directory
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// // Define Routes
// app.use('/api/auth', require('./routes/auth'));
// app.use('/api/posts', require('./routes/posts'));
// // Ensure this route is defined in `routes/comments.js` and import the file correctly
// // app.use('/api/comments', require('./routes/comments'));

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => console.log(`Server started on port ${PORT}`));


const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');


// Load environment variables from .env file
dotenv.config();


const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json());
app.use(cors({
    origin: 'https://my-social-media-ovtl.vercel.app/' // Replace with your actual frontend URL
  }));
  

// Serve static files from the uploads directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Define Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/posts', require('./routes/posts'));
app.use('/api/comments', require('./routes/comments'));

app.get('/', (req, res) => {
    res.send('API is running...');
  });


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
