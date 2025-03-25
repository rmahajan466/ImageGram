import Post from '../schema/post.js';

export const createPost = async (caption, image, user) => {
    try {
        // const newPost = new Post.create({ caption, image, user});
        const newPost = new Post({ caption, image, user});
        await newPost.save();
        return newPost;
    } catch (error) {
        console.error(error);
    }
};

export const findAllPosts = async () => {
    try {
        const posts = await Post.find().populate('user');
        return posts;
    } catch (error) {
        console.error(error);
    }
};

export const findPostById = async (id) => {
    try {
        const post = await Post.findById(id).populate('user');
        return post;
    } catch (error) {
        console.error(error);
    }
};

export const deletePost = async (id) => {
    try {
        const post = await Post.findByIdAndDelete(id);
        return post;
    } catch (error) {
        console.error(error);
    }
};