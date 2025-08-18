import { createPost, findAllPosts, countAllPosts, deletePostById, updatePostById } from '../repositories/postRepository.js';

export const createPostService = async (createPostObject) => {
    const caption = createPostObject.caption?.trim();
    const image = createPostObject.image;
    // const user = createPostObject.user; add later

    const post = await createPost(caption, image);

    return post;
};

export const getAllPostsService = async (offset, limit) => {
    const posts = await findAllPosts(offset, limit);

    // Calculate total documents
    const totalDocuments = await countAllPosts();

    const totalPages = Math.ceil(totalDocuments / limit);

    return {
        posts, totalPages, totalDocuments
    }

}

export const deletePostService = async (id) => {
    // call the repository function to find a post by ID
    const response = await deletePostById(id);
    return response;
}

export const updatePostService = async (id, updateObject) => {
    // call the repository function to update a post by ID
    const updatedPost = await updatePostById(id, updateObject);
    return updatedPost;
}