import mongoose from 'mongoose';
import PostMessage from '../models/postMessage.js'

export const getPosts = async(req, res)=>{
    try {
        const PostMessages = await PostMessage.findOne();
        res.status(200).json(PostMessages);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
};

export const createPosts = async(req, res)=>{
    const post = req.body;

    const newPost = new PostMessage(post);
    try {
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
};

export const updatePost = async(req, res)=>{
    const {id: _id} = req.params;
    const post = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("cannot edit the post with this id");

    const updatedPost = await PostMessage.findByIdAndUpdate(_id, post, {new: true});
    res.json(updatedPost);
}