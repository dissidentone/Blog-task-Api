const Post = require('../models/Post');

exports.getPosts = async (req, res) => {
  const posts = await Post.find().populate('author', 'email');
  res.json(posts);
};

exports.createPost = async (req, res) => {
  const { title, content } = req.body;
  const post = await Post.create({ title, content, author: req.user.id });
  res.status(201).json(post);
};

exports.updatePost = async (req, res) => {
  const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(post);
};

exports.deletePost = async (req, res) => {
  await Post.findByIdAndDelete(req.params.id);
  res.json({ message: 'Post silindi.' });
};
