const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const dotenv = require('dotenv');

if (process.env.NODE_ENV !== 'production') dotenv.load();

const {
  GOOGLE_CLIENT,
  GOOGLE_SECRET,
} = process.env;

const app = express();

passport.use(new GoogleStrategy());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
