const express = require("express");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const keys = require("./config/keys.js");

const app = express();

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback"
    },
    accessToken => {
      console.log(accessToken);
    }
  )
);

// Google oauth2 callback
app.get(
  "/auth/google",
  passport.authenticate("google", {
    // this scope defines access to account resources
    scope: ["profile", "email"]
  })
);

// dynamic port binding for heroku, et.al.
const PORT = process.env.PORT || 5000;
app.listen(PORT);
