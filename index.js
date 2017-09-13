const express = require('express');
const app = express();

// default route
app.get('/', (req, res) => {
  res.send({ hi: 'there'});
});

// dynamic port binding for heroku, et.al.
const PORT = process.env.PORT || 5000;
app.listen(PORT);
