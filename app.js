const express = require('express')
const app = express();
const path = require('path');
console.clear();

//set the view for express
app.set('view engine','ejs');
app.set('views',path.join(__dirname, 'views'));

// //use static assest
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', require('./routes/movieRoutes.js'));
const port = 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
