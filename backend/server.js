import express from 'express';
import dotenv from 'dotenv';
import cookieparser from 'cookie-parser';

import authRoutes from './routes/auth.routes.js'; 
import messageRoutes from './routes/message.routes.js';
import userRoutes from './routes/user.routes.js';

import connectToMongoDB from './db/connectToMongoDB.js';


const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectToMongoDB();

// Middleware to parse JSON requests
app.use(express.json());
app.use(cookieparser());

// Define routes
app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/users',userRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
