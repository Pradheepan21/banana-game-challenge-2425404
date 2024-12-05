const express = require('express');
const { auth } = require('../utils/firebase');
const router = express.Router();
const axios = require('axios');
require('dotenv').config();
const firebaseApiKey = process.env.FIREBASE_API_KEY;

router.post('/register', async (req, res) => {
  const { email, password, displayName } = req.body;

  try {
    const userRecord = await auth.createUser({
      email,
      password
    });

    res.status(201).json({ message: 'User registered successfully', userId: userRecord.uid });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${firebaseApiKey}`, {
        email,
        password,
        returnSecureToken: true
      });
  
      const { idToken } = response.data;
  
      res.status(200).json({ message: 'User logged in successfully', token: idToken });
    } catch (error) {
      console.error("Login error:", error.response?.data || error.message);
      res.status(400).json({ error: 'Invalid credentials' });
    }
  });

module.exports = router;
