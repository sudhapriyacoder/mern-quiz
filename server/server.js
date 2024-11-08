const express = require('express');
const app = express();
require('dotenv').config();
app.use(express.json());
const dbconfig = require('./config/dbconfig');

const userRoute = require('./routes/usersRoute');
const examRoute = require('./routes/examRoute');


app.use('/api/users', userRoute);
app.use('/api/exams', examRoute);
const port = process.env.PORT || 5000;

const path = require('path');
__dirname = path.resolve();

if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/build')));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", 'build', 'index.html'))
    })
}


app.listen(port, () => {
    console.log(`Server is listening on PORT: ${port}`);
});