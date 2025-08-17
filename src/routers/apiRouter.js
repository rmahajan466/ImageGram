// this api router will be triggered when any request starts with /api
import express from 'express';
import postRouter from './post.js';
import userRouter from './user.js';

const router = express.Router();

router.use('/posts', postRouter); // Use the post router for all /posts routes

router.use('/users', userRouter); // Use the user router for all /users routes

export default router; // Export the api router to be used in index.js
// This allows us to keep the routes organized and modular, making it easier to manage and scale
// the application as it grows.