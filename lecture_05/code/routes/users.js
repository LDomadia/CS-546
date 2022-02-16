const express = require('express');
const router = express.Router();
const data = require('../data');
const userData = data.users;

// The new way
router.route('/').get(async (req, res) => {
  try {
    const userList = await userData.getAllUsers();
    res.json(userList);
  } catch (e) {
    // Something went wrong with the server!
    res.status(500).send();
  }
}).post(async (req, res) => {
  res.send('POST request to http://localhost:3000/users')
}).delete(async (req, res) => {
  res.send('DELETE request to http://localhost:3000/users')
});

router.route('/:id').get(async (req, res) => {
  try {
    req.params.id = validation.checkId(req.params.id);
    const user = await userData.getPostById(req.params.id);
    res.json(user);
  } catch (e) {
    res.status(404).json(e);
  }
}).post(async (req, res) => {
  res.send(`POST request to http://localhost:3000/users/${req.params.id}`)
}).delete(async (req, res) => {
  res.send(`DELETE request to http://localhost:3000/users/${req.params.id}`)
});

//---------------------------------------------------------------------

router.get('/:id', async (req, res) => {
  try {
    const user = await userData.getUserById(req.params.id);
    res.json(user);
  } catch (e) {
    res.status(404).json({ message: 'not found!' });
  }
});

router.get('/', async (req, res) => {
  try {
    const userList = await userData.getAllUsers();
    res.json(userList);
  } catch (e) {
    // Something went wrong with the server!
    res.status(500).send();
  }
});

router.post('/', async (req, res) => {
  // Not implemented
  res.status(501).send();
});

module.exports = router;
