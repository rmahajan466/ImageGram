import { createPostService } from '../services/postService.js';

export async function createPost(req, res) {
    // call the service layer function


    const post = await createPostService({
        caption: req.body.caption,
        image: req.file.location
    });

    return res.status(201).json({
        success: true,
        message: 'Post created successfully',
        data: post
    });
}

export async function getAllPosts(req, res) {
    // return unimplemented response for now
    return res.status(501).json({
        success: false,
        message: 'Not implemented yet'
    });
}