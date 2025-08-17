import express from 'express';
import connectDB from './config/dbConfig.js';
import postRouter from './routers/post.js';
import userRouter from './routers/user.js';

const PORT = 3000;

const app = express(); // Create an express app server instance

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded());

app.use('/posts', postRouter); // Use the post router for all /posts routes

app.use('/users', userRouter); // Use the user router for all /users routes

app.get('/ping', (req, res) => {
    console.log(req.query);
    console.log(req.body);
    return res.json({ message: 'pong'});
});



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectDB();
}); // Start the server on port 3000
