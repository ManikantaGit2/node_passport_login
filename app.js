const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const app = express();

//EJS
app.use(expressLayouts);
app.set('view engine','ejs');

//Routes

app.use('/',require('./routes/index'));

app.use('/user',require('./routes/user'));


const PORT = process.env.PORT || 5010;

app.listen(PORT,console.log(`Server running on port ${PORT}`));