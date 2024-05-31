// // const express = require('express');
// // const connectDB = require('./config/db');
// // const cors = require('cors');
// // const dotenv = require('dotenv');
// // const path = require('path');

// // // Load environment variables from .env file
// // dotenv.config();

// // const app = express();

// // // Connect Database
// // connectDB();

// // // Init Middleware
// // app.use(express.json());
// // app.use(cors());

// // // Serve static files from the uploads directory
// // app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// // // Define Routes
// // app.use('/api/auth', require('./routes/auth'));
// // app.use('/api/posts', require('./routes/posts'));
// // // Ensure this route is defined in `routes/comments.js` and import the file correctly
// // // app.use('/api/comments', require('./routes/comments'));

// // const PORT = process.env.PORT || 5000;

// // app.listen(PORT, () => console.log(`Server started on port ${PORT}`));


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

  

// // Serve static files from the uploads directory
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// // Define Routes
// app.use('/api/auth', require('./routes/auth'));
// app.use('/api/posts', require('./routes/posts'));
// app.use('/api/comments', require('./routes/comments'));

// app.get('/', (req, res) => {
//     res.send('API is running...');
//   });

// const PORT = process.env.PORT || 4000;

// app.listen(PORT, () => console.log(`Server started on port ${PORT}`));


// const express = require('express');
// const connectDB = require('./config/db');
// const cors = require('cors');
// const dotenv = require('dotenv');
// const path = require('path');
// const { createProxyMiddleware } = require('http-proxy-middleware');

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
// app.use('/api/comments', require('./routes/comments'));

// // Proxy requests to the Vercel frontend
// app.use('/', createProxyMiddleware({
//   target: 'https://my-social-media-pkpo.vercel.app/',
//   changeOrigin: true,
//   pathRewrite: {
//     '^/': '/', // rewrite path
//   },
// }));

// const PORT = process.env.PORT || 4000;
// app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
// const express = require('express');
// const connectDB = require('./config/db');
// const cors = require('cors');
// const dotenv = require('dotenv');
// const path = require('path');
// const { createProxyMiddleware } = require('http-proxy-middleware');

// dotenv.config();

// const app = express();

// // Connect Database
// connectDB();

// // Init Middleware
// app.use(express.json());

// // CORS configuration
// const corsOptions = {
//   origin: 'https://my-social-media-eight.vercel.app', // Replace with your actual frontend URL
//   optionsSuccessStatus: 200,
// };
// app.use(cors(corsOptions));

// // Serve static files from the uploads directory
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// // Define Routes
// app.use('/api/auth', require('./routes/auth'));
// app.use('/api/posts', require('./routes/posts'));
// app.use('/api/comments', require('./routes/comments'));

// // Proxy requests to the Vercel frontend
// app.use('/', createProxyMiddleware({
//   target: 'https://my-social-media-eight.vercel.app', // Replace with your actual frontend URL
//   changeOrigin: true,
//   pathRewrite: {
//     '^/': '/', // rewrite path
//   },
// }));

// const PORT = process.env.PORT || 4000;
// app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const { createProxyMiddleware } = require('http-proxy-middleware');

dotenv.config();

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json());

// CORS configuration
const corsOptions = {
  origin: 'https://my-social-media-eight.vercel.app', // Replace with your actual frontend URL
  optionsSuccessStatus: 200,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  allowedHeaders: ['Content-Type', 'Authorization']
};
app.use(cors(corsOptions));

// Additional middleware to manually add CORS headers
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "https://my-social-media-eight.vercel.app");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,PUT,PATCH,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  next();
});

// Serve static files from the uploads directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Define Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/posts', require('./routes/posts'));
app.use('/api/comments', require('./routes/comments'));

// Proxy requests to the Vercel frontend
app.use('/', createProxyMiddleware({
  target: 'https://my-social-media-eight.vercel.app', // Replace with your actual frontend URL
  changeOrigin: true,
  pathRewrite: {
    '^/': '/', // rewrite path
  },
}));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

