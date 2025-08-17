// this api router will be triggered when any request starts with /api
import express from 'express';
import v1Router from './v1/v1Router.js'; // Import the v1 router
import v2Router from './v2/v2Router.js'; // Import the v2 router

const router = express.Router();

router.use('/v1', v1Router); // Use the v1 router for all /v1 routes

export default router;