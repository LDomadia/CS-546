const express = require('express');
const router = express.Router();
const data = require('../data');
const postData = data.posts;

// New way of doing it:
// You can link multiple requests in same block of code
router.route('/').get(async (req, res) => {
  try {
    const postList = await postData.getAllPosts();
    res.json(postList);
  } catch (e) {
    res.status(500).send(e);
  }
}).post(async (req, res) => {
  res.send('POST request to http://localhost:3000/posts')
}).delete(async (req, res) => {
  res.send('DELETE request to http://localhost:3000/posts')
});

router.route('/:id').get(async (req, res) => {
  try {
    req.params.id = validation.checkId(req.params.id);
    const post = await postData.getPostById(req.params.id);
    res.json(post);
  } catch (e) {
    res.status(404).json(e);
  }
}).post(async (req, res) => {
  res.send(`POST request to http://localhost:3000/posts/${req.params.id}`)
}).delete(async (req, res) => {
  res.send(`DELETE request to http://localhost:3000/posts/${req.params.id}`)
});

//----------------------------------------------------------------------

router.get('/:id', async (req, res) => {
  try {
    const post = await postData.getPostById(req.params.id);
    res.json(post);
  } catch (e) {
    res.status(404).json({ message: 'Post not found' });
  }
});

router.get('/', async (req, res) => {
  try {
    const postList = await postData.getAllPosts();
    res.json(postList);
  } catch (e) {
    res.status(500).send();
  }
});

router.post('/', async (req, res) => {
  // Not implemented
  res.status(501).send();
});

router.delete('/', async (req, res) => {
  // Not implemented
  res.status(501).send();
});

module.exports = router;
