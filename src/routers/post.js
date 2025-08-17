// Here all the post related routes will be defined
// We look at the remaining url part after /posts
import express from 'express';

import {s3uploader} from '../config/multerConfig.js';
import { createPost, getAllPosts } from '../controllers/postController.js';

const router = express.Router();

router.post('/', s3uploader.single('image'), createPost);

router.get('/', getAllPosts);

export default router;