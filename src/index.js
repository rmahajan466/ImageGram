import express from 'express';
import connectDB from './config/dbConfig.js';
import { createPost } from './controllers/postController.js';
import { s3uploader } from './config/multerConfig.js';

const PORT = 3000;

const app = express(); // Create an express app server instance

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded());

app.get('/ping', (req, res) => {
    console.log(req.query);
    console.log(req.body);
    return res.json({ message: 'pong'});
});

app.post('/posts', s3uploader.single('image'), createPost); // Define a route handler for the POST /posts route

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectDB();
}); // Start the server on port 3000
