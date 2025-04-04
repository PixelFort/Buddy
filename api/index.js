const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const moment = require('moment');
const crypto = require('crypto')
const app = express();
const port = 8000;
const cors = require('cors');
app.use(cors());

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const jwt = require('jsonwebtoken');

const User = require('./models/user');
const Game = require('./models/game');
const Venue = require('./models/venue');

mongoose
  .connect(
    (MONGO_URI =
      'mongodb+srv://ronitkhanuja:Ronit123@cluster0.odejoiu.mongodb.net/Buddy?retryWrites=true&w=majority'),
  )
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.log('Error connecting to MongoDB', err);
  });

app.listen(port, () => {
  console.log('Server running on port 8000');
});

app.post('/register', async (req, res) => {
  try {
    const userData = req.body;

    const newUser = new User(userData);

    await newUser.save();

    const secretKey = crypto.randomBytes(32).toString('hex');

    const token = jwt.sign({userId: user._id}, secretKey);

    res.status(200).json({token});
  } catch (error) {
    console.log('Error creating user', error);
    res.status(500).json({error: 'Internal server error'});
  } 
});

app.post('/login', async (req, res) => {
    try {
      const {email, password} = req.body;
  
      const user = await User.findOne({email});
      if (!user) {
        return res.status(401).json({message: 'Invalid email'});
      }
  
      if (user.password !== password) {
        return res.status(401).json({message: 'Invalid password'});
      }
  
      const secretKey = crypto.randomBytes(32).toString('hex');
  
      const token = jwt.sign({userId: user._id}, secretKey);
  
      res.status(200).json({token});
    } catch (error) {
      console.log('error loggin in', error);
      res.status(500).json({message: 'Error loggin In'});
    }
  });