import express from 'express';
import connectDB from './config/dbConfig.js'; // Import the connectDB function from the dbConfig.js file

const PORT = 3000;

const app = express(); // Create an express app server instance

app.get('/', (req, res) => {
    return res.send('Hello Welcome!');
}); // Define a route handler for the GET / route

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectDB();
}); // Start the server on port 3000
